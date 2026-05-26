import Link from "next/link";
import { ArrowRight, CheckCircle2, FileUp, Link2, MapPin, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { CandidatePreviewAssist } from "@/components/publish-assist";
import { ProfileIntroStudio } from "@/components/video-studio";
import { onboardingSteps } from "@/data/demo";

export default function OnboardingPage() {
  const mobileSteps = ["Basics", "Resume", "Video", "Skills", "References", "Preview"];
  const interests = ["Healthcare", "Engineering & Technical", "Hospitality", "Customer Service", "Leadership", "Operations", "Sales", "Retail", "Education", "Finance", "Marketing", "Creative"];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(109,59,255,0.16),transparent_34%),#fbfafc] px-4 pb-28 pt-6 lg:pb-6">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between">
          <BrandLogo />
        </header>

        <section className="grid gap-10 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:py-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-viz-600">Candidate onboarding</p>
            <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-ink sm:text-6xl">Let employers meet the real you.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We&apos;ll guide you from resume upload to intro video to profile preview, so your professional story feels polished before employers see it.
            </p>
            <div className="mt-6 rounded-3xl bg-white p-4 shadow-soft">
              <div className="grid gap-3 text-sm font-black text-viz-700 sm:grid-cols-4">
                {["Upload resume", "Record intro", "Add proof", "Publish profile"].map((item) => (
                  <span key={item} className="rounded-2xl bg-viz-50 px-3 py-3 text-center">{item}</span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
              {mobileSteps.map((step, index) => (
                <a key={step} href={`#${step.toLowerCase()}`} className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-black text-viz-700 shadow-soft">
                  {index + 1}. {step}
                </a>
              ))}
            </div>

            <div className="mt-8 hidden gap-4 sm:grid-cols-2 lg:grid">
              {onboardingSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="glass rounded-2xl p-5">
                    <Icon className="h-7 w-7 text-viz-600" />
                    <h2 className="mt-4 font-black text-ink">{step.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <form className="space-y-4">
            <section id="basics" className="glass scroll-mt-24 rounded-3xl p-5 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">Step 1</p>
              <h2 className="mt-2 text-2xl font-black text-ink">Basics</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <label className="block md:col-span-2">
                  <span className="text-sm font-black">Desired role</span>
                  <input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Growth Marketing Manager" />
                </label>
                <label className="block">
                  <span className="text-sm font-black">Location</span>
                  <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4">
                    <MapPin className="h-5 w-5 text-slate-400" />
                    <input className="w-full border-0 outline-none" placeholder="New York, NY" />
                  </span>
                </label>
                <label className="block">
                  <span className="text-sm font-black">Availability</span>
                  <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500">
                    <option>Available in 2 weeks</option>
                    <option>Immediate</option>
                    <option>30 days</option>
                  </select>
                </label>
                <label className="block md:col-span-2">
                  <span className="text-sm font-black">About you</span>
                  <textarea className="mt-2 min-h-32 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Share how you work, what motivates you, and the kind of team where you do your best work." />
                </label>
                <div className="md:col-span-2">
                  <span className="text-sm font-black">What industries or roles are you interested in?</span>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-500">Choose a few directions so VizHire can show relevant and adjacent opportunities as your profile develops.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <button
                        key={interest}
                        type="button"
                        className={`rounded-full px-4 py-2 text-sm font-black transition ${
                          index === 0 || index === 10 ? "bg-viz-700 text-white shadow-glow" : "bg-white text-viz-700 shadow-soft hover:bg-viz-50"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="video" className="scroll-mt-24">
              <p className="mb-3 px-1 text-xs font-black uppercase tracking-[0.2em] text-viz-600">Signature moment</p>
              <ProfileIntroStudio />
            </section>

            <section id="resume" className="glass scroll-mt-24 rounded-3xl p-5 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">Step 2</p>
              <h2 className="mt-2 text-2xl font-black text-ink">Resume upload</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-dashed border-viz-300 bg-white p-5">
                  <FileUp className="h-8 w-8 text-viz-600" />
                  <p className="mt-4 font-black">Upload your resume</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">VizHire can pre-fill your experience, education, and professional proof so you do not rebuild your history from scratch.</p>
                  <button className="mt-4 min-h-12 w-full rounded-xl border border-viz-300 px-4 py-3 text-sm font-black text-viz-700 sm:w-auto">Upload resume</button>
                </div>
                <div id="experience" className="rounded-2xl border border-viz-100 bg-white p-5 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-viz-50 text-viz-700">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-black text-ink">Experience review</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Review the extracted work history, then edit and confirm before publishing.</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {["Extract", "Edit", "Confirm"].map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 rounded-xl bg-viz-50 px-3 py-2 text-xs font-black text-viz-700">
                        <CheckCircle2 className="h-4 w-4" /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <label className="mt-5 block">
                <span className="text-sm font-black">Experience / education</span>
                <textarea className="mt-2 min-h-24 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Review auto-filled roles, companies, durations, education, and certifications." />
              </label>
            </section>

            <section id="skills" className="glass scroll-mt-24 rounded-3xl p-5 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">Step 3</p>
              <h2 className="mt-2 text-2xl font-black text-ink">Top 5 Skills</h2>
              <label className="mt-5 block">
                <span className="text-sm font-black">Skills employers should notice first</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Add 1-5 key skills, separated by commas" />
                <span className="mt-2 block text-xs font-bold text-slate-500">Minimum 1 skill recommended. Maximum 5 skills.</span>
              </label>
            </section>

            <section id="references" className="glass scroll-mt-24 rounded-3xl p-5 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-viz-600">Step 4</p>
              <h2 className="mt-2 text-2xl font-black text-ink">Links, references, and recommendations</h2>
              <label className="mt-5 block">
                <span className="text-sm font-black">Portfolio links</span>
                <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4">
                  <Link2 className="h-5 w-5 text-slate-400" />
                  <input className="w-full border-0 outline-none" placeholder="Portfolio, LinkedIn, project links" />
                </span>
              </label>
              <label className="mt-5 block">
                <span className="text-sm font-black">References / recommendations</span>
                <textarea className="mt-2 min-h-24 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Add reference names, recommendation notes, or people you want to invite." />
              </label>
            </section>

            <CandidatePreviewAssist />
          </form>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-viz-100 bg-white/95 p-3 shadow-glow backdrop-blur lg:hidden">
        <Link href="#references" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 font-black text-white">
          Finish profile first <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
