import Link from "next/link";
import { BarChart3, BriefcaseBusiness, CheckCircle2, Eye, Sparkles, Star, UsersRound } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { pricingPlans } from "@/data/demo";

const candidateFree = [
  "Create a video-first profile",
  "Upload resume and experience",
  "Apply to jobs",
  "Share your profile",
  "Build your professional identity"
];

const boostFeatures = [
  "Featured profile placement",
  "Increased recruiter visibility",
  "Priority discovery in searches",
  "Actively exploring signal",
  "Employer profile activity insights",
  "Advanced profile analytics",
  "AI profile improvement suggestions",
  "Early access to select opportunities"
];

const futureOpportunities = [
  "Verified identity",
  "Premium talent surfacing",
  "Featured employer branding",
  "Recruiter sourcing tools",
  "Communication and trust signals"
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.14),transparent_34%),#fbfafc]">
      <header className="border-b border-viz-100 bg-white/88 px-4 py-4 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <BrandLogo />
          <div className="flex items-center gap-2">
            <Link href="/candidate-signup" className="hidden rounded-xl border border-viz-200 bg-white px-4 py-3 text-sm font-black text-viz-700 shadow-soft sm:inline-flex">
              Create profile
            </Link>
            <Link href="/employer-signup" className="rounded-xl bg-viz-700 px-4 py-3 text-sm font-black text-white shadow-glow">
              Start hiring
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">Fair monetization</p>
          <h1 className="mt-4 text-balance text-5xl font-black leading-tight text-ink sm:text-6xl">
            Free to start. Premium when you need more momentum.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            VizHire stays human-first and accessible. Candidates can build identity and apply for free. Employers pay to hire faster, reduce uncertainty, and understand people earlier.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 lg:grid-cols-[0.82fr_1.18fr]">
        <article className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Candidates</p>
              <h2 className="mt-3 text-4xl font-black">Always free to build your professional identity.</h2>
              <p className="mt-4 leading-8 text-white/74">
                Creating a VizHire profile, recording your intro, applying to roles, and sharing your profile should never feel locked behind a paywall.
              </p>
            </div>
            <div className="hidden h-14 w-14 place-items-center rounded-2xl bg-white/12 text-viz-100 sm:grid">
              <UsersRound className="h-7 w-7" />
            </div>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {candidateFree.map((feature) => (
              <p key={feature} className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white/86 backdrop-blur">
                <CheckCircle2 className="h-5 w-5 text-emerald-200" /> {feature}
              </p>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-viz-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Optional candidate premium</p>
              <h2 className="mt-3 text-4xl font-black text-ink">VizHire Boost</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Increase your visibility to employers actively searching for talent like yours. Free users still have meaningful visibility.
              </p>
            </div>
            <div className="rounded-3xl bg-viz-50 p-5 text-center">
              <p className="text-5xl font-black text-viz-700">$12</p>
              <p className="mt-1 text-sm font-bold text-slate-500">per month · cancel anytime</p>
            </div>
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {boostFeatures.map((feature) => (
              <p key={feature} className="inline-flex items-center gap-3 rounded-2xl bg-[#fbfafc] px-4 py-3 text-sm font-black text-ink">
                <Sparkles className="h-5 w-5 text-viz-600" /> {feature}
              </p>
            ))}
          </div>
          <Link href="/candidate-signup" className="mt-7 inline-flex min-h-13 w-full items-center justify-center rounded-2xl border border-viz-300 bg-white px-5 font-black text-viz-700 shadow-soft sm:w-auto">
            Create profile for free
          </Link>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Employers</p>
            <h2 className="mt-2 text-4xl font-black text-ink">Simple plans for hiring with more confidence.</h2>
          </div>
          <p className="max-w-xl text-sm font-bold leading-6 text-slate-600">
            Pay for faster review, better sourcing, and stronger hiring signal, not generic recruiting software clutter.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
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
                <Link href="/employer-signup" className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-4 font-black ${plan.popular ? "bg-viz-700 text-white shadow-glow" : "border border-viz-300 text-viz-700"}`}>{plan.cta}</Link>
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-[2rem] border border-viz-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Future-ready, not overbuilt</p>
              <h2 className="mt-3 text-3xl font-black text-ink">Premium systems can grow without making VizHire transactional.</h2>
              <p className="mt-4 leading-8 text-slate-600">
                These are optional paths for later. The MVP should stay focused on identity, trust, and better human understanding.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {futureOpportunities.map((item, index) => {
                const Icon = [Eye, Star, BriefcaseBusiness, BarChart3, Sparkles][index];
                return (
                  <p key={item} className="inline-flex items-center gap-3 rounded-2xl bg-viz-50 px-4 py-3 text-sm font-black text-viz-800">
                    <Icon className="h-5 w-5" /> {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
