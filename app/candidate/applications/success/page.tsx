import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Send, Share2, Sparkles, Zap } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { jobs } from "@/data/demo";

export default async function CandidateApplicationSuccessPage({ searchParams }: { searchParams?: Promise<{ job?: string }> }) {
  const query = searchParams ? await searchParams : {};
  const job = jobs.find((item) => item.id === query.job) ?? jobs[0];

  return (
    <AppShell role="candidate" title="Application Sent" subtitle="Your VizHire application is now with the employer.">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-center text-white shadow-glow sm:p-10">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-white/12 text-emerald-200">
            <Send className="h-8 w-8" />
          </span>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-viz-200">Application submitted</p>
          <h1 className="mt-3 text-balance text-5xl font-black leading-tight">Your application is on its way.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/76">
            The employer can now review your VizHire profile, intro video, experience, and video answers.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm font-bold leading-6 text-white/64">
            If they decide to move forward, you&apos;ll be notified here.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={`/candidate/applications/${job.id}`} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white px-5 font-black text-viz-800">
              View application status <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/candidate/jobs" className="inline-flex min-h-13 items-center justify-center rounded-xl border border-white/24 bg-white/10 px-5 font-black text-white backdrop-blur">
              Browse more jobs
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-viz-100 bg-white p-6 shadow-soft">
            <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            <h2 className="mt-4 text-xl font-black text-ink">Video answers submitted</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">Your answers are attached to this application.</p>
          </div>
          <Link href={`/candidate/jobs/${job.id}`} className="rounded-3xl border border-viz-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
            <BriefcaseBusiness className="h-7 w-7 text-viz-600" />
            <h2 className="mt-4 text-xl font-black text-ink">Review the role</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{job.title} at {job.hideCompanyName ? "Company private" : job.company}</p>
          </Link>
          <Link href={`mailto:?subject=${encodeURIComponent(job.title)}&body=${encodeURIComponent(`This role could be a good fit: /candidate/jobs/${job.id}`)}`} className="rounded-3xl border border-viz-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow">
            <Share2 className="h-7 w-7 text-viz-600" />
            <h2 className="mt-4 text-xl font-black text-ink">Share this opportunity</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-600">Send this role to someone who may be a strong fit.</p>
          </Link>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-viz-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Optional visibility boost</p>
              <h2 className="mt-3 text-3xl font-black text-ink">Get this application seen sooner.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Free applications still work and employers still choose based on fit. Boosting simply gives this application priority visibility in large review queues.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Fast Pass review", "$4.99"],
                  ["Weekly visibility", "$9.99"],
                  ["Included with Boost", "Member"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-viz-50 px-4 py-3">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-viz-600">{label}</p>
                    <p className="mt-1 text-lg font-black text-ink">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.18),transparent_36%),linear-gradient(180deg,#fbfaff,#ffffff)] p-5 text-center ring-1 ring-viz-100">
              <Zap className="mx-auto h-8 w-8 text-viz-600" />
              <h3 className="mt-4 text-2xl font-black text-ink">Priority visibility</h3>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-600">Move your application closer to the top when employers review this candidate pool.</p>
              <Link href={`/candidate/upgrade?application=${job.id}`} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 text-sm font-black text-white shadow-glow">
                <Sparkles className="h-4 w-4" /> Boost this application
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
