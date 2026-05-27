import Link from "next/link";
import { CheckCircle2, Link2, ShieldCheck, Star } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { IndustryUnderstandingSection } from "@/components/industry-understanding-section";
import { ButtonLink, TrustPill } from "@/components/ui";
import { candidates } from "@/data/demo";

export default function LandingPage() {
  const comparisonCandidate = {
    name: "Emily Carter",
    title: "Customer Experience Manager",
    location: "Nashville, TN",
    poster: "/images/interview-intro-emily.png",
    responseVideo: "/videos/role-specific-response.mov"
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
              Resumes show experience. VizHire shows how people communicate, present themselves, and build trust
              <span className="mt-2 block text-xl font-black leading-8 text-ink sm:text-2xl">
                before the first interview.
              </span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/signup">Get started free</ButtonLink>
              <ButtonLink href="#platform" variant="secondary">See how VizHire works</ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[1.55rem] border border-viz-100/80 bg-white/54 p-1.5 shadow-[0_30px_100px_rgba(34,21,84,0.13)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-slate-950">
                <div className="flex items-center justify-between border-b border-white/10 bg-white px-2.5 py-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="hidden rounded-full bg-slate-100 px-2 py-0.5 text-[7px] font-black uppercase tracking-[0.14em] text-slate-400 sm:block">
                    Employer review
                  </div>
                </div>

                <div className="grid bg-[radial-gradient(circle_at_82%_0%,rgba(109,59,255,0.14),transparent_28%),linear-gradient(135deg,#080914,#18112f)] p-1.5 sm:grid-cols-[1fr_132px] xl:grid-cols-[1fr_132px]">
                  <div className="relative h-[342px] overflow-hidden rounded-[1rem] bg-midnight sm:h-[430px]">
                    <video
                      aria-label={`${comparisonCandidate.name} answering a role-specific employer question`}
                      autoPlay
                      className="vh-premium-video h-full w-full object-cover object-[50%_42%]"
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster={comparisonCandidate.poster}
                    >
                      <source src={comparisonCandidate.responseVideo} />
                    </video>
                    <div className="animate-human-presence absolute inset-0 bg-[radial-gradient(circle_at_48%_36%,rgba(255,255,255,0.1),transparent_20%)] mix-blend-screen" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/22 via-black/0 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-black/4" />
                    <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/28 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white/92 backdrop-blur">
                      <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)] animate-speaking-dot" />
                      Role-specific response
                    </div>
                    <div className="absolute left-3 right-3 top-12 h-0.5 overflow-hidden rounded-full bg-white/14">
                      <span className="cinematic-progress block h-full rounded-full bg-white/70" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="talking-caption max-w-md text-sm font-bold leading-5 text-white/86">
                        “For this role, I would focus on helping customers feel heard, supported, and confident in the next step.”
                      </p>
                      <h2 className="mt-3 text-2xl font-black leading-none">{comparisonCandidate.name}</h2>
                      <p className="mt-1.5 text-xs font-bold text-white/78">{comparisonCandidate.title} · {comparisonCandidate.location}</p>
                    </div>
                  </div>

                  <div className="mt-1.5 rounded-[1rem] border border-white/10 bg-white/[0.045] p-2.5 text-white sm:ml-1.5 sm:mt-0">
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] text-viz-100">Hiring notes</p>
                    <h3 className="mt-2 text-[13px] font-black leading-tight">Already clearer than a resume.</h3>
                    <div className="mt-3 space-y-2">
                      {["Answers clearly", "Understands the role", "Worth reviewing"].map((signal) => (
                        <div key={signal} className="flex items-center gap-1.5 border-b border-white/10 pb-2 text-[11px] font-black text-white/86 last:border-b-0 last:pb-0">
                          <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-300" />
                          {signal}
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-[10px] font-bold leading-4 text-white/54">
                      Role-specific response reviewed with experience and references.
                    </p>
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

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              [
                "Spend less time screening resumes.",
                "Role-specific responses help teams identify communication, clarity, and presence before manual review slows momentum."
              ],
              [
                "Avoid interviews that were never the right fit.",
                "See stronger human signals earlier, so hiring teams spend interview time on candidates already worth a closer look."
              ],
              [
                "Reduce costly hiring uncertainty.",
                "VizHire gives teams more confidence before moving candidates forward, helping decisions feel faster and better aligned."
              ]
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.5rem] border border-viz-100/80 bg-white/62 p-6 shadow-[0_18px_60px_rgba(34,21,84,0.055)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:p-7">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-viz-700 to-viz-300" />
                <h3 className="text-balance text-xl font-black leading-tight text-ink sm:text-2xl">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600 sm:text-base sm:leading-7">{copy}</p>
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
                <video
                  aria-label="Professional candidate answering a role-specific employer question"
                  autoPlay
                  className="vh-premium-video relative z-[1] h-full w-full object-cover object-center"
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster={candidates[0].video}
                >
                  <source src="/videos/black-professional-girl.mov" />
                </video>
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/62 via-black/0 to-black/6" />
                <div className="absolute left-4 top-4 z-[3] flex items-center gap-2 rounded-full bg-black/28 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)] animate-speaking-dot" />
                  Role-specific response
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-[3] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-200">Employer question response</p>
                  <h3 className="mt-2 text-3xl font-black">Maya Johnson</h3>
                  <p className="talking-caption mt-2 text-sm font-bold text-white/82">Clear, confident, and relevant to the role.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="employers" className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-12">
          <div className="lg:pt-2">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">For employers</p>
            <h2 className="mt-4 text-balance text-4xl font-black text-ink sm:text-6xl">Everyone looks qualified on paper.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Communication reveals who actually fits. VizHire helps you understand presence, clarity, professionalism, and trust before interviews take over your calendar.</p>
            <p className="mt-4 rounded-2xl bg-viz-50 px-4 py-3 text-sm font-black text-viz-700">Post your first job free for 30 days.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/employer-signup">Browse candidates</ButtonLink>
              <ButtonLink href="/employer-signup" variant="secondary">Post your first job free</ButtonLink>
            </div>
          </div>

          <div className="glass rounded-[2rem] p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_250px] xl:grid-cols-[minmax(0,1fr)_270px]">
              <div className="space-y-4">
                <div className="vh-candidate-media vh-candidate-media-balanced h-[300px] rounded-[1.5rem] sm:h-[350px] lg:h-[370px]" style={{ "--candidate-image": `url(${candidates[1].video})` } as React.CSSProperties}>
                  <video
                    aria-label={`${candidates[1].name} answering a hiring team question`}
                    autoPlay
                    className="vh-premium-video relative z-[1] h-full w-full object-cover object-center"
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={candidates[1].video}
                  >
                    <source src="/videos/employer-question-response.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/68 via-black/0 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/24 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)] animate-speaking-dot" />
                    Response in progress
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
                      Responds to the hiring team's question with calm, role-relevant clarity.
                    </p>
                  </div>
                </div>

                <div className="relative h-[138px] overflow-hidden rounded-[1.35rem] border border-viz-100 bg-white px-5 py-4 shadow-[0_18px_55px_rgba(34,21,84,0.07)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-viz-600 sm:tracking-[0.2em]">What changes for recruiters</p>
                  <div className="relative mt-3 min-h-[62px]">
                    {[
                      "Resumes explain experience. Communication reveals alignment.",
                      "The strongest candidates become clearer before you spend interview time.",
                      "You are not guessing anymore. You are seeing how they show up."
                    ].map((message, index) => (
                      <p
                        key={message}
                        className="employer-proof-message absolute inset-x-0 top-0 text-balance text-base font-black leading-snug text-ink sm:text-lg"
                        style={{ "--employer-proof-delay": `${index * 4.5}s` } as React.CSSProperties}
                      >
                        {message}
                      </p>
                    ))}
                  </div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-viz-50">
                    <span className="employer-proof-progress block h-full rounded-full bg-viz-500/70" />
                  </div>
                </div>
              </div>

              <div className="self-start rounded-[1.5rem] bg-white p-4 shadow-soft lg:h-[524px] xl:h-[524px]">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-viz-600">Candidate context</p>
                <h3 className="mt-3 text-2xl font-black leading-none text-ink">{candidates[1].name}</h3>
                <p className="mt-2 text-xs font-black leading-5 text-slate-500">{candidates[1].title} · {candidates[1].location}</p>
                <p className="mt-4 text-[13px] font-bold leading-6 text-slate-600">
                  Analytical and steady, with a strong ability to explain complex work in plain language.
                </p>

                <div className="mt-4 rounded-2xl bg-viz-50/70 p-3.5">
                  <p className="text-[13px] font-black leading-5 text-ink">Revenue Operations Analyst</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">Stripe · 2 years</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Clear communicator", "Prepared", "Role-relevant"].map((signal) => (
                    <span key={signal} className="rounded-full bg-white px-3 py-2 text-[10px] font-black text-viz-700 ring-1 ring-viz-100">
                      {signal}
                    </span>
                  ))}
                </div>

                <p className="mt-4 border-t border-viz-100 pt-4 text-sm font-black leading-6 text-ink">
                  Worth moving forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustryUnderstandingSection />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#100532_0%,#f7f1ff_28%,#ffffff_100%)] px-4 py-20">
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_70%_0%,rgba(134,92,255,0.45),transparent_34%)]" />
        <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-white/18 bg-[radial-gradient(circle_at_82%_24%,rgba(255,255,255,0.22),transparent_24%),linear-gradient(135deg,#090817_0%,#1f0b5f_48%,#6d3bff_100%)] p-8 text-white shadow-[0_34px_110px_rgba(45,20,118,0.32)] lg:p-12">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/16 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-viz-300/22 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-balance text-3xl font-black sm:text-5xl">Ready to make hiring feel human again?</h2>
              <p className="mt-4 max-w-3xl text-white/76">Candidates finally get to show who they really are. Employers finally get to understand who they are hiring with more trust, clarity, and confidence before the first interview.</p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-white/82">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-2 backdrop-blur"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> No app download</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-2 backdrop-blur"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Works beautifully on mobile and desktop</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-2 backdrop-blur"><Link2 className="h-4 w-4 text-emerald-300" /> Shareable profile links</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-2 backdrop-blur"><Star className="h-4 w-4 text-emerald-300" /> Human-first hiring</span>
              </div>
            </div>
            <div className="grid gap-3 rounded-[1.75rem] border border-white/14 bg-white/10 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur sm:min-w-[360px] sm:grid-cols-2 lg:min-w-[460px]">
              <Link href="/candidate-signup" className="rounded-2xl bg-white px-5 py-4 text-center text-viz-800 shadow-[0_18px_52px_rgba(255,255,255,0.2)] transition hover:-translate-y-0.5">
                <span className="block text-xs font-black uppercase tracking-[0.18em] text-viz-500">For candidates</span>
                <span className="mt-1 block text-sm font-black sm:text-base">Create my VizHire profile</span>
              </Link>
              <Link href="/employer-signup" className="rounded-2xl border border-white/22 bg-white/12 px-5 py-4 text-center text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18">
                <span className="block text-xs font-black uppercase tracking-[0.18em] text-viz-100">For employers</span>
                <span className="mt-1 block text-sm font-black sm:text-base">Post my first job free</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
