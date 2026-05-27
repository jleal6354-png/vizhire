import Link from "next/link";
import { CheckCircle2, Link2, ShieldCheck, Star, Video } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { IndustryUnderstandingSection } from "@/components/industry-understanding-section";
import { ButtonLink, CandidateCard, TrustPill } from "@/components/ui";
import { candidates } from "@/data/demo";

export default function LandingPage() {
  const comparisonCandidate = {
    name: "Emily Carter",
    title: "Customer Experience Manager",
    location: "Nashville, TN",
    video: "/images/interview-intro-emily.png"
  };

  return (
    <main className="overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-viz-100/70 bg-white/86 backdrop-blur-xl">
        <div className="border-b border-viz-100/70 bg-gradient-to-r from-white via-viz-50/80 to-white px-4 py-2.5 text-center text-[10px] font-black uppercase leading-4 tracking-[0.12em] text-viz-700 sm:text-xs sm:tracking-[0.16em]">
          Understand candidates before the first interview.
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:py-4">
          <div className="shrink-0">
            <BrandLogo />
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <ButtonLink href="/login" variant="secondary" className="min-h-11 min-w-[76px] whitespace-nowrap rounded-lg px-3 text-[13px] sm:min-h-12 sm:min-w-0 sm:rounded-xl sm:px-5 sm:text-sm">
              Log In
            </ButtonLink>
            <ButtonLink href="/signup" className="min-h-11 min-w-[112px] whitespace-nowrap rounded-lg px-3 text-[13px] sm:min-h-12 sm:min-w-0 sm:rounded-xl sm:px-5 sm:text-sm">
              Sign Up Free
            </ButtonLink>
          </div>
        </nav>
      </header>

      <section className="relative px-4 pb-20 pt-40 sm:pt-48">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_28%_20%,rgba(109,59,255,0.16),transparent_32%),linear-gradient(180deg,#ffffff,#fbfaff)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <TrustPill>Human-first hiring for modern teams</TrustPill>
            <h1 className="mt-7 text-balance text-5xl font-black leading-[1.02] tracking-normal text-ink sm:text-7xl">
              Hiring should feel <span className="text-viz-600">human</span> again.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              VizHire helps employers understand confidence, communication, professionalism, and fit before the first interview while giving candidates a better way to be seen beyond keywords and resumes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/signup">Get started free</ButtonLink>
              <ButtonLink href="#platform" variant="secondary">See how VizHire works</ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="grid items-stretch gap-4 sm:grid-cols-[0.68fr_1.32fr]">
              <div className="flex min-h-[310px] flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] grayscale">
                <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Resume.pdf</span>
                  <span className="h-2 w-10 rounded-full bg-slate-200" />
                </div>
                <div className="border-b border-slate-200 pb-3">
                  <div>
                    <h2 className="text-xl font-black leading-none text-slate-800">Emily Carter</h2>
                    <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Customer Experience Manager</p>
                  </div>
                </div>

                <div className="mt-3 flex-1 space-y-3 text-slate-600">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Summary</p>
                    <p className="mt-2 text-[11px] leading-5 text-slate-500">Customer experience leader focused on service training, communication, and retention.</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Experience</p>
                    <div className="mt-2 space-y-2.5">
                      {[
                        ["Customer Experience Manager", "Brightway Home · 2021-Present"],
                        ["Client Success Lead", "Harbor Services · 2019-2021"]
                      ].map(([role, meta]) => (
                        <div key={role}>
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-black text-slate-700">{role}</p>
                            <p className="shrink-0 text-[10px] font-bold text-slate-400">{meta.split(" · ")[1]}</p>
                          </div>
                          <p className="mt-0.5 text-[11px] font-bold text-slate-400">{meta.split(" · ")[0]}</p>
                          <p className="mt-1.5 text-[11px] leading-4 text-slate-500">Led coaching, retention reviews, and customer communication improvements.</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Skills</p>
                      <p className="mt-2 text-[11px] leading-5 text-slate-500">Communication, Coaching, Retention, Training</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 border-t border-slate-100 pt-3">
                  <p className="text-sm font-black leading-5 text-slate-700">Information without human understanding.</p>
                </div>
              </div>

              <div className="glass min-h-[310px] rounded-3xl p-3 ring-1 ring-viz-200">
                <div className="relative h-full min-h-[286px] overflow-hidden rounded-[1.55rem] bg-midnight">
                  <img src={comparisonCandidate.video} alt={`${comparisonCandidate.name} VizHire video preview`} className="animate-viz-human h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/28 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)] animate-speaking-dot" />
                    Intro in progress
                  </div>
                  <div className="absolute bottom-20 left-4 right-4">
                    <p className="talking-caption max-w-md rounded-2xl bg-black/24 px-4 py-3 text-sm font-bold leading-6 text-white/86 backdrop-blur">
                      “I help customers feel heard, supported, and confident in the next step.”
                    </p>
                  </div>
                  <div className="absolute left-4 right-4 top-16 h-1 overflow-hidden rounded-full bg-white/16">
                    <span className="cinematic-progress block h-full rounded-full bg-white/70" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h2 className="mt-1 text-2xl font-black sm:text-3xl">{comparisonCandidate.name}</h2>
                    <p className="mt-1 text-sm font-bold text-white/82">{comparisonCandidate.title} · {comparisonCandidate.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="px-4 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-viz-100 bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.13),transparent_34%),linear-gradient(180deg,#ffffff,#fbfaff)] px-5 py-12 shadow-soft sm:px-10 sm:py-16 lg:px-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">Trust before the interview</p>
            <h2 className="mt-5 text-balance text-4xl font-black leading-tight text-ink sm:text-6xl">
              The best hiring decisions happen when employers understand the person, not just the resume.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              VizHire helps employers see communication, confidence, professionalism, and trust earlier &mdash; while giving candidates a better way to show who they really are.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-3xl border border-viz-100 bg-white/78 shadow-[0_24px_80px_rgba(34,21,84,0.08)] backdrop-blur lg:grid-cols-3">
            {[
              [
                "See communication earlier",
                "Short video introductions help employers evaluate professionalism, confidence, and communication before interviews."
              ],
              [
                "Reduce hiring guesswork",
                "Review fit signals, professional presentation, references, and recommendations in one human-first profile."
              ],
              [
                "Make interviews more meaningful",
                "Spend less time screening resumes and more time talking to the candidates who already feel like a stronger fit."
              ]
            ].map(([title, copy], index) => (
              <div key={title} className={`p-6 sm:p-8 ${index > 0 ? "border-t border-viz-100 lg:border-l lg:border-t-0" : ""}`}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-viz-50 text-sm font-black text-viz-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-black text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-black leading-6 text-viz-800">
            VizHire helps employers trust candidates faster, and helps candidates finally be seen.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_72%_28%,rgba(187,163,255,0.42),transparent_28%),linear-gradient(135deg,#070817,#2b1378_58%,#6d3bff)] px-6 py-10 text-white shadow-glow sm:px-10 sm:py-14 lg:px-12">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_34%,rgba(255,255,255,0.12))] opacity-70" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-200">Why VizHire exists</p>
              <div className="relative mt-8 min-h-[220px] sm:min-h-[260px]">
                {[
                  "Tired of sending resumes and hearing nothing back?",
                  "Does your resume really show who you are?",
                  "Your experience is on paper. Your communication, confidence, and energy are not.",
                  "VizHire helps employers finally see the human behind the resume."
                ].map((message, index) => (
                  <h2
                    key={message}
                    className="cinematic-message absolute inset-x-0 top-0 text-balance text-3xl font-black leading-tight sm:text-5xl lg:text-6xl"
                    style={{ "--cinematic-delay": `${index * 4.5}s` } as React.CSSProperties}
                  >
                    {message}
                  </h2>
                ))}
              </div>
              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/16">
                <span className="cinematic-progress block h-full rounded-full bg-white/82" />
              </div>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                Resumes describe people. VizHire helps employers understand how people communicate, present themselves, and build trust before the first interview.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/16 bg-white/10 p-3 shadow-[0_28px_90px_rgba(5,8,22,0.34)] backdrop-blur">
              <div className="vh-candidate-media vh-candidate-media-balanced h-[290px] rounded-[1.35rem] sm:h-[360px]" style={{ "--candidate-image": `url(${candidates[0].video})` } as React.CSSProperties}>
                <img src={candidates[0].video} alt={`${candidates[0].name} professional intro preview`} className="animate-viz-preview" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-black/16 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/14 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                  30-sec intro
                </div>
                <Link href="/sample-profile" className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-white text-viz-700 shadow-soft transition hover:scale-105" aria-label="Open VizHire sample profile">
                  <Video className="h-6 w-6" />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-200">Human signal preview</p>
                  <h3 className="mt-2 text-3xl font-black">{candidates[0].name}</h3>
                  <p className="mt-2 text-sm font-bold text-white/78">Clear, confident, and professionally present.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="employers" className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">For employers</p>
            <h2 className="mt-4 text-balance text-4xl font-black text-ink sm:text-6xl">Everyone looks qualified on paper.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Communication reveals who actually fits. VizHire helps you understand presence, clarity, professionalism, and trust before interviews take over your calendar.</p>
            <p className="mt-4 rounded-2xl bg-viz-50 px-4 py-3 text-sm font-black text-viz-700">Post your first job free for 30 days.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/employer-signup">Browse candidates</ButtonLink>
              <ButtonLink href="/employer-signup" variant="secondary">Post your first job free</ButtonLink>
            </div>
          </div>

          <div className="glass rounded-[2rem] p-3 sm:p-4">
            <div className="grid gap-4 lg:grid-cols-[1fr_0.38fr]">
              <div className="vh-candidate-media vh-candidate-media-balanced h-[300px] rounded-[1.5rem] sm:h-[360px] lg:h-[390px]" style={{ "--candidate-image": `url(${candidates[1].video})` } as React.CSSProperties}>
                <img src={candidates[1].video} alt={`${candidates[1].name} professional intro preview`} className="animate-viz-speaking" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/24 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)] animate-speaking-dot" />
                  Intro in progress
                </div>
                <div className="absolute bottom-24 left-5 flex items-end gap-1.5 text-white/78">
                  {[0, 1, 2, 3, 4].map((bar) => (
                    <span key={bar} className="speaking-bar block w-1.5 rounded-full bg-white/72" style={{ "--bar-delay": `${bar * 0.12}s` } as React.CSSProperties} />
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-viz-200">Before the interview</p>
                  <h3 className="mt-2 text-3xl font-black">{candidates[1].name}</h3>
                  <p className="mt-1 text-sm font-bold text-white/82">{candidates[1].title} · {candidates[1].location}</p>
                  <p className="talking-caption mt-3 max-w-xl text-sm font-bold leading-6 text-white/76">
                    Calmly explains revenue patterns and makes complex tradeoffs easy to follow.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-white p-5 shadow-soft">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">What you notice</p>
                <div className="mt-5 space-y-3">
                  {[
                    "Clear communicator",
                    "Explains ideas calmly",
                    "Feels prepared",
                    "Strong team presence",
                    "Worth moving forward"
                  ].map((observation) => (
                    <div key={observation} className="flex items-center gap-3 rounded-2xl bg-viz-50/70 px-4 py-3 text-sm font-black text-ink">
                      <span className="h-2 w-2 rounded-full bg-viz-600" />
                      {observation}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm font-bold leading-6 text-slate-600">
                  Resumes explain experience. Presence reveals alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="candidates" className="bg-midnight px-4 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-300">For candidates</p>
            <h2 className="mt-4 text-balance text-4xl font-black sm:text-6xl">Finally show who you really are.</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">Your resume shows what you have done. VizHire helps employers understand how you communicate, show up, and build trust. Create a polished profile that makes your story feel human.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/candidate-signup">Create my free profile</ButtonLink>
              <ButtonLink href="/sample-profile" variant="secondary">See example profile</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {candidates.slice(0, 2).map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        </div>
      </section>

      <IndustryUnderstandingSection />

      <section className="px-4 pb-20">
        <div className="mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-midnight to-viz-900 p-8 text-white shadow-glow lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-balance text-3xl font-black sm:text-5xl">Ready to make hiring feel human again?</h2>
              <p className="mt-4 max-w-3xl text-white/72">Candidates finally get to show who they really are. Employers finally get to understand who they are hiring with more trust, clarity, and confidence before the first interview.</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/82">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> No app download</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Works beautifully on mobile and desktop</span>
                <span className="inline-flex items-center gap-2"><Link2 className="h-4 w-4 text-emerald-300" /> Shareable profile links</span>
                <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-emerald-300" /> Human-first hiring</span>
              </div>
            </div>
            <div className="grid gap-3 sm:min-w-[360px] sm:grid-cols-2 lg:min-w-[430px]">
              <Link href="/candidate-signup" className="rounded-2xl bg-white px-5 py-4 text-center text-viz-800 shadow-soft transition hover:-translate-y-0.5">
                <span className="block text-xs font-black uppercase tracking-[0.18em] text-viz-500">For candidates</span>
                <span className="mt-1 block text-sm font-black sm:text-base">Create my VizHire profile</span>
              </Link>
              <Link href="/employer-signup" className="rounded-2xl border border-white/28 bg-white/10 px-5 py-4 text-center text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16">
                <span className="block text-xs font-black uppercase tracking-[0.18em] text-viz-200">For employers</span>
                <span className="mt-1 block text-sm font-black sm:text-base">Post my first job free</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
