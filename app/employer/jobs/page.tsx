import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MapPin, PauseCircle, Plus, Search } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { jobs } from "@/data/demo";

const jobStatuses: Record<string, "Draft" | "Live" | "Filled" | "Paused" | "Cancelled/Closed"> = {
  "growth-marketing-manager": "Live",
  "revenue-operations-analyst": "Live",
  "senior-ux-researcher": "Paused"
};

export default async function EmployerJobsIndexPage({ searchParams }: { searchParams?: Promise<{ status?: string }> }) {
  const query = searchParams ? await searchParams : {};
  const status = query.status ?? "active";
  const activeJobs = jobs.filter((job) => jobStatuses[job.id] !== "Cancelled/Closed");

  return (
    <AppShell title="Job Postings" subtitle="Review, edit, pause, promote, or reopen your hiring roles.">
      <div className="space-y-6">
        <section className="rounded-3xl bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Hiring roles</p>
              <h1 className="mt-3 text-4xl font-black">Control every job posting clearly.</h1>
              <p className="mt-3 max-w-2xl leading-7 text-white/72">
                Keep live roles active, pause searches when needed, and preserve applicant history even after a role is filled or closed.
              </p>
            </div>
            <Link href="/employer/post-job" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 font-black text-viz-800">
              <Plus className="h-4 w-4" /> Create New Job
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-viz-100 bg-white p-3 shadow-soft">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="flex min-h-13 items-center gap-3 rounded-2xl bg-[#fbfafc] px-4">
              <Search className="h-5 w-5 text-slate-400" />
              <input className="w-full border-0 bg-transparent text-sm font-bold outline-none" placeholder="Search jobs, stages, applicants, or status..." />
            </label>
            <div className="flex gap-2 overflow-x-auto">
              {["active", "live", "paused", "filled", "closed"].map((item) => (
                <Link
                  key={item}
                  href={`/employer/jobs?status=${item}`}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-black capitalize ${
                    status === item ? "bg-viz-700 text-white shadow-soft" : "bg-viz-50 text-viz-700 hover:bg-viz-100"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4">
          {activeJobs.map((job) => {
            const currentStatus = jobStatuses[job.id] ?? "Live";

            return (
              <article key={job.id} className="rounded-3xl border border-viz-100 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <Link href={`/employer/jobs/${job.id}`} className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-2xl font-black text-ink">{job.title}</h2>
                      <span className={`rounded-full px-3 py-1 text-xs font-black ${
                        currentStatus === "Live" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                      }`}>
                        {currentStatus}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm font-bold text-slate-600">
                      <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-viz-600" /> {job.company}</span>
                      <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-viz-600" /> {job.location}</span>
                      <span>{job.applicants} applicants</span>
                      <span>{job.stage}</span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{job.description}</p>
                  </Link>
                  <div className="grid gap-2 sm:grid-cols-2 lg:w-80">
                    <Link href={`/employer/jobs/${job.id}/review`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 text-sm font-black text-white">
                      Review Applicants <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href={`/employer/jobs/${job.id}`} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-viz-200 bg-white px-4 text-sm font-black text-viz-700">
                      Review Job Posting
                    </Link>
                    <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-viz-100 bg-white px-4 text-sm font-black text-slate-600">
                      <PauseCircle className="h-4 w-4" /> Pause
                    </button>
                    <Link href={`/employer/jobs/${job.id}/promote`} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-viz-200 bg-viz-50 px-4 text-sm font-black text-viz-700">
                      Promote role
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </AppShell>
  );
}
