import Link from "next/link";
import { ArrowLeft, BarChart3, Eye, Sparkles, Star, TrendingUp } from "lucide-react";
import { AppShell } from "@/components/app-shell";

const boostFeatures = [
  ["Single application boost", "Add priority visibility to one application you really care about.", Sparkles],
  ["Fast Pass review", "Move one application closer to the top of large employer review queues.", TrendingUp],
  ["Featured profile visibility", "Appear more prominently when recruiters are browsing talent like you.", Star],
  ["Recruiter discovery boost", "Increase your chance of being seen in relevant candidate discovery moments.", Eye],
  ["Profile insights", "Understand profile views, share activity, and visibility momentum.", BarChart3],
  ["Priority matching visibility", "Signal that you are actively exploring and ready for better-fit opportunities.", TrendingUp]
];

export default function CandidateUpgradePage() {
  return (
    <AppShell role="candidate" title="Upgrade Your Visibility" subtitle="Optional profile momentum without paywalling opportunity.">
      <Link href="/candidate/dashboard" className="mb-5 inline-flex items-center gap-2 text-sm font-black text-viz-700">
        <ArrowLeft className="h-4 w-4" /> Back to dashboard
      </Link>
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="rounded-[2rem] bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">VizHire Boost</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-balance text-5xl font-black leading-tight">Increase visibility when you want more momentum.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
                Your profile, applications, video intro, and sharing stay free. Boost simply helps employers discover you more often.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 text-center backdrop-blur">
              <p className="text-5xl font-black">$4.99</p>
              <p className="mt-1 text-sm font-bold text-white/68">single application boost</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["$4.99 single application", "$9.99 weekly visibility", "$12/month profile boost"].map((price) => (
              <p key={price} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white/86 backdrop-blur">{price}</p>
            ))}
          </div>
          <Link href="/candidate/dashboard" className="mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white px-5 font-black text-viz-800">
            <Sparkles className="h-4 w-4" /> Keep building my profile
          </Link>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {boostFeatures.map(([title, copy, Icon]) => (
            <article key={title as string} className="rounded-3xl border border-viz-100 bg-white p-6 shadow-soft">
              <Icon className="h-7 w-7 text-viz-600" />
              <h2 className="mt-4 text-xl font-black text-ink">{title as string}</h2>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{copy as string}</p>
            </article>
          ))}
        </section>
      </div>
    </AppShell>
  );
}
