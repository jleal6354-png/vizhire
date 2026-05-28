import Link from "next/link";
import { ArrowLeft, Eye, Lock, Mail, UserRound } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { EmployerTalentSelector } from "@/components/employer-talent-selector";

export function AuthScreen({
  type,
  role
}: {
  type: "login" | "signup";
  role: "candidate" | "employer";
}) {
  const isSignup = type === "signup";
  const isCandidate = role === "candidate";
  const candidateSignupVideo = "/videos/black-professional-girl.mov";
  const employerSignupVideo = "/videos/employer-signup-review.mov";
  const title = isSignup ? (isCandidate ? "Create the profile your resume can't." : "Start hiring with more human insight.") : "Welcome back";
  const subtitle = isSignup
    ? isCandidate
      ? "Show employers how you communicate, present yourself, and bring your experience to life."
      : "Post your first role and understand how candidates communicate before interviews fill your calendar."
    : isCandidate
      ? "Continue building your professional story."
      : "Continue discovering better-fit talent.";
  const overlayTitle = isCandidate ? "Let employers meet the real you." : "See the person before the interview.";
  const overlayText = isCandidate
    ? "Create a video-first profile that shows your communication, confidence, skills, and story."
    : "Review role-specific responses so communication, confidence, and fit become clear sooner.";
  const primaryCta = isSignup ? (isCandidate ? "Create my free profile" : "Start hiring free") : "Log in";
  const submitHref = isCandidate ? (isSignup ? "/candidate/welcome" : "/candidate/dashboard") : isSignup ? "/employer/onboarding" : "/employer/dashboard";
  const imagePosition = isCandidate ? "object-center" : "object-center";

  if (!isSignup) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_20%_12%,rgba(109,59,255,0.16),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(150,108,255,0.1),transparent_28%),linear-gradient(180deg,#ffffff,#faf8ff_58%,#ffffff)] px-4 py-6 sm:py-8">
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col">
          <header className="flex items-center justify-between">
            <BrandLogo />
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-viz-100 bg-white/82 px-4 py-2 text-sm font-bold text-slate-700 shadow-soft backdrop-blur">
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>
          </header>

          <section className="flex flex-1 items-center justify-center py-10">
            <div className="w-full max-w-md rounded-[2rem] border border-viz-100 bg-white/94 p-6 shadow-soft backdrop-blur sm:p-8">
              <div className="mb-8 flex justify-center">
                <BrandLogo compact />
              </div>
              <p className="text-center text-xs font-black uppercase tracking-[0.22em] text-viz-600">{role} login</p>
              <h1 className="mt-3 text-center text-4xl font-black leading-tight text-ink">{title}</h1>
              <p className="mt-3 text-center leading-7 text-slate-600">{subtitle}</p>

              <form className="mt-8 space-y-5">
                <label className="block">
                  <span className="text-sm font-black text-ink">Email</span>
                  <span className="mt-2 flex min-h-14 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-viz-400 focus-within:ring-4 focus-within:ring-viz-100">
                    <Mail className="h-5 w-5 shrink-0 text-slate-400" />
                    <input className="h-full w-full border-0 bg-transparent outline-none" placeholder="Enter your email" type="email" />
                  </span>
                </label>
                <label className="block">
                  <span className="text-sm font-black text-ink">Password</span>
                  <span className="mt-2 flex min-h-14 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-viz-400 focus-within:ring-4 focus-within:ring-viz-100">
                    <Lock className="h-5 w-5 shrink-0 text-slate-400" />
                    <input className="h-full w-full border-0 bg-transparent outline-none" placeholder="Enter your password" type="password" />
                    <Eye className="h-5 w-5 shrink-0 text-slate-400" />
                  </span>
                </label>
                <Link href="#forgot-password" className="block text-right text-sm font-bold text-viz-700">Forgot password?</Link>
                <Link href={submitHref} className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-viz-700 to-viz-500 px-5 py-4 font-black text-white shadow-glow transition hover:-translate-y-0.5">
                  Log in
                </Link>
              </form>

              <p className="mt-8 text-center text-sm text-slate-600">
                New to VizHire?{" "}
                <Link href={`/${role}-signup`} className="font-black text-viz-700">
                  {isCandidate ? "Create a profile" : "Register your company"}
                </Link>
              </p>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_18%_12%,rgba(109,59,255,0.13),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(150,108,255,0.09),transparent_30%),linear-gradient(180deg,#ffffff,#faf9ff_56%,#ffffff)] px-4 py-2 sm:py-3">
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1440px] flex-col">
        <header className="flex items-center justify-between">
          <BrandLogo />
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-viz-100 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-soft backdrop-blur">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </header>

        <section className={`grid flex-1 items-center gap-7 py-5 lg:gap-11 lg:py-6 ${isCandidate ? "lg:grid-cols-[1.04fr_0.96fr]" : "lg:grid-cols-[0.95fr_0.85fr]"}`}>
          <div className={`space-y-4 ${!isCandidate ? "lg:flex lg:h-[min(590px,calc(100vh-7rem))] lg:flex-col" : ""}`}>
            <div className={`relative h-[300px] overflow-hidden rounded-[2rem] border border-white shadow-soft sm:h-[360px] ${
              isCandidate ? "lg:h-[min(660px,calc(100vh-5rem))] lg:min-h-[600px]" : "lg:min-h-0 lg:flex-1"
            }`}>
              {isCandidate ? (
                <video
                  aria-label="Candidate creating a VizHire video-first professional profile"
                  autoPlay
                  className="vh-premium-video h-full w-full object-cover object-center"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={candidateSignupVideo} />
                </video>
              ) : (
                <video
                  aria-label="Employer reviewing a candidate video response on VizHire"
                  autoPlay
                  className="vh-premium-video h-full w-full object-cover object-center"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={employerSignupVideo} />
                </video>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,20,0.08),rgba(6,7,20,0.34)_44%,rgba(6,7,20,0.86))]" />
              {isCandidate && (
                <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/28 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-white shadow-soft backdrop-blur-md">
                  Video-first profile
                </div>
              )}
              {!isCandidate && (
                <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/28 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-white shadow-soft backdrop-blur-md">
                  Human-first review
                </div>
              )}
              {!isCandidate && (
                <div className="absolute right-5 top-5 hidden max-w-[13rem] rounded-2xl border border-white/20 bg-white/14 p-4 text-white shadow-soft backdrop-blur-md sm:block">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/70">What you notice</p>
                  <p className="mt-2 text-lg font-black leading-tight">Clear communicator. Worth moving forward.</p>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-7">
                <p className="max-w-md text-3xl font-black leading-tight sm:text-[2.35rem]">{overlayTitle}</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/86 sm:text-[0.95rem]">{overlayText}</p>
              </div>
            </div>
            {isSignup && !isCandidate && (
              <EmployerTalentSelector />
            )}
          </div>

          <div className="flex h-full items-center justify-center">
            <div className={`flex w-full max-w-[40rem] flex-col justify-center rounded-[2rem] border border-viz-100 bg-white p-6 shadow-soft sm:p-7 lg:p-9 ${
              isCandidate ? "lg:h-[min(660px,calc(100vh-5rem))] lg:min-h-[600px]" : "lg:h-[min(590px,calc(100vh-7rem))]"
            }`}>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">{role} signup</p>
              <h1 className={`mt-2 text-balance text-4xl font-black leading-[1.02] text-ink ${
                isCandidate ? "max-w-[18ch] sm:text-[2.45rem] xl:text-[2.64rem]" : "max-w-[17ch] sm:text-[2.24rem] xl:text-[2.42rem]"
              }`}>
                {isSignup && isCandidate ? (
                  <>
                    <span className="block">Create the profile</span>
                    <span className="block">your resume can't.</span>
                  </>
                ) : (
                  title
                )}
              </h1>
              <p className={`mt-3 max-w-lg leading-6 text-slate-600 ${isCandidate ? "text-[0.95rem]" : "text-sm"}`}>{subtitle}</p>

              <form className={isCandidate ? "mt-5 space-y-3" : "mt-4 space-y-2.5"}>
                {isSignup && (
                  <label className="block">
                    <span className="text-sm font-black text-ink">Name</span>
                    <span className={`${isCandidate ? "min-h-12" : "min-h-11"} mt-1.5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-viz-400 focus-within:ring-4 focus-within:ring-viz-100`}>
                      <UserRound className="h-5 w-5 shrink-0 text-slate-400" />
                      <input className="h-full w-full border-0 bg-transparent outline-none" placeholder="Enter your name" />
                    </span>
                  </label>
                )}
                <label className="block">
                  <span className="text-sm font-black text-ink">Email</span>
                  <span className={`${isCandidate ? "min-h-12" : "min-h-11"} mt-1.5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-viz-400 focus-within:ring-4 focus-within:ring-viz-100`}>
                    <Mail className="h-5 w-5 shrink-0 text-slate-400" />
                    <input className="h-full w-full border-0 bg-transparent outline-none" placeholder="Enter your email" type="email" />
                  </span>
                </label>
                <label className="block">
                  <span className="text-sm font-black text-ink">Password</span>
                  <span className={`${isCandidate ? "min-h-12" : "min-h-11"} mt-1.5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-viz-400 focus-within:ring-4 focus-within:ring-viz-100`}>
                    <Lock className="h-5 w-5 shrink-0 text-slate-400" />
                    <input className="h-full w-full border-0 bg-transparent outline-none" placeholder="Enter your password" type="password" />
                    <Eye className="h-5 w-5 shrink-0 text-slate-400" />
                  </span>
                </label>
                {isSignup && (
                  <label className="block">
                    <span className="text-sm font-black text-ink">Confirm Password</span>
                    <span className={`${isCandidate ? "min-h-12" : "min-h-11"} mt-1.5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-viz-400 focus-within:ring-4 focus-within:ring-viz-100`}>
                      <Lock className="h-5 w-5 shrink-0 text-slate-400" />
                      <input className="h-full w-full border-0 bg-transparent outline-none" placeholder="Confirm your password" type="password" />
                    </span>
                  </label>
                )}
                <Link href={submitHref} className="mt-1 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-viz-700 to-viz-500 px-5 py-3 font-black text-white shadow-glow transition hover:-translate-y-0.5">
                  {primaryCta}
                </Link>
              </form>

              <p className="mt-4 rounded-2xl bg-viz-50/70 px-4 py-3 text-center text-sm text-slate-600">
                Already have an account?{" "}
                <Link href={`/${role}-login`} className="font-black text-viz-700">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
