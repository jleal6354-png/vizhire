import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, CheckCircle2, Clock3, Play, Video } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { candidates, jobs } from "@/data/demo";

const candidate = candidates[0];

export function generateStaticParams() {
  return jobs.map((job) => ({ jobId: job.id }));
}

export default async function CandidateApplicationDetailPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const job = jobs.find((item) => item.id === jobId) ?? jobs[0];
  const company = job.hideCompanyName ? "Company private" : job.company;

  return (
    <AppShell role="candidate" title="Application Detail" subtitle="Your VizHire profile and video answers for this role.">
      <Link href="/candidate/applications" className="mb-5 inline-flex items-center gap-2 text-sm font-black text-viz-700">
        <ArrowLeft className="h-4 w-4" /> Back to applications
      </Link>

      <div className="grid gap-6 xl:grid-cols-[0.66fr_0.34fr]">
        <section className="space-y-6">
          <article className="rounded-3xl bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Video submitted</p>
            <h1 className="mt-3 text-4xl font-black">{job.title}</h1>
            <p className="mt-3 text-lg text-white/74">{company} · Applied with VizHire profile</p>
          </article>

          <article className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">Video answers sent</h2>
            <div className="mt-5 grid gap-3">
              {job.videoQuestions.slice(0, 3).map((question, index) => (
                <div key={question} className="flex gap-4 rounded-2xl bg-white p-4 shadow-soft">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-viz-50 text-viz-700">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-viz-600">Answer {index + 1}</p>
                    <p className="mt-1 font-black text-ink">{question}</p>
                    <p className="mt-1 text-sm font-bold text-emerald-700">Saved and submitted</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">What the employer sees</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Profile intro video", "Resume and experience", "Top 5 Skills", "References and recommendations"].map((item) => (
                <p key={item} className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-soft">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" /> {item}
                </p>
              ))}
            </div>
          </article>
        </section>

        <aside className="space-y-6">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-xl font-black text-ink">Current status</h2>
            <p className="mt-3 rounded-2xl bg-viz-50 px-4 py-3 text-sm font-black text-viz-700">Video submitted</p>
            <div className="mt-5 space-y-3">
              {["Applied", "Video submitted", "Reviewed", "Interviewing", "Offer"].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-black ${index < 2 ? "bg-viz-700 text-white" : "bg-viz-50 text-viz-700"}`}>{index + 1}</span>
                  <span className="text-sm font-black text-ink">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <img src={candidate.avatar} alt={candidate.name} className="h-24 w-24 rounded-3xl object-cover shadow-soft" />
            <h2 className="mt-4 text-xl font-black text-ink">{candidate.name}</h2>
            <p className="mt-1 text-sm font-bold text-slate-500">{candidate.desiredRole}</p>
            <Link href={`/candidate/jobs/${job.id}`} className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-viz-200 bg-white px-4 text-sm font-black text-viz-700">
              <BriefcaseBusiness className="h-4 w-4" /> View job
            </Link>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
