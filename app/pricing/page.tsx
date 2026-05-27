import Link from "next/link";
import { BriefcaseBusiness, Sparkles, UsersRound } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.14),transparent_34%),#fbfafc]">
      <header className="border-b border-viz-100 bg-white/88 px-4 py-4 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <BrandLogo />
          <Link href="/" className="rounded-xl border border-viz-200 bg-white px-4 py-3 text-sm font-black text-viz-700 shadow-soft">
            Back home
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">Plans & Visibility</p>
          <h1 className="mt-4 text-balance text-5xl font-black leading-tight text-ink sm:text-6xl">
            Choose the upgrade path that matches how you use VizHire.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Candidates can increase profile visibility. Employers can unlock premium recruiting tools. The experiences stay separate, focused, and fair.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Link href="/candidate/upgrade" className="group rounded-[2rem] border border-viz-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-glow sm:p-8">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-viz-50 text-viz-700">
              <UsersRound className="h-7 w-7" />
            </div>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-viz-600">For candidates</p>
            <h2 className="mt-3 text-3xl font-black text-ink">Upgrade Your Visibility</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Optional profile boosts, recruiter discovery, featured placement, and profile insights without limiting free applications.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-black text-viz-700">
              View candidate boost <Sparkles className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link href="/employer/upgrade" className="group rounded-[2rem] border border-viz-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-glow sm:p-8">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-viz-50 text-viz-700">
              <BriefcaseBusiness className="h-7 w-7" />
            </div>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-viz-600">For employers</p>
            <h2 className="mt-3 text-3xl font-black text-ink">Premium Recruiting Tools</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Promoted jobs, advanced sourcing, more outreach, analytics, team tools, and priority candidate visibility.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-black text-viz-700">
              View employer plans <Sparkles className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
