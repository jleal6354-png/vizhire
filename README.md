# VizHire MVP

VizHire is a responsive, web-based MVP for a premium human-first video hiring platform. It is intentionally not a native mobile app. The website is mobile-first, desktop-polished, and shareable through direct candidate profile links.

## What Is Included

- Landing page with candidate and employer messaging
- Candidate signup/login and employer signup/login
- Candidate onboarding
- Public candidate profile link
- Employer dashboard
- Candidate browse/search and candidate detail view
- Job posting page
- Applicant tracking board
- References and recommendations section
- Pricing/subscription page
- Role-gated platform admin dashboard
- Supabase-ready auth/client structure
- PostgreSQL schema with RLS starter policies
- Stripe-ready subscription fields
- AI-ready columns for future summaries, match scoring, highlights, and interview questions

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase-ready auth/database/storage
- Stripe-ready subscription model
- Demo data for investor, employer, and candidate walkthroughs

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development site:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Environment

Copy `.env.example` to `.env.local` and add your Supabase and Stripe values.

```bash
cp .env.example .env.local
```

The demo UI works without live Supabase values. Real auth, file storage, video upload, and billing should be connected before production launch.

## Database

Run `supabase/schema.sql` in Supabase SQL Editor or through the Supabase CLI. The schema supports:

- Users and roles
- Candidate and employer profiles
- Videos and resumes
- Skills, experience, education, certifications, and portfolio links
- Recommendations and references
- Jobs and applications
- Saved candidates
- Subscriptions
- Admin moderation reports

## Demo Routes

- `/` landing page
- `/candidate-signup`
- `/candidate-login`
- `/candidate/dashboard`
- `/candidate/edit`
- `/candidate/jobs`
- `/employer-signup`
- `/employer-login`
- `/onboarding`
- `/profile/maya-johnson`
- `/employer/dashboard`
- `/employer/candidates`
- `/employer/candidates/maya-johnson`
- `/employer/jobs`
- `/employer/applicant-tracking`
- `/references`
- `/pricing`
- `/admin`

## Production Notes

Before launch, connect Supabase Auth, Supabase Storage policies for videos/resumes, Stripe Checkout and webhooks, email delivery for password reset, and moderation workflows. The current code is structured so those services can replace demo data without changing the main page architecture.
