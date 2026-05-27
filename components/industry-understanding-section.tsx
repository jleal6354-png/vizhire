"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&crop=faces&facepad=5&w=1200&q=90",
      video: "/videos/medical-doctor-girl.mov",
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
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&facepad=5&w=1200&q=90",
      video: "/videos/renewable-energy-engineer.mp4",
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
      name: "Caleb Morgan",
      title: "Account Executive",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&facepad=5&w=1200&q=90",
      video: "/videos/sales-business-response.mov",
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
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&facepad=5&w=1200&q=90",
      video: "/videos/hospitality-server-response.mov",
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
      name: "Mia Parker",
      title: "Client Success Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces&facepad=5&w=1200&q=90",
      video: "/videos/customer-service-owner-response.mov",
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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=faces&facepad=5&w=1200&q=90",
      video: "/videos/leadership-suit-response.mov",
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
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&crop=faces&facepad=5&w=1200&q=90",
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
      name: "Mia Parker",
      title: "Retail Operations Lead",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&crop=faces&facepad=5&w=1200&q=90",
      video: "/videos/retail-owner-speaking.mov",
      trust: "Reliable, composed, and clear with customers, teammates, and daily operations.",
      emphasis: "Professional frontline presence"
    }
  }
];

export function IndustryUnderstandingSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const profile = selectedIndustry.profile;
  const hasVideo = Boolean(profile.video);

  return (
    <section id="candidates" className="bg-[radial-gradient(circle_at_78%_18%,rgba(109,59,255,0.28),transparent_30%),linear-gradient(135deg,#070817,#120a34_52%,#25106f)] px-4 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-viz-100 shadow-[0_18px_54px_rgba(0,0,0,0.18)] backdrop-blur">
            <Sparkles className="h-4 w-4" /> Human-first marketplace
          </p>
          <h2 className="mt-5 text-balance text-4xl font-black leading-tight text-white sm:text-5xl">
            Communication and presence matter differently in every role.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
            Explore how VizHire helps employers understand candidates through role-specific responses, communication style, professional presence, and trust before the interview.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {industries.slice(0, 6).map((industry) => {
              const isSelected = industry.name === selectedIndustry.name;

              return (
                <button
                  key={industry.name}
                  type="button"
                  onClick={() => setSelectedIndustry(industry)}
                  className={`rounded-full px-3.5 py-2 text-xs font-black transition sm:text-sm ${
                    isSelected
                      ? "bg-white text-viz-800 shadow-[0_16px_40px_rgba(255,255,255,0.18)]"
                      : "border border-white/14 bg-white/8 text-white/84 hover:-translate-y-0.5 hover:bg-white/14"
                  }`}
                >
                  {industry.name}
                </button>
              );
            })}
            <span className="rounded-full border border-white/14 bg-white/8 px-3.5 py-2 text-xs font-black text-white/72 sm:text-sm">
              And many more
            </span>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Link
              href="/employer-signup"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 text-sm font-black text-white shadow-[0_18px_42px_rgba(82,42,232,0.24)] transition hover:-translate-y-0.5"
            >
              Browse candidates
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/candidate-signup"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-black text-white shadow-[0_18px_42px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-white/16"
            >
              Create my profile
            </Link>
          </div>
        </div>

        <div key={selectedIndustry.name} className="animate-[fadeIn_220ms_ease-out] overflow-hidden rounded-[2rem] border border-white/14 bg-white/10 p-3 shadow-[0_34px_100px_rgba(0,0,0,0.24)] backdrop-blur">
          <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_310px]">
            <div className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] bg-midnight sm:min-h-[380px] lg:h-full lg:min-h-[430px]">
              {!hasVideo && (
                <div
                  className="absolute inset-0 scale-110 bg-cover bg-center opacity-35 blur-2xl"
                  style={{ backgroundImage: `url(${profile.image})` }}
                />
              )}
              {hasVideo ? (
                <video
                  key={profile.video}
                  aria-label={`${profile.name}, ${profile.title}, VizHire role-specific response`}
                  autoPlay
                  className="vh-premium-video absolute inset-0 h-full w-full object-cover object-center"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={profile.video} />
                </video>
              ) : (
                <img
                  src={profile.image}
                  alt={`${profile.name}, ${profile.title}, VizHire role-specific response`}
                  className="absolute inset-0 h-full w-full object-contain object-center"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/4 to-black/18" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/34 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)] animate-speaking-dot" />
                Role-specific response
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-viz-200">{selectedIndustry.name}</p>
                <h3 className="mt-2 text-2xl font-black">{profile.name}</h3>
                <p className="mt-1 text-sm font-bold text-white/82">{profile.title} · {profile.emphasis}</p>
                <p className="mt-2 max-w-xl text-sm font-bold leading-6 text-white/76">{profile.trust}</p>
              </div>
            </div>

            <div className="flex h-[430px] min-h-0 flex-col justify-between rounded-[1.5rem] bg-white p-4 text-ink">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">{selectedIndustry.name}</p>
                <h3 className="mt-2 text-balance text-lg font-black leading-tight text-ink xl:text-xl">{selectedIndustry.headline}</h3>
                <p className="mt-2 line-clamp-4 text-sm leading-6 text-slate-600">{selectedIndustry.copy}</p>

                <div className="mt-4 space-y-2">
                  <p className="text-sm font-black text-ink">Employer insight</p>
                  {selectedIndustry.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 rounded-xl border border-viz-100 bg-white px-3 py-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-viz-700" />
                      <span className="text-xs font-black leading-5 text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 border-t border-viz-100 pt-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Example roles</p>
                <p className="mt-2 line-clamp-2 text-sm font-bold leading-6 text-ink">{selectedIndustry.roles}</p>
                <Link
                  href="/employer-signup"
                  className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 text-center text-xs font-black leading-5 text-white shadow-[0_18px_42px_rgba(82,42,232,0.24)] transition hover:-translate-y-0.5 xl:text-sm"
                >
                  {selectedIndustry.cta}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
