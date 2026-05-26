import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Megaphone, UsersRound } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { jobs } from "@/data/demo";

const job = jobs[0];

export default function EmployerJobPublishedPage() {
  return (
    <AppShell title="Job Published" subtitle="Your role is live and ready for candidate discovery.">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-white/12 text-emerald-200">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-viz-200">Job is live</p>
            <h1 className="mt-3 text-balance text-5xl font-black leading-tight">Your job is live.</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/76">
              Candidates can now discover and apply with their VizHire profiles.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={`/employer/jobs/${job.id}/review`} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white px-5 font-black text-viz-800">
                Review applicants <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`/employer/jobs/${job.id}`} className="inline-flex min-h-13 items-center justify-center rounded-xl border border-white/24 bg-white/10 px-5 font-black text-white backdrop-blur">
                View job posting
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-viz-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Optional job visibility</p>
              <h2 className="mt-3 text-3xl font-black text-ink">Increase candidate reach when hiring urgency is high.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Promoting this role gives it priority placement in relevant candidate job discovery. Free jobs still receive meaningful visibility.
              </p>
            </div>
            <Link href={`/employer/jobs/${job.id}/promote`} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 font-black text-white shadow-glow">
              Promote this role <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Link href="/employer/candidates" className="rounded-3xl border border-viz-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
            <UsersRound className="h-7 w-7 text-viz-600" />
            <h2 className="mt-4 text-xl font-black text-ink">Browse matched candidates</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">Explore available professionals while applicants begin coming in.</p>
          </Link>
          <Link href={`/employer/jobs/${job.id}/promote`} className="rounded-3xl border border-viz-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
            <Megaphone className="h-7 w-7 text-viz-600" />
            <h2 className="mt-4 text-xl font-black text-ink">Promote this job</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">Boost visibility when a role needs stronger reach.</p>
          </Link>
          <Link href="/employer/jobs" className="rounded-3xl border border-viz-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
            <BriefcaseBusiness className="h-7 w-7 text-viz-600" />
            <h2 className="mt-4 text-xl font-black text-ink">Manage job status</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">Pause, edit, fill, close, or reopen postings as your search evolves.</p>
          </Link>
        </section>
      </div>
    </AppShell>
  );
}
