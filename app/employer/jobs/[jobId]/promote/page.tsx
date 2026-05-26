import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, Clock3, Megaphone, Search, Sparkles, UsersRound } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { jobs } from "@/data/demo";

const tiers = [
  {
    name: "Featured Visibility",
    price: "$19",
    duration: "7 days",
    description: "Increased placement for candidates already exploring relevant roles.",
    features: ["Highlighted role treatment", "Higher Browse Jobs placement", "Relevant industry reach"]
  },
  {
    name: "Priority Discovery",
    price: "$49",
    duration: "14 days",
    description: "Stronger visibility across featured opportunities and suggested jobs.",
    features: ["Featured Opportunities placement", "Suggested Jobs priority", "Matching candidate pools"]
  },
  {
    name: "Hiring Push",
    price: "$99",
    duration: "30 days",
    description: "Maximum marketplace visibility for urgent or hard-to-fill roles.",
    features: ["Candidate spotlight placement", "Priority industry visibility", "Extended visibility window"]
  }
];

export function generateStaticParams() {
  return jobs.map((job) => ({ jobId: job.id }));
}

export default async function PromoteJobPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const job = jobs.find((item) => item.id === jobId) ?? jobs[0];
  const company = job.hideCompanyName ? "Company private" : job.company;

  return (
    <AppShell title="Promote This Job" subtitle="Increase visibility for a specific role when hiring urgency is high.">
      <Link href={`/employer/jobs/${job.id}`} className="mb-5 inline-flex items-center gap-2 text-sm font-black text-viz-700">
        <ArrowLeft className="h-4 w-4" /> Back to job posting
      </Link>

      <div className="space-y-6">
        <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Job-specific visibility</p>
              <h1 className="mt-3 max-w-4xl text-balance text-5xl font-black leading-tight">Promote {job.title} to relevant candidates.</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/74">
                Promotions are optional visibility acceleration for this role only. Free jobs still receive meaningful reach.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-black text-viz-100">{company}</p>
              <h2 className="mt-2 text-2xl font-black">{job.workType} · {job.location}</h2>
              <p className="mt-3 text-sm font-bold leading-6 text-white/68">{job.applicants} applicants · {job.posted}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <article key={tier.name} className={`relative rounded-[2rem] border bg-white p-6 shadow-soft ${index === 1 ? "border-viz-400 ring-2 ring-viz-100" : "border-viz-100"}`}>
              {index === 1 && <p className="absolute right-5 top-5 rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">Recommended</p>}
              <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">{tier.duration}</p>
              <h2 className="mt-3 text-2xl font-black text-ink">{tier.name}</h2>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{tier.description}</p>
              <p className="mt-5 text-5xl font-black text-viz-700">{tier.price}</p>
              <ul className="mt-5 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-bold leading-6 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" /> {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/employer/jobs/${job.id}`} className={`mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl px-4 text-sm font-black ${
                index === 1 ? "bg-viz-700 text-white shadow-glow" : "border border-viz-200 bg-white text-viz-700"
              }`}>
                Select {tier.name}
              </Link>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.58fr_0.42fr]">
          <div className="rounded-[2rem] border border-viz-100 bg-white p-6 shadow-soft sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Visibility preview</p>
            <h2 className="mt-3 text-3xl font-black text-ink">Where promoted jobs appear</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Browse Jobs", "Higher placement when relevant candidates scan opportunities.", Search],
                ["Featured Opportunities", "Premium highlighted placement for matching candidate interests.", Sparkles],
                ["Suggested Jobs", "Priority appearance when role skills and preferences align.", Megaphone],
                ["Candidate discovery feeds", "More visibility in relevant industry and role lanes.", UsersRound]
              ].map(([title, text, Icon]) => (
                <div key={title as string} className="rounded-2xl bg-[#fbfafc] p-4">
                  <Icon className="h-5 w-5 text-viz-600" />
                  <h3 className="mt-3 font-black text-ink">{title as string}</h3>
                  <p className="mt-1 text-sm font-bold leading-6 text-slate-600">{text as string}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[2rem] border border-viz-100 bg-white p-6 shadow-soft">
              <BarChart3 className="h-7 w-7 text-viz-600" />
              <h2 className="mt-4 text-2xl font-black text-ink">Estimated visibility boost</h2>
              <div className="mt-5 grid gap-3">
                {[
                  ["Candidate reach", "2.4x more relevant impressions"],
                  ["Industries reached", job.preferredSkills.includes("Healthcare") ? "Healthcare, Growth, Remote" : "Role-matched talent lanes"],
                  ["Matching pools", "Candidates with aligned skills and work preferences"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-viz-50 px-4 py-3">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-viz-600">{label}</p>
                    <p className="mt-1 text-sm font-black text-ink">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-viz-100 bg-white p-6 shadow-soft">
              <Clock3 className="h-7 w-7 text-viz-600" />
              <h2 className="mt-4 text-2xl font-black text-ink">Fair marketplace principle</h2>
              <p className="mt-3 text-sm font-bold leading-6 text-slate-600">
                Promotions increase visibility only where the role is relevant. VizHire does not show unrelated jobs just because they are promoted.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </AppShell>
  );
}
