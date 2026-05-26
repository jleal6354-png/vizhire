import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, Star } from "lucide-react";
import { candidates } from "@/data/demo";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const variants = {
    primary: "bg-gradient-to-r from-viz-700 to-viz-500 text-white shadow-glow hover:-translate-y-0.5",
    secondary:
      "border border-viz-200 bg-white text-ink shadow-soft hover:border-viz-400 hover:-translate-y-0.5",
    ghost: "text-ink hover:bg-viz-50"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-viz-600">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-black tracking-normal text-ink sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{text}</p>}
    </div>
  );
}

export function VideoFrame({
  image,
  name,
  title,
  match
}: {
  image: string;
  name: string;
  title: string;
  match?: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-midnight shadow-glow">
      <img src={image} alt={`${name} video introduction`} className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />
      {match && (
        <div className="absolute left-5 top-5 rounded-full bg-black/80 px-4 py-2 text-sm font-black text-emerald-300">
          {match}% Match
        </div>
      )}
      <div className="absolute right-5 top-5 rounded-full bg-white/12 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white/82 backdrop-blur">
        Professional intro
      </div>
      <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-viz-700 shadow-soft transition group-hover:scale-110" aria-label={`Play ${name} intro video`}>
        <Play className="ml-1 h-7 w-7 fill-current" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <p className="text-2xl font-black">{name}</p>
        <p className="text-sm text-white/80">{title}</p>
        <p className="mt-2 max-w-xl text-sm font-bold text-white/72">A short first impression built for communication, confidence, and trust.</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-viz-500 to-white" />
        </div>
      </div>
    </div>
  );
}

export function CandidateCard({ candidate = candidates[0], compact = false }: { candidate?: (typeof candidates)[number]; compact?: boolean }) {
  return (
    <article className="glass group overflow-hidden rounded-3xl p-3 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative overflow-hidden rounded-xl">
        <img src={candidate.avatar} alt={candidate.name} className={`w-full object-cover transition duration-500 group-hover:scale-105 ${compact ? "h-32" : "h-56"}`} />
        <button className="absolute inset-0 m-auto grid h-12 w-12 place-items-center rounded-full bg-white/92 text-viz-700 shadow-soft" aria-label={`Play ${candidate.name} video`}>
          <Play className="ml-1 h-5 w-5 fill-current" />
        </button>
        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black text-signal">{candidate.match}%</span>
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-ink">{candidate.name}</h3>
            <p className="text-sm text-slate-600">{candidate.title}</p>
          </div>
          <button className="rounded-full bg-viz-50 p-2 text-viz-700" aria-label={`Save ${candidate.name}`}>
            <Star className="h-4 w-4" />
          </button>
        </div>
        {!compact && <p className="mt-3 text-sm leading-6 text-slate-600">{candidate.summary}</p>}
        {!compact && (
          <div className="mt-4 rounded-2xl bg-white px-4 py-3 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-viz-600">Experience signal</p>
            <p className="mt-2 text-sm font-black text-ink">{candidate.experienceTimeline[0].role}</p>
            <p className="mt-1 text-xs font-bold text-slate-500">{candidate.experienceTimeline[0].company} · {candidate.experienceTimeline[0].duration}</p>
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {candidate.topSkills.slice(0, compact ? 2 : 3).map((skill) => (
            <span key={skill} className="rounded-full bg-viz-50 px-3 py-1 text-xs font-bold text-viz-700">
              {skill}
            </span>
          ))}
        </div>
        {!compact && (
          <Link href={`/employer/candidates/${candidate.id}`} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-viz-300 bg-white px-4 py-3 text-sm font-black text-viz-700 transition hover:bg-viz-50">
            Understand candidate <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </article>
  );
}

export function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-viz-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-soft">
      <CheckCircle2 className="h-4 w-4 text-viz-600" />
      {children}
    </span>
  );
}
