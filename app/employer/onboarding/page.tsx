import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, FileUp, Play, Search, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ComingSoonButton } from "@/components/coming-soon";
import { candidates } from "@/data/demo";

export default function EmployerOnboardingPage() {
  const featured = candidates[0];
  const options = [
    {
      title: "Post your first job",
      text: "Start with a role and let VizHire surface better-fit candidates.",
      href: "/employer/post-job",
      icon: BriefcaseBusiness,
      cta: "Post a job"
    },
    {
      title: "Browse candidates",
      text: "Explore available professionals and start building your sourcing list.",
      href: "/employer/candidates",
      icon: Search,
      cta: "Browse candidates"
    },
    {
      title: "Import an existing job",
      text: "Bring over a current role and turn it into a VizHire review room.",
      href: "/employer/post-job?mode=import",
      icon: FileUp,
      cta: "Import job"
    }
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.16),transparent_34%),linear-gradient(180deg,#ffffff,#fbfaff)] px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center">
          <BrandLogo />
        </header>

        <section className="grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 lg:grid-cols-[1fr_0.88fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-viz-700 shadow-soft">
              <Sparkles className="h-4 w-4" /> Hiring momentum
            </p>
            <h1 className="mt-6 text-balance text-5xl font-black leading-tight text-ink sm:text-6xl">Welcome to VizHire.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Let&apos;s help you discover better-fit candidates faster.</p>
            <div className="mt-8 rounded-3xl bg-midnight p-5 text-white shadow-glow">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">What would you like to do first?</p>
              <div className="mt-5 grid gap-3">
                {options.map((option) => {
                  const Icon = option.icon;
                  return (
                    <Link key={option.title} href={option.href} className="group rounded-2xl border border-white/10 bg-white/8 p-4 transition hover:-translate-y-0.5 hover:bg-white/14">
                      <div className="flex items-start gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-viz-700">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h2 className="text-xl font-black">{option.title}</h2>
                          <p className="mt-1 text-sm leading-6 text-white/70">{option.text}</p>
                          <p className="mt-3 inline-flex items-center gap-2 text-sm font-black text-viz-100">
                            {option.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="glass w-full max-w-xl justify-self-center overflow-hidden rounded-[2rem] p-3 lg:justify-self-end">
            <div className="vh-candidate-media vh-candidate-media-balanced h-[260px] rounded-3xl sm:h-[300px] lg:h-[340px] xl:h-[360px]" style={{ "--candidate-image": `url(${featured.video})` } as React.CSSProperties}>
              <img src={featured.video} alt={`${featured.name} video introduction`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/22 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700">Recently active</span>
              <ComingSoonButton className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-white text-viz-700 shadow-soft" ariaLabel={`Play ${featured.name} intro`} title="Candidate intro" message="Full video playback is coming soon. This preview shows the candidate discovery experience.">
                <Play className="ml-1 h-6 w-6 fill-current" />
              </ComingSoonButton>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-viz-200">Your first wow moment</p>
                <h2 className="mt-1 text-2xl font-black sm:text-3xl">{featured.name}</h2>
                <p className="mt-1 text-sm font-bold text-white/82">{featured.title} · {featured.location}</p>
                <p className="mt-2 line-clamp-2 max-w-xl text-xs leading-5 text-white/76 sm:text-sm">{featured.summary}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
