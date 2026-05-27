import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Eye, Send, Share2, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ComingSoonButton } from "@/components/coming-soon";
import { candidates } from "@/data/demo";

const candidate = candidates[0];

export default function PublishedProfilePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.16),transparent_34%),#fbfafc] px-4 py-6">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between">
          <BrandLogo />
          <Link href="/candidate/dashboard" className="rounded-xl border border-viz-200 bg-white px-4 py-3 text-sm font-black text-viz-700 shadow-soft">
            Go to dashboard
          </Link>
        </header>

        <section className="py-14">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-emerald-50 text-emerald-700 shadow-soft">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">Profile published</p>
            <h1 className="mt-4 text-balance text-4xl font-black text-ink sm:text-6xl">Your VizHire profile is live.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">Now let’s help employers discover you and find roles that fit.</p>
          </div>

          <div className="mx-auto mt-10 grid gap-5 lg:grid-cols-[0.58fr_0.42fr]">
            <article className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Recommended jobs are ready</p>
                  <h2 className="mt-3 text-3xl font-black">3 roles match your profile</h2>
                  <p className="mt-3 leading-7 text-white/74">Apply with your VizHire profile so employers can see your intro video, experience, skills, and references in one polished application.</p>
                </div>
                <div className="hidden h-14 w-14 place-items-center rounded-2xl bg-white/12 text-viz-100 sm:grid">
                  <BriefcaseBusiness className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Growth Marketing Manager", "Revenue Operations Analyst", "Senior UX Researcher"].map((role) => (
                  <div key={role} className="rounded-2xl bg-white/10 p-4 text-left backdrop-blur">
                    <p className="text-sm font-black leading-5">{role}</p>
                    <p className="mt-2 text-xs font-bold text-emerald-200">Suggested match</p>
                  </div>
                ))}
              </div>
              <Link href="/candidate/jobs" className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 font-black text-viz-800 shadow-soft transition hover:-translate-y-0.5 sm:w-auto">
                See matching jobs <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <aside className="rounded-[2rem] border border-viz-100 bg-white p-6 text-left shadow-soft sm:p-8">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-viz-50 text-viz-700">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-ink">Your profile is ready to work for you.</h2>
              <p className="mt-3 leading-7 text-slate-600">Employers can now understand your communication, experience, and professional story before the first interview.</p>
              <div className="mt-6 space-y-3">
                <Link href="/candidate/jobs" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-viz-700 px-5 font-black text-white shadow-glow">
                  <BriefcaseBusiness className="h-5 w-5" /> Browse Jobs
                </Link>
                <Link href="/profile/maya-johnson" className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl border border-viz-300 bg-white px-5 font-black text-viz-700 shadow-soft">
                  <Eye className="h-5 w-5" /> View My Profile
                </Link>
                <ComingSoonButton className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-black text-slate-500 transition hover:bg-viz-50 hover:text-viz-700" title="Share profile" message="Profile sharing tools are available in the profile share panel. This shortcut will open that flow soon.">
                  <Share2 className="h-4 w-4" /> Share Profile
                </ComingSoonButton>
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-6 grid max-w-4xl gap-3 rounded-3xl bg-white/78 p-4 text-sm font-bold text-slate-600 shadow-soft backdrop-blur sm:grid-cols-3">
            <span className="inline-flex items-center justify-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Profile live</span>
            <span className="inline-flex items-center justify-center gap-2"><Send className="h-4 w-4 text-viz-600" /> One-click applications</span>
            <span className="inline-flex items-center justify-center gap-2"><Eye className="h-4 w-4 text-viz-600" /> Employers can discover you</span>
          </div>
        </section>
      </div>
    </main>
  );
}
