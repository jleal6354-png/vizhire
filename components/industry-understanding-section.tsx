"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, ShieldCheck, Sparkles } from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    headline: "Hire for trust, communication, and patient-facing professionalism.",
    copy:
      "In healthcare, technical ability matters, but so does empathy, clarity, presence, and trust. VizHire helps teams understand how candidates communicate before they ever step into the role.",
    points: ["Patient-facing communication", "Professional presence", "Confidence under pressure"],
    roles: "Nurses, medical assistants, front desk staff, clinic managers",
    cta: "See healthcare candidates differently",
    profile: {
      name: "Elena Ramirez",
      title: "Nurse Manager",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&crop=faces&w=1000&q=88",
      trust: "Calm patient communication, steady presence, and clear clinical judgment.",
      emphasis: "Empathy under pressure"
    }
  },
  {
    name: "Engineering & Technical",
    headline: "See how experts explain complex ideas.",
    copy:
      "Technical resumes can show tools and experience, but VizHire helps employers understand how candidates think, explain tradeoffs, communicate complexity, and collaborate.",
    points: ["Explanation ability", "Clarity of thought", "Collaboration style"],
    roles: "Software engineers, analysts, IT specialists, technical leads",
    cta: "Review technical talent with more context",
    profile: {
      name: "Marcus Lee",
      title: "Technical Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=1000&q=88",
      trust: "Explains tradeoffs clearly and makes complex technical decisions easy to understand.",
      emphasis: "Clarity of thought"
    }
  },
  {
    name: "Sales",
    headline: "Understand presence before the first pitch.",
    copy:
      "Sales success depends on confidence, communication, listening, and trust. VizHire helps employers see how candidates present themselves before the interview.",
    points: ["Communication confidence", "Customer presence", "Persuasive clarity"],
    roles: "Account executives, SDRs, sales managers, account managers",
    cta: "Discover sales talent faster",
    profile: {
      name: "Sofia Grant",
      title: "Account Executive",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=1000&q=88",
      trust: "Confident presence, clear story, and the ability to build trust quickly.",
      emphasis: "Presence before the pitch"
    }
  },
  {
    name: "Hospitality",
    headline: "Hire for warmth, energy, and guest experience.",
    copy:
      "In hospitality, personality and professionalism matter immediately. VizHire helps employers see communication, presence, and service mindset before scheduling interviews.",
    points: ["Guest-facing energy", "Professional warmth", "Service mindset"],
    roles: "Servers, bartenders, hosts, hotel staff, restaurant managers",
    cta: "Find hospitality talent with confidence",
    profile: {
      name: "Andre Collins",
      title: "Guest Experience Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=1000&q=88",
      trust: "Warm, polished guest communication with natural service energy.",
      emphasis: "Guest-facing warmth"
    }
  },
  {
    name: "Customer Service",
    headline: "See how candidates communicate with people.",
    copy:
      "Customer-facing roles require patience, clarity, empathy, and professionalism. VizHire helps employers understand these qualities earlier.",
    points: ["Empathy and tone", "Communication clarity", "Problem-solving presence"],
    roles: "Customer support reps, front desk teams, call center staff, client success",
    cta: "Evaluate customer-facing talent faster",
    profile: {
      name: "Priya Shah",
      title: "Client Success Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces&w=1000&q=88",
      trust: "Patient tone, thoughtful problem solving, and clear customer communication.",
      emphasis: "Empathy and clarity"
    }
  },
  {
    name: "Leadership",
    headline: "Understand leadership presence before the interview.",
    copy:
      "Leadership is more than a title. VizHire helps employers see communication style, confidence, judgment, and how candidates present ideas.",
    points: ["Leadership communication", "Decision-making presence", "Professional confidence"],
    roles: "Managers, directors, executives, team leads",
    cta: "Review leaders with more confidence",
    profile: {
      name: "Daniel Brooks",
      title: "Operations Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=faces&w=1000&q=88",
      trust: "Composed leadership presence with direct, thoughtful decision framing.",
      emphasis: "Executive communication"
    }
  },
  {
    name: "Education",
    headline: "See how educators explain, connect, and communicate.",
    copy:
      "Education depends on clarity, patience, trust, and the ability to connect. VizHire helps schools and organizations understand how candidates present themselves.",
    points: ["Explanation ability", "Trust and presence", "Communication style"],
    roles: "Teachers, tutors, administrators, program coordinators",
    cta: "Discover education talent differently",
    profile: {
      name: "Avery Chen",
      title: "Program Coordinator",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&crop=faces&w=1000&q=88",
      trust: "Explains ideas with patience, structure, and a calm learner-centered presence.",
      emphasis: "Connection and explanation"
    }
  },
  {
    name: "Retail & Operations",
    headline: "Hire people who represent your business well.",
    copy:
      "Retail and operations teams rely on communication, reliability, professionalism, and customer presence. VizHire helps employers understand those qualities earlier.",
    points: ["Customer presence", "Reliability signals", "Professional communication"],
    roles: "Store managers, sales associates, operations leads, shift supervisors",
    cta: "Find stronger frontline talent",
    profile: {
      name: "Jordan Ellis",
      title: "Store Operations Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=1000&q=88",
      trust: "Reliable, composed, and clear with customers, teammates, and daily operations.",
      emphasis: "Professional frontline presence"
    }
  }
];

