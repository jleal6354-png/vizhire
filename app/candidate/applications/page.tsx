import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Clock3, Play } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { applicationActivity, jobs } from "@/data/demo";

const statusMap = ["Video submitted", "Interviewing", "Reviewed"];

export default function CandidateApplicationsPage() {
  return (
    <AppShell role="candidate" title="Applications" subtitle="Track every role you applied to with your VizHire profile.">
      <div className="space-y-6">
        <section className="rounded-3xl bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Application status</p>
          <h1 className="mt-3 text-4xl font-black">Your opportunities in motion.</h1>
          <p className="mt-3 max-w-2xl leading-7 text-white/72">
            See where your profile and video answers have been sent, what employers reviewed, and what happens next.
          </p>
        </section>

        <section className="grid gap-4">
          {applicationActivity.map((item, index) => {
            const job = jobs[index] ?? jobs[0];
            const status = statusMap[index] ?? item.status;

            return (
              <Link key={`${item.jobTitle}-${item.company}`} href={`/candidate/applications/${job.id}`} className="rounded-3xl border border-viz-100 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-2xl font-black text-ink">{item.jobTitle}</h2>
                      <span className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{status}</span>
                    </div>
                    <p className="mt-2 text-sm font-bold text-slate-500">{item.company} · Applied {item.applied} · {job.workType}</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      <span className="inline-flex items-center gap-2 rounded-xl bg-[#fbfafc] px-3 py-2 text-xs font-black text-slate-600">
                        <Play className="h-4 w-4 text-viz-600" /> Video answers submitted
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-xl bg-[#fbfafc] px-3 py-2 text-xs font-black text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Profile sent
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-xl bg-[#fbfafc] px-3 py-2 text-xs font-black text-slate-600">
                        <Clock3 className="h-4 w-4 text-viz-600" /> Next: employer review
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 text-sm font-black text-white">
                    View details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </section>

        <section className="rounded-3xl border border-viz-100 bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-ink">Ready for another opportunity?</h2>
              <p className="mt-1 text-sm font-bold text-slate-500">Browse more roles and apply with your VizHire profile when a fit feels right.</p>
            </div>
            <Link href="/candidate/jobs" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-viz-200 bg-white px-4 text-sm font-black text-viz-700">
              <BriefcaseBusiness className="h-4 w-4" /> Browse jobs
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
