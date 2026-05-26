import Link from "next/link";
import { ArrowLeft, BarChart3, CheckCircle2, Megaphone, Search, Sparkles, UsersRound } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { pricingPlans } from "@/data/demo";

const premiumTools = [
  ["Promoted jobs", "Give priority visibility to roles that need more qualified candidate attention.", Megaphone],
  ["Advanced sourcing", "Browse deeper talent inventory and build proactive sourcing lists.", Search],
  ["More outreach", "Reach more candidates directly while preserving a polished recruiter experience.", UsersRound],
  ["Premium analytics", "Understand role momentum, candidate engagement, and review quality.", BarChart3],
  ["AI candidate ranking", "Prioritize stronger-fit candidates once applicants and filters exist.", Sparkles]
];

export default function EmployerUpgradePage() {
  return (
    <AppShell title="Premium Recruiting Tools" subtitle="Hire faster with stronger reach, sourcing, and insight.">
      <Link href="/employer/dashboard" className="mb-5 inline-flex items-center gap-2 text-sm font-black text-viz-700">
        <ArrowLeft className="h-4 w-4" /> Back to dashboard
      </Link>
      <div className="space-y-6">
        <section className="rounded-[2rem] bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Hiring Plans</p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black leading-tight">Upgrade when you are ready to reach and review stronger talent faster.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/74">
            VizHire premium is built around recruiter momentum: promoted roles, better sourcing, more outreach, analytics, and team tools.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {premiumTools.map(([title, copy, Icon]) => (
            <article key={title as string} className="rounded-3xl border border-viz-100 bg-white p-5 shadow-soft">
              <Icon className="h-6 w-6 text-viz-600" />
              <h2 className="mt-4 text-lg font-black text-ink">{title as string}</h2>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{copy as string}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={`relative overflow-hidden rounded-3xl border bg-white p-7 shadow-soft ${plan.popular ? "border-viz-400 ring-2 ring-viz-100" : "border-viz-100"}`}>
              {plan.popular && <div className="absolute left-0 right-0 top-0 bg-gradient-to-r from-viz-700 to-viz-500 py-2 text-center text-xs font-black uppercase tracking-[0.22em] text-white">Most Popular</div>}
              <div className={plan.popular ? "pt-7" : ""}>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-viz-700">{plan.name}</p>
                <h3 className="mt-4 text-5xl font-black text-viz-700">
                  {plan.price}
                  <span className="text-base font-medium text-ink">{plan.price.startsWith("$") && plan.price !== "$0" ? "/month" : ""}</span>
                </h3>
                {"annualPrice" in plan && plan.annualPrice && <p className="mt-2 text-sm font-black text-emerald-700">{plan.annualPrice}</p>}
                <p className="mt-3 leading-7 text-slate-600">{plan.description}</p>
                <Link href="/employer/dashboard" className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-4 font-black ${plan.popular ? "bg-viz-700 text-white shadow-glow" : "border border-viz-300 text-viz-700"}`}>
                  {plan.cta}
                </Link>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm font-bold leading-6 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-viz-600" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>
    </AppShell>
  );
}
