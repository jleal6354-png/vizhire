import Link from "next/link";
import { BriefcaseBusiness, CheckCircle2, Edit3, Eye, Share2, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ApplyButton } from "@/components/apply-button";
import { ShareActions } from "@/components/share-actions";
import { applicationActivity, candidates, getCandidateMatch, jobs } from "@/data/demo";

const candidate = candidates[0];

export default function CandidateDashboardPage() {
  const match = getCandidateMatch(candidate, jobs[0]);

  return (
    <AppShell role="candidate" title="Candidate Dashboard" subtitle="Move fast when opportunity shows up.">
      <div className="grid gap-6 xl:grid-cols-[0.68fr_0.32fr]">
        <section className="space-y-6">
          <div className="glass rounded-3xl p-5 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
              <img src={candidate.avatar} alt={candidate.name} className="h-24 w-24 rounded-3xl object-cover shadow-soft" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Create your VizHire profile for free</p>
                <h1 className="mt-2 text-4xl font-black text-ink">Don&apos;t miss out on opportunities.</h1>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">Need to make a quick change before applying? Update your profile anytime. Keep your video, Top 5 Skills, references, and resume ready to share.</p>
              </div>
              <Link href="/candidate/edit" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 py-4 font-black text-white shadow-glow">
                <Edit3 className="h-5 w-5" />
                Update My Profile
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Profile completion", "92%", CheckCircle2],
              ["Applications", "3", BriefcaseBusiness],
              ["Profile views", "128", Eye]
            ].map(([label, value, Icon]) => (
              <div key={label as string} className="glass rounded-2xl p-5">
                <Icon className="h-7 w-7 text-viz-600" />
                <p className="mt-4 text-sm font-bold text-slate-500">{label as string}</p>
                <p className="mt-1 text-3xl font-black text-ink">{value as string}</p>
              </div>
            ))}
          </div>

          <section className="glass rounded-3xl p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-ink">Recommended job</h2>
                <p className="mt-1 text-slate-600">Suggested from your Top 5 Skills, desired role, location, and work preferences.</p>
              </div>
              <span className="h-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-700">{match.score}% {match.label}</span>
            </div>
            <div className="mt-5 rounded-2xl bg-white p-5 shadow-soft">
              <h3 className="text-2xl font-black text-ink">{jobs[0].title}</h3>
              <p className="mt-2 text-sm font-bold text-slate-500">{jobs[0].company} · {jobs[0].workType} · {jobs[0].showSalary ? jobs[0].salaryRange : "Salary hidden"}</p>
              <p className="mt-4 leading-7 text-slate-600">{jobs[0].description}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {match.reasons.map((reason) => (
                  <p key={reason} className="rounded-xl bg-viz-50 px-3 py-2 text-sm font-bold text-viz-700">{reason}</p>
                ))}
              </div>
              <div className="mt-5">
                <ApplyButton jobTitle={jobs[0].title} />
              </div>
            </div>
          </section>

          <section className="glass rounded-3xl p-5 sm:p-6">
            <h2 className="text-2xl font-black text-ink">Applications</h2>
            <div className="mt-5 space-y-3">
              {applicationActivity.map((item) => (
                <div key={`${item.company}-${item.jobTitle}`} className="flex flex-col justify-between gap-3 rounded-2xl bg-white p-4 shadow-soft sm:flex-row sm:items-center">
                  <div>
                    <p className="font-black text-ink">{item.jobTitle}</p>
                    <p className="text-sm text-slate-500">{item.company} · Applied {item.applied}</p>
                  </div>
                  <span className="w-fit rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{item.status}</span>
                </div>
              ))}
            </div>
          </section>
        </section>

        <aside className="space-y-6">
          <ShareActions title="Maya Johnson on VizHire" url="/profile/maya-johnson" />
          <div className="glass rounded-2xl p-6">
            <Sparkles className="h-7 w-7 text-viz-600" />
            <h2 className="mt-4 text-xl font-black text-ink">Are you on Viz?</h2>
            <p className="mt-2 leading-7 text-slate-600">Stand out beyond the resume with a profile link you can use anywhere.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-ink">Top 5 Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {candidate.topSkills.map((skill) => (
                <span key={skill} className="rounded-full bg-viz-50 px-3 py-2 text-xs font-black text-viz-700">{skill}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <div className="fixed inset-x-0 bottom-[76px] z-30 border-t border-viz-100 bg-white/95 p-3 shadow-glow backdrop-blur md:hidden">
        <Link href="/candidate/edit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 font-black text-white">
          <Edit3 className="h-5 w-5" /> Update My Profile
        </Link>
      </div>
    </AppShell>
  );
}
