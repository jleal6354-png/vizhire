import Link from "next/link";
import { BriefcaseBusiness, Lock, MapPin, ShieldCheck, Star, Video } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { candidates } from "@/data/demo";
import { VideoFrame } from "@/components/ui";

const candidate = candidates[0];

export default function SampleProfilePage() {
  return (
    <main className="min-h-screen bg-[#fbfafc]">
      <header className="border-b border-viz-100 bg-white/88 px-4 py-4 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <BrandLogo />
          <Link href="/candidate-signup" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-viz-700 px-4 text-sm font-black text-white shadow-glow">
            Create My Free Profile
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 rounded-3xl border border-viz-100 bg-gradient-to-r from-viz-50 via-white to-viz-50 p-5 shadow-soft">
          <div className="max-w-3xl">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-viz-700 shadow-soft">
                <Lock className="h-3.5 w-3.5" /> Sample Profile
              </p>
              <h1 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Preview how VizHire presents candidates.</h1>
              <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                This is a locked preview experience. Create your free profile to publish your own video-first professional story.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <div className="space-y-6">
            <div className="glass rounded-3xl p-5 sm:p-8">
              <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
                <img src={candidate.avatar} alt={candidate.name} className="vh-candidate-thumb h-32 w-32 rounded-3xl shadow-soft" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Preview Experience</p>
                  <h2 className="mt-2 text-4xl font-black text-ink sm:text-6xl">{candidate.name}</h2>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold text-slate-600">
                    <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-viz-600" /> {candidate.desiredRole}</span>
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-viz-600" /> {candidate.location}</span>
                    <span className="inline-flex items-center gap-2"><Video className="h-4 w-4 text-viz-600" /> 30-sec intro</span>
                  </div>
                </div>
              </div>
            </div>

            <VideoFrame image={candidate.video} name={candidate.name} title={candidate.title} match={candidate.match} />

            <div className="grid gap-6 lg:grid-cols-2">
              <section className="glass rounded-2xl p-6">
                <h2 className="text-2xl font-black text-ink">About</h2>
                <p className="mt-4 leading-8 text-slate-600">{candidate.about}</p>
              </section>
              <section className="glass rounded-2xl p-6">
                <h2 className="text-2xl font-black text-ink">Top 5 Skills</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {candidate.topSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-viz-50 px-4 py-2 text-sm font-black text-viz-700">{skill}</span>
                  ))}
                </div>
              </section>
            </div>

            <section className="glass rounded-2xl p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-black text-ink">Experience</h2>
                  <p className="mt-2 text-sm font-bold text-slate-500">{candidate.experience}</p>
                </div>
                <span className="text-sm font-black text-viz-700">Resume-backed work history</span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {candidate.experienceTimeline.map((item) => (
                  <div key={`${item.role}-${item.company}`} className="rounded-2xl border border-viz-100 bg-white p-5 shadow-soft">
                    <p className="font-black text-ink">{item.role}</p>
                    <p className="mt-2 text-sm font-bold text-slate-500">{item.company} · {item.duration}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <Lock className="h-8 w-8 text-viz-600" />
              <h2 className="mt-4 text-xl font-black text-ink">Locked preview</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Editing, applying, sharing, and recruiter actions are disabled in this sample.
              </p>
              <p className="mt-5 rounded-2xl bg-viz-50 px-4 py-3 text-sm font-black text-viz-700">
                Preview mode only
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h2 className="text-xl font-black text-ink">Trust signals</h2>
              <div className="mt-4 space-y-3">
                <p className="inline-flex w-full items-center gap-3 rounded-2xl bg-white p-4 text-sm font-black text-slate-700 shadow-soft">
                  <ShieldCheck className="h-5 w-5 text-viz-600" /> {candidate.references} references available
                </p>
                <p className="inline-flex w-full items-center gap-3 rounded-2xl bg-white p-4 text-sm font-black text-slate-700 shadow-soft">
                  <Star className="h-5 w-5 fill-viz-600 text-viz-600" /> Recommendations included
                </p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h2 className="text-xl font-black text-ink">Recommendations</h2>
              <div className="mt-4 space-y-4">
                {candidate.recommendations.map((text) => (
                  <blockquote key={text} className="rounded-2xl bg-white p-4 text-sm leading-6 text-slate-600 shadow-soft">
                    {text}
                  </blockquote>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
