create type public.user_role as enum ('candidate', 'employer', 'admin');
create type public.application_stage as enum ('applied', 'reviewed', 'shortlisted', 'interviewing', 'offer', 'rejected', 'hired');
create type public.subscription_status as enum ('trialing', 'active', 'past_due', 'canceled');

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.user_role not null,
  full_name text not null,
  email text not null unique,
  avatar_url text,
  created_at timestamptz not null default now()
);

create table public.candidate_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  slug text not null unique,
  desired_role text not null,
  location text,
  about text,
  availability text,
  desired_salary_range text,
  top_skills text[] not null default '{}',
  work_preferences text[] not null default '{}',
  resume_url text,
  intro_video_id uuid,
  ai_summary text,
  ai_highlights jsonb not null default '[]',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.employer_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  company_name text not null,
  company_website text,
  industry text,
  team_size text,
  moderation_status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table public.videos (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.users(id) on delete cascade,
  storage_path text not null,
  thumbnail_url text,
  duration_seconds integer,
  transcript text,
  purpose text not null,
  created_at timestamptz not null default now()
);

alter table public.candidate_profiles
  add constraint candidate_intro_video_fk foreign key (intro_video_id) references public.videos(id);

create table public.skills (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

create table public.candidate_skills (
  candidate_profile_id uuid references public.candidate_profiles(id) on delete cascade,
  skill_id uuid references public.skills(id) on delete cascade,
  proficiency text,
  primary key (candidate_profile_id, skill_id)
);

create table public.experience_items (
  id uuid primary key default gen_random_uuid(),
  candidate_profile_id uuid not null references public.candidate_profiles(id) on delete cascade,
  company text not null,
  title text not null,
  start_date date,
  end_date date,
  description text
);

create table public.education_items (
  id uuid primary key default gen_random_uuid(),
  candidate_profile_id uuid not null references public.candidate_profiles(id) on delete cascade,
  institution text not null,
  credential text not null,
  graduation_year integer
);

create table public.certifications (
  id uuid primary key default gen_random_uuid(),
  candidate_profile_id uuid not null references public.candidate_profiles(id) on delete cascade,
  name text not null,
  issuer text,
  issued_at date
);

create table public.portfolio_links (
  id uuid primary key default gen_random_uuid(),
  candidate_profile_id uuid not null references public.candidate_profiles(id) on delete cascade,
  label text not null,
  url text not null
);

create table public.recommendations (
  id uuid primary key default gen_random_uuid(),
  candidate_profile_id uuid not null references public.candidate_profiles(id) on delete cascade,
  recommender_name text not null,
  recommender_title text,
  body text not null,
  video_id uuid references public.videos(id),
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table public.referrals (
  id uuid primary key default gen_random_uuid(),
  candidate_profile_id uuid not null references public.candidate_profiles(id) on delete cascade,
  referrer_name text not null,
  referrer_email text,
  relationship text,
  note text,
  video_id uuid references public.videos(id),
  verified_at timestamptz
);

comment on table public.referrals is 'Legacy table name retained for compatibility. User-facing product language is References.';

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  employer_profile_id uuid not null references public.employer_profiles(id) on delete cascade,
  title text not null,
  location text,
  description text not null,
  salary_range text,
  show_salary boolean not null default true,
  hide_company_name boolean not null default false,
  work_type text not null default 'Remote',
  required_skills text[] not null default '{}',
  preferred_skills text[] not null default '{}',
  video_questions text[] not null default '{}',
  video_prompt text,
  status text not null default 'open',
  ai_match_criteria jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table public.applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  candidate_profile_id uuid not null references public.candidate_profiles(id) on delete cascade,
  stage public.application_stage not null default 'applied',
  match_score integer,
  ai_candidate_summary text,
  ai_interview_questions jsonb not null default '[]',
  created_at timestamptz not null default now(),
  unique (job_id, candidate_profile_id)
);

create table public.saved_candidates (
  employer_profile_id uuid references public.employer_profiles(id) on delete cascade,
  candidate_profile_id uuid references public.candidate_profiles(id) on delete cascade,
  note text,
  created_at timestamptz not null default now(),
  primary key (employer_profile_id, candidate_profile_id)
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  employer_profile_id uuid not null references public.employer_profiles(id) on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan_name text not null,
  status public.subscription_status not null default 'trialing',
  current_period_end timestamptz
);

create table public.moderation_reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid references public.users(id) on delete set null,
  target_type text not null,
  target_id uuid not null,
  reason text not null,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.candidate_profiles enable row level security;
alter table public.employer_profiles enable row level security;
alter table public.videos enable row level security;
alter table public.jobs enable row level security;
alter table public.applications enable row level security;
alter table public.saved_candidates enable row level security;
alter table public.subscriptions enable row level security;
alter table public.moderation_reports enable row level security;

create policy "users can read self" on public.users for select using (auth.uid() = id);
create policy "users can update self" on public.users for update using (auth.uid() = id);
create policy "public candidate profiles are readable" on public.candidate_profiles for select using (true);
create policy "candidates manage own profile" on public.candidate_profiles for all using (auth.uid() = user_id);
create policy "employers read jobs they own" on public.jobs for select using (
  exists (
    select 1 from public.employer_profiles ep
    where ep.id = jobs.employer_profile_id and ep.user_id = auth.uid()
  )
);
create policy "employers manage jobs they own" on public.jobs for all using (
  exists (
    select 1 from public.employer_profiles ep
    where ep.id = jobs.employer_profile_id and ep.user_id = auth.uid()
  )
);
create policy "employers read applications for owned jobs" on public.applications for select using (
  exists (
    select 1 from public.jobs j
    join public.employer_profiles ep on ep.id = j.employer_profile_id
    where j.id = applications.job_id and ep.user_id = auth.uid()
  )
);
