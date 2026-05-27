import Link from "next/link";
import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileText,
  Play,
  Plus,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { candidates, jobs } from "@/data/demo";

export default function EmployerDashboardPage() {
  const activeJobs = jobs.length;
  const newApplicants = 24;
  const shortlisted = 20;
  const spotlightCandidates = candidates.slice(0, 3);
  const intelligence = [
    ["Strong candidate matches today", "7", "Candidates aligned with active roles and work preferences.", Sparkles],
    ["New intro videos", "4", "Fresh video-first profiles ready for a faster human read.", Play],
    ["References added", "9", "Profiles with stronger trust signals since your last visit.", ShieldCheck],
    ["Ready for interview", "5", "Candidates with clear communication and enough proof to move forward.", CheckCircle2]
  ];

  return (
    <AppShell title="Hiring Intelligence" subtitle="See what is happening across your hiring ecosystem right now.">
      <div className="space-y-6">
        <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-8">
          <div className="grid gap-8 xl:grid-cols-[1fr_0.82fr] xl:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-200">Hiring command center</p>
              <h1 className="mt-4 max-w-3xl text-balance text-4xl font-black leading-tight sm:text-5xl">
                Your strongest hiring signals, surfaced before interviews.
              </h1>
              <p className="mt-4 max-w-2xl leading-8 text-white/72">
                VizHire highlights who is gaining momentum, who is ready for deeper review, and where human signal is strongest across your open roles.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/employer/candidates" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 font-black text-viz-800">
                  <Search className="h-4 w-4" /> Discover candidates
                </Link>
                <Link href="/employer/post-job" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/24 bg-white/10 px-5 font-black text-white backdrop-blur">
                  <Plus className="h-4 w-4" /> Post a job
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur">
              {[
                ["Active jobs", String(activeJobs), "/employer/jobs?status=active"],
                ["New applicants", String(newApplicants), "/employer/applicant-tracking?stage=Applied"],
                ["Shortlisted", String(shortlisted), "/employer/applicant-tracking?stage=Shortlisted"]
              ].map(([label, value, href]) => (
                <Link key={label} href={href} className="rounded-2xl bg-white/10 p-4 transition hover:bg-white/16">
                  <p className="text-3xl font-black">{value}</p>
                  <p className="mt-1 text-xs font-bold text-white/68">{label}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {intelligence.map(([label, value, copy, Icon]) => {
            const href =
              label === "Ready for interview"
                ? "/employer/applicant-tracking?stage=Interviewing"
                : label === "References added"
                  ? "/employer/candidates"
                  : label === "New intro videos"
                    ? "/employer/applicant-tracking?stage=Reviewed"
                    : "/employer/candidates";

            return (
            <Link key={label as string} href={href} className="glass block rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-glow">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-3xl font-black text-ink">{value as string}</p>
                  <h2 className="mt-2 font-black text-ink">{label as string}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{copy as string}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-viz-50 text-viz-700">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
            </Link>
          )})}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_0.36fr]">
          <div className="space-y-6">
            <section className="glass rounded-3xl p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-black text-ink">Active hiring rooms</h2>
                  <p className="mt-1 text-sm text-slate-500">Each role is a focused space for candidate discovery, confidence signals, and interview momentum.</p>
                </div>
                <Link href="/employer/post-job" className="text-sm font-black text-viz-700">Create New Job</Link>
              </div>
              <label className="mt-5 flex items-center gap-3 rounded-2xl border border-viz-100 bg-white px-4 py-3 shadow-soft">
                <Search className="h-5 w-5 text-slate-400" />
                <input className="w-full border-0 bg-transparent text-sm outline-none" placeholder="Search jobs, applicants, notes, or hiring stages..." />
              </label>
              <div className="mt-5 grid gap-4">
                {jobs.map((job) => (
                  <article key={job.id} className="rounded-3xl bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <Link href={`/employer/jobs/${job.id}/review`} className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xl font-black text-ink">{job.title}</p>
                          <span className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{job.stage}</span>
                        </div>
                        <p className="mt-2 text-sm font-bold text-slate-500">{job.applicants} applicants · {job.location} · {job.company}</p>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{job.description}</p>
                        <div className="mt-4 grid gap-2 sm:grid-cols-3">
                          {[
                            ["Suggested matches", "12"],
                            ["New videos", "3"],
                            ["Ready now", "5"]
                          ].map(([label, value]) => (
                            <span key={label} className="rounded-2xl bg-[#fbfafc] px-3 py-2 text-xs font-black text-slate-600">
                              <strong className="text-viz-700">{value}</strong> {label}
                            </span>
                          ))}
                        </div>
                      </Link>
                      <div className="flex flex-wrap gap-2">
                        <Link href={`/employer/jobs/${job.id}/review`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 text-sm font-black text-white">
                          Review Applicants <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href={`/employer/jobs/${job.id}`} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-viz-200 bg-white px-4 text-sm font-black text-viz-700">
                          Review Job Posting
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="glass rounded-3xl p-5 sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Strong matches today</p>
                  <h2 className="mt-2 text-2xl font-black text-ink">People worth reviewing now</h2>
                </div>
                <Link href="/employer/candidates" className="text-sm font-black text-viz-700">Explore all</Link>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {spotlightCandidates.map((candidate) => (
                  <Link key={candidate.id} href={`/employer/candidates/${candidate.id}`} className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                    <div className="relative">
                      <img src={candidate.video} alt={`${candidate.name} intro`} className="vh-candidate-thumb h-44 w-full transition group-hover:scale-105" />
                      <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700">{candidate.match}%</span>
                      <span className="absolute inset-0 m-auto grid h-11 w-11 place-items-center rounded-full bg-white/94 text-viz-700 shadow-soft">
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="font-black text-ink">{candidate.name}</p>
                      <p className="mt-1 text-sm font-bold text-slate-500">{candidate.title}</p>
                      <p className="mt-3 text-xs font-bold leading-5 text-slate-600">{candidate.experienceTimeline[0].company} · {candidate.experienceTimeline[0].duration}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-black text-ink">Quick Actions</h2>
              <div className="mt-5 grid gap-3">
                <Link href="/employer/post-job" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-viz-700 px-4 font-black text-white"><BriefcaseBusiness className="h-5 w-5" /> Post a Job</Link>
                <Link href="/employer/candidates" className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-viz-200 bg-white px-4 font-black text-viz-700"><Search className="h-5 w-5" /> Browse Candidates</Link>
                <Link href="/employer/applicant-tracking" className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-viz-200 bg-white px-4 font-black text-viz-700"><FileText className="h-5 w-5" /> View Pipeline</Link>
              </div>
            </section>

            <section className="rounded-2xl border border-viz-100 bg-white p-6 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-viz-50 text-viz-700">
                <Rocket className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-viz-600">Growth tools</p>
              <h2 className="mt-2 text-xl font-black text-ink">Promote active roles when you need more reach.</h2>
              <p className="mt-3 text-sm font-bold leading-6 text-slate-600">
                Boost visibility, unlock premium sourcing, and add recruiter analytics after your hiring activity begins.
              </p>
              <Link href="/employer/upgrade" className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-viz-200 bg-white px-4 text-sm font-black text-viz-700 transition hover:bg-viz-50">
                View premium options
              </Link>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-black text-ink">Hiring pulse</h2>
              <div className="mt-5 space-y-4">
                {[
                  ["New intro video uploaded", candidates[0].name, Bell],
                  ["Strong communication signal", candidates[2].name, Star],
                  ["Ready for interview", candidates[1].name, Clock3]
                ].map(([title, person, Icon]) => (
                  <div key={title as string} className="flex gap-3 rounded-2xl bg-white p-3 shadow-soft">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-viz-50 text-viz-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-black text-ink">{title as string}</p>
                      <p className="mt-1 text-xs font-bold text-slate-500">{person as string} · Today</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-black text-ink">Notifications</h2>
              <p className="mt-3 rounded-2xl bg-viz-50 p-4 text-sm font-bold leading-6 text-viz-700">3 candidates are ready for review across your active jobs, with new video context and resume-backed experience.</p>
            </section>
          </aside>
        </section>
      </div>
    </AppShell>
  );
}
