import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, UserRound } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

export default function SignupRolePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.12),transparent_34%),linear-gradient(180deg,#fff,#fbfaff)] px-4 py-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-4xl flex-col">
        <header className="flex items-center justify-between">
          <BrandLogo />
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-viz-100 bg-white/80 px-4 py-2 text-sm font-black text-slate-600 shadow-soft">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </header>
        <section className="flex flex-1 items-center justify-center py-14">
          <div className="w-full">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">Sign up free</p>
              <h1 className="mt-4 text-balance text-4xl font-black text-ink sm:text-6xl">How are you joining VizHire?</h1>
            </div>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
              <Link href="/candidate-signup" className="group rounded-[2rem] border border-viz-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-viz-300 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-viz-50 text-viz-700">
                  <UserRound className="h-6 w-6" />
                </span>
                <h2 className="mt-8 text-3xl font-black text-ink">Candidate</h2>
                <p className="mt-3 leading-7 text-slate-600">Create your professional profile.</p>
              </Link>
              <Link href="/employer-signup" className="group rounded-[2rem] border border-viz-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-viz-300 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-viz-50 text-viz-700">
                  <BriefcaseBusiness className="h-6 w-6" />
                </span>
                <h2 className="mt-8 text-3xl font-black text-ink">Employer</h2>
                <p className="mt-3 leading-7 text-slate-600">Start hiring beyond the resume.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
