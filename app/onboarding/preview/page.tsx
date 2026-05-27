import Link from "next/link";
import { ArrowLeft, CheckCircle2, Edit3, Eye, Send } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { VideoFrame } from "@/components/ui";
import { candidates } from "@/data/demo";

const candidate = candidates[0];

export default function OnboardingPreviewPage() {
  return (
    <main className="min-h-screen bg-[#fbfafc] px-4 pb-28 pt-6 lg:pb-6">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between">
          <BrandLogo />
          <Link href="/onboarding" className="inline-flex items-center gap-2 text-sm font-black text-slate-600">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </header>

        <section className="py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">Preview profile</p>
            <h1 className="mt-4 text-balance text-4xl font-black text-ink sm:text-6xl">This is what employers will see.</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">Review the professional identity employers will meet first: your intro, communication, experience, and trust signals in one polished profile.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.68fr_0.32fr]">
            <section className="space-y-6">
              <div className="glass rounded-3xl p-5 sm:p-8">
                <div className="grid items-center gap-5 sm:grid-cols-[auto_1fr]">
                  <img src={candidate.avatar} alt={candidate.name} className="vh-candidate-thumb h-24 w-24 rounded-3xl shadow-soft" />
                  <div>
                    <h2 className="text-4xl font-black text-ink">{candidate.name}</h2>
                    <p className="mt-2 text-slate-600">{candidate.desiredRole} · {candidate.location}</p>
                  </div>
                </div>
              </div>
              <VideoFrame image={candidate.video} name={candidate.name} title={candidate.title} match={candidate.match} />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-2xl font-black text-ink">Top 5 Skills</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {candidate.topSkills.map((skill) => (
                      <span key={skill} className="rounded-full bg-viz-50 px-4 py-2 text-sm font-black text-viz-700">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-2xl font-black text-ink">About</h3>
                  <p className="mt-3 leading-7 text-slate-600">{candidate.about}</p>
                </div>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-2xl font-black text-ink">Experience</h3>
                <p className="mt-2 text-sm font-bold text-slate-500">{candidate.experience}</p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {candidate.experienceTimeline.map((item) => (
                    <div key={`${item.role}-${item.company}`} className="rounded-2xl bg-white p-4 shadow-soft">
                      <p className="font-black text-ink">{item.role}</p>
                      <p className="mt-2 text-sm font-bold text-slate-500">{item.company} · {item.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <aside className="space-y-4">
              <div className="glass rounded-[2rem] p-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-viz-50 text-viz-700 shadow-soft">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-3xl font-black text-ink">Ready to publish?</h2>
                <p className="mt-3 leading-7 text-slate-600">This is your polished professional identity. If it feels like the best version of you, publish it and make it shareable.</p>
                <div className="mt-5 rounded-2xl bg-white p-4 shadow-soft">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-viz-600">Identity preview</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-700">Video intro, resume-backed experience, references, and a profile link that works beautifully anywhere.</p>
                  <p className="mt-3 text-xs font-black text-viz-700">You on Viz yet?</p>
                </div>
                <div className="mt-6 space-y-3">
                  <Link href="/onboarding/published" className="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-viz-700 to-viz-500 px-5 text-base font-black text-white shadow-glow transition hover:-translate-y-0.5">
                    <Send className="h-5 w-5" /> Publish My Profile
                  </Link>
                  <Link href="/onboarding" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-viz-300 bg-white px-4 font-black text-viz-700 shadow-soft transition hover:-translate-y-0.5 hover:border-viz-300">
                    <Edit3 className="h-4 w-4" /> Edit Profile
                  </Link>
                </div>
              </div>
              <div className="glass rounded-2xl p-6">
                <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                <p className="mt-4 font-black text-ink">Preview checklist</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>Video intro is visible</li>
                  <li>Top 5 Skills are clear</li>
                  <li>References and recommendations are ready</li>
                  <li>Profile link will work on mobile and desktop</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-viz-100 bg-white/95 p-3 shadow-glow backdrop-blur lg:hidden">
        <Link href="/onboarding" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-viz-300 bg-white px-4 font-black text-viz-700">
          <Edit3 className="h-4 w-4" /> Edit
        </Link>
        <Link href="/onboarding/published" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 font-black text-white">
          <Send className="h-4 w-4" /> Publish
        </Link>
      </div>
    </main>
  );
}