export function IndustryUnderstandingSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const profile = selectedIndustry.profile;

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-viz-100 bg-[radial-gradient(circle_at_18%_18%,rgba(109,59,255,0.14),transparent_30%),linear-gradient(135deg,#ffffff,#fbfaff_48%,#f5f1ff)] p-5 shadow-soft sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-viz-700 shadow-soft">
              <Sparkles className="h-4 w-4" /> Human-first fit
            </p>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-black leading-tight text-ink sm:text-6xl">
              Human understanding matters in every role.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you&apos;re hiring leaders, sales teams, healthcare staff, engineers, hospitality talent, or customer-facing professionals, VizHire helps you see how people communicate, explain, present themselves, and build trust before the interview.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {industries.map((industry) => {
                const isSelected = industry.name === selectedIndustry.name;

                return (
                  <button
                    key={industry.name}
                    type="button"
                    onClick={() => setSelectedIndustry(industry)}
                    className={`rounded-full px-4 py-2.5 text-sm font-black transition ${
                      isSelected
                        ? "bg-viz-700 text-white shadow-glow"
                        : "border border-viz-100 bg-white/86 text-viz-700 shadow-soft hover:-translate-y-0.5 hover:border-viz-300"
                    }`}
                  >
                    {industry.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-viz-500/10 blur-2xl" />
            <div className="grid gap-4 rounded-[2rem] border border-white/80 bg-white/82 p-4 shadow-[0_30px_90px_rgba(34,21,84,0.13)] backdrop-blur xl:grid-cols-[0.78fr_1fr]">
              <div key={`${selectedIndustry.name}-visual`} className="relative min-h-[340px] overflow-hidden rounded-3xl bg-midnight animate-[fadeIn_240ms_ease-out]">
                <img
                  src={profile.image}
                  alt={`${profile.name}, ${profile.title}, VizHire preview`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/86 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/24 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/94 px-3 py-1 text-[11px] font-black text-viz-700 shadow-soft backdrop-blur">
                  {selectedIndustry.name}
                </span>
                <button
                  type="button"
                  className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-white text-viz-700 shadow-soft transition hover:scale-105"
                  aria-label={`Play ${profile.name} intro`}
                >
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-2xl font-black">{profile.name}</p>
                  <p className="mt-1 text-sm font-bold text-white/76">{profile.title}</p>
                  <div className="mt-4 rounded-2xl border border-white/12 bg-white/12 p-3 backdrop-blur">
                    <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-viz-100">
                      <ShieldCheck className="h-4 w-4" />
                      {profile.emphasis}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-white/82">{profile.trust}</p>
                  </div>
                </div>
              </div>

              <div key={selectedIndustry.name} className="flex animate-[fadeIn_220ms_ease-out] flex-col p-2 sm:p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">{selectedIndustry.name}</p>
                <h3 className="mt-3 text-3xl font-black leading-tight text-ink">{selectedIndustry.headline}</h3>
                <p className="mt-4 leading-7 text-slate-600">{selectedIndustry.copy}</p>

                <div className="mt-6 space-y-3">
                  <p className="text-sm font-black text-ink">What employers understand earlier</p>
                  <div className="grid gap-2">
                    {selectedIndustry.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 rounded-2xl bg-viz-50/80 px-4 py-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-viz-700" />
                        <span className="text-sm font-black text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-viz-100 bg-white p-4 shadow-soft">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Example roles</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-ink">{selectedIndustry.roles}</p>
                </div>

                <div className="mt-3 rounded-2xl bg-gradient-to-r from-viz-50 to-white p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-viz-600">Candidate preview</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                    {profile.title} · {profile.emphasis}
                  </p>
                </div>

                <Link
                  href="/employer-signup"
                  className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5"
                >
                  {selectedIndustry.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
