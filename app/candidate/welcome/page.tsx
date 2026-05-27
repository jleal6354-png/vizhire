import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, FileUp, Play, ShieldCheck, Sparkles, Video } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ComingSoonButton } from "@/components/coming-soon";
import { candidates } from "@/data/demo";

const candidate = candidates[0];

export default function CandidateWelcomePage() {
  const flow = [
    ["Upload resume", "We extract your experience so you do not rebuild your history from scratch.", FileUp],
    ["Review experience", "Confirm roles, companies, education, and credibility before publishing.", CheckCircle2],
    ["Record intro", "Help employers understand how you communicate, think, and show up.", Video],
    ["Publish profile", "Preview what employers see, then share your VizHire profile anywhere.", ShieldCheck]
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.16),transparent_34%),linear-gradient(180deg,#ffffff,#fbfaff)] px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between">
          <BrandLogo />
          <Link href="/sample-profile" className="rounded-xl border border-viz-200 bg-white px-4 py-3 text-sm font-black text-viz-700 shadow-soft">
            See example
          </Link>
        </header>

        <section className="grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-viz-700 shadow-soft">
              <Sparkles className="h-4 w-4" /> Your professional identity
            </p>
            <h1 className="mt-6 text-balance text-5xl font-black leading-tight text-ink sm:text-6xl">Welcome to VizHire.</h1>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-slate-600">
              Let&apos;s help employers understand the best version of you.
            </p>
            <div className="mt-8 rounded-3xl bg-midnight p-6 text-white shadow-glow">
              <h2 className="text-3xl font-black">Your resume shows experience. VizHire helps employers understand who you are.</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Communication matters.", "Confidence matters.", "Professionalism matters.", "How you show up matters."].map((item) => (
                  <p key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white/86">{item}</p>
                ))}
              </div>
            </div>
            <div className="mt-8 rounded-[2rem] border border-viz-100 bg-white/82 p-4 shadow-soft backdrop-blur sm:p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Start building</p>
              <h2 className="mt-2 text-2xl font-black text-ink">Create a VizHire profile that shows more than your resume.</h2>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-600">
                Upload your resume, shape your experience, record your intro, then preview before anything goes live.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <Link href="/onboarding" className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-viz-700 to-viz-500 px-6 text-base font-black text-white shadow-glow transition hover:-translate-y-0.5">
                  Start Building My Profile <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/sample-profile" className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl border border-viz-200 bg-white px-6 text-base font-black text-viz-700 shadow-soft transition hover:-translate-y-0.5 hover:border-viz-300">
                  <Eye className="h-5 w-5" /> Preview Example Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass overflow-hidden rounded-[2rem] p-4">
              <div className="vh-candidate-media vh-candidate-media-balanced h-[300px] rounded-3xl sm:h-[360px] lg:h-[400px]" style={{ "--candidate-image": `url(${candidate.video})` } as React.CSSProperties}>
                <img src={candidate.video} alt={`${candidate.name} video introduction`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/22 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700">Example profile</span>
                <ComingSoonButton className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-white text-viz-700 shadow-soft" ariaLabel={`Play ${candidate.name} intro`} title="Example video" message="Full video playback is coming soon. This preview shows the kind of professional intro candidates can create.">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </ComingSoonButton>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">This is what employers can feel</p>
                  <h2 className="mt-2 text-3xl font-black">{candidate.name}</h2>
                  <p className="mt-2 font-bold text-white/82">{candidate.title} · {candidate.location}</p>
                  <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-white/76">{candidate.summary}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {flow.map(([title, text, Icon]) => (
                <div key={title as string} className="glass rounded-2xl p-5">
                  <Icon className="h-6 w-6 text-viz-600" />
                  <h3 className="mt-4 font-black text-ink">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
