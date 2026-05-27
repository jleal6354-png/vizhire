import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, UserRound } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

export default function LoginRolePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.16),transparent_34%),#fbfafc] px-4 py-6">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between">
          <BrandLogo />
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-black text-slate-600">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </header>
        <section className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">Log in</p>
            <h1 className="mt-4 text-balance text-4xl font-black text-ink sm:text-6xl">Welcome back. Choose your login.</h1>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link href="/candidate-login" className="glass group rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-glow">
              <UserRound className="h-10 w-10 text-viz-600" />
              <h2 className="mt-6 text-3xl font-black text-ink">Candidate Login</h2>
              <p className="mt-3 leading-7 text-slate-600">Manage your profile, update your story, and apply with one click.</p>
            </Link>
            <Link href="/employer-login" className="rounded-3xl bg-gradient-to-br from-midnight to-viz-900 p-7 text-white shadow-glow transition hover:-translate-y-1">
              <BriefcaseBusiness className="h-10 w-10 text-viz-200" />
              <h2 className="mt-6 text-3xl font-black">Employer Login</h2>
              <p className="mt-3 leading-7 text-white/72">Browse candidates, post jobs, and manage applicants.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
