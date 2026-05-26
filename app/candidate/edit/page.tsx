import Link from "next/link";
import { BriefcaseBusiness, FileUp, Link2, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { SaveProfileButton } from "@/components/save-profile-button";
import { TopSkillsEditor } from "@/components/top-skills-editor";
import { ProfileIntroStudio } from "@/components/video-studio";
import { candidates } from "@/data/demo";

const candidate = candidates[0];

export default function CandidateEditPage() {
  return (
    <AppShell role="candidate" title="Edit Profile" subtitle="Fast updates for moments that matter.">
      <div className="mx-auto max-w-5xl space-y-6">
          <section className="glass rounded-3xl p-5 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Fast profile updates</p>
            <h1 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Your next opportunity may start with your VizHire profile.</h1>
            <p className="mt-3 max-w-3xl leading-8 text-slate-600">Update your story, video, Top 5 Skills, references, and resume from any device. Save buttons stay easy to find on mobile.</p>
            <div className="mt-5 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap">
              {["Basics", "Top 5 Skills", "Video Intro", "Experience", "References", "Recommendations", "Preview"].map((item) => (
                <span key={item} className="shrink-0 rounded-full bg-viz-50 px-3 py-2 text-xs font-black text-viz-700">{item}</span>
              ))}
            </div>
          </section>

        <form className="grid gap-6 lg:grid-cols-[0.62fr_0.38fr]">
          <section className="glass rounded-3xl p-5 sm:p-6">
            <h2 className="text-2xl font-black text-ink">Profile basics</h2>
            <div className="mt-5 grid gap-4">
              <label className="block">
                <span className="text-sm font-black">Desired role</span>
                <input defaultValue={candidate.desiredRole} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" />
              </label>
              <label className="block">
                <span className="text-sm font-black">Location</span>
                <input defaultValue={candidate.location} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" />
              </label>
              <label className="block">
                <span className="text-sm font-black">About</span>
                <textarea defaultValue={candidate.about} className="mt-2 min-h-36 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" />
              </label>
            </div>
          </section>

          <section className="space-y-4">
            <div className="rounded-2xl border border-dashed border-viz-300 bg-white p-5">
              <FileUp className="h-8 w-8 text-viz-600" />
              <p className="mt-4 font-black">Resume</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Keep your latest resume ready for one-click apply and experience auto-fill.</p>
              <button type="button" className="mt-4 min-h-12 w-full rounded-xl border border-viz-300 px-4 py-3 text-sm font-black text-viz-700">Upload resume</button>
            </div>
          </section>

          <section className="lg:col-span-2">
            <ProfileIntroStudio />
          </section>

          <div className="lg:col-span-2">
            <TopSkillsEditor initialSkills={candidate.topSkills} />
          </div>

          <section className="glass rounded-3xl p-5 sm:p-6 lg:col-span-2">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="inline-flex items-center gap-2 text-2xl font-black text-ink">
                  <BriefcaseBusiness className="h-6 w-6 text-viz-600" /> Experience
                </h2>
                <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                  Resume import can pre-fill your work history. Review the roles, companies, and timing so employers trust both your story and your experience.
                </p>
              </div>
              <button type="button" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-viz-200 bg-white px-4 py-3 text-sm font-black text-viz-700 sm:w-fit">
                <Sparkles className="h-4 w-4" /> Re-scan resume
              </button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {candidate.experienceTimeline.map((item) => (
                <div key={`${item.role}-${item.company}`} className="rounded-2xl border border-viz-100 bg-white p-4 shadow-soft">
                  <label className="block">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Role</span>
                    <input defaultValue={item.role} className="mt-2 w-full border-0 bg-transparent text-sm font-black text-ink outline-none" />
                  </label>
                  <label className="mt-4 block">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Company</span>
                    <input defaultValue={item.company} className="mt-2 w-full border-0 bg-transparent text-sm font-bold text-slate-600 outline-none" />
                  </label>
                  <label className="mt-4 block">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Duration</span>
                    <input defaultValue={item.duration} className="mt-2 w-full border-0 bg-transparent text-sm font-bold text-slate-600 outline-none" />
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="glass rounded-3xl p-5 sm:p-6 lg:col-span-2">
            <h2 className="text-2xl font-black text-ink">Portfolio and references</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black">Portfolio links</span>
                <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4">
                  <Link2 className="h-5 w-5 text-slate-400" />
                  <input defaultValue={candidate.portfolio.join(", ")} className="w-full border-0 outline-none" />
                </span>
              </label>
              <label className="block">
                <span className="text-sm font-black">Reference request</span>
                <input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-4 outline-viz-500" placeholder="Add a reference email" />
              </label>
            </div>
          </section>
        </form>

        <SaveProfileButton />
        <div className="text-center">
          <Link href="/profile/maya-johnson" className="font-black text-viz-700">View public profile</Link>
        </div>
      </div>
    </AppShell>
  );
}
