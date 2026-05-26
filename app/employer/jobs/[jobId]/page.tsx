import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  MapPin,
  Play,
  Share2,
  Star,
  UsersRound,
  Video
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ShareActions } from "@/components/share-actions";
import { applicantStages, candidates, getCandidateMatch, jobApplicants, jobs } from "@/data/demo";

export function generateStaticParams() {
  return jobs.map((job) => ({ jobId: job.id }));
}

export default async function EmployerJobDetailPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const job = jobs.find((item) => item.id === jobId) ?? jobs[0];
  const applicants = (jobApplicants[job.id as keyof typeof jobApplicants] ?? []).map((application) => ({
    ...application,
    candidate: candidates.find((candidate) => candidate.id === application.candidateId) ?? candidates[0]
  }));
  const suggestedMatches = applicants.filter(({ candidate }) => getCandidateMatch(candidate, job).score >= 88).length;
  const shortlisted = applicants.filter((item) => item.status === "Shortlisted").length;
  const interviewing = applicants.filter((item) => item.status === "Interviewing").length;

  return (
    <AppShell title={job.title} subtitle="Review applicants for this posted job.">
      <Link href="/employer/dashboard" className="mb-5 inline-flex items-center gap-2 text-sm font-black text-viz-700">
        <ArrowLeft className="h-4 w-4" /> Back to dashboard
      </Link>

      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-midnight via-viz-900 to-viz-700 p-6 text-white shadow-glow lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-200">Posted job</p>
            <h1 className="mt-3 text-balance text-4xl font-black sm:text-5xl">{job.title}</h1>
            <p className="mt-4 text-lg text-white/76">
              {job.applicants} applicants · {job.location} · {job.hideCompanyName ? "Company private" : job.company}
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-3">
            <Link href={`/employer/jobs/${job.id}/review`} className="rounded-xl bg-white px-4 py-3 text-sm font-black text-viz-800">Review applicants</Link>
            <Link href="/employer/post-job" className="rounded-xl border border-white/24 bg-white/10 px-4 py-3 text-sm font-black text-white">Edit job</Link>
            <a href="#share-job" className="rounded-xl border border-white/24 bg-white/10 px-4 py-3 text-sm font-black text-white">Share job</a>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {[
            ["Total applicants", String(job.applicants), UsersRound],
            ["New applicants", String(Math.max(1, applicants.filter((item) => item.status === "Applied").length)), Star],
            ["Shortlisted", String(shortlisted), CheckCircle2],
            ["Interviewing", String(interviewing), Video],
            ["Suggested matches", String(suggestedMatches), BriefcaseBusiness]
          ].map(([label, value, Icon]) => (
            <div key={label as string} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <Icon className="h-5 w-5 text-viz-200" />
              <p className="mt-3 text-2xl font-black">{value as string}</p>
              <p className="text-sm text-white/68">{label as string}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.62fr_0.38fr]">
        <section className="space-y-6">
          <article className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">Job details</h2>
            <div className="mt-5 grid gap-3 text-sm font-bold text-slate-600 sm:grid-cols-2">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-3 shadow-soft"><BriefcaseBusiness className="h-4 w-4 text-viz-600" /> {job.hideCompanyName ? "Company private" : job.company}</span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-3 shadow-soft"><MapPin className="h-4 w-4 text-viz-600" /> {job.location}</span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-3 shadow-soft"><FileText className="h-4 w-4 text-viz-600" /> {job.workType}</span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-3 shadow-soft">
                {job.showSalary ? <Eye className="h-4 w-4 text-viz-600" /> : <EyeOff className="h-4 w-4 text-viz-600" />}
                {job.showSalary ? job.salaryRange : "Salary hidden"}
              </span>
            </div>
            <p className="mt-5 leading-8 text-slate-600">{job.description}</p>
          </article>

          <article className="glass rounded-3xl p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-black text-ink">Required skills</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.requiredSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-viz-50 px-4 py-2 text-sm font-black text-viz-700">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-black text-ink">Preferred skills</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.preferredSkills.map((skill) => (
                    <span key={skill} className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-soft">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">Candidate Video Questions</h2>
            <div className="mt-5 space-y-3">
              {job.videoQuestions.map((question, index) => (
                <p key={question} className="rounded-2xl bg-white p-4 text-sm font-bold leading-6 text-slate-700 shadow-soft">
                  {index + 1}. {question}
                </p>
              ))}
            </div>
          </article>
        </section>

        <aside className="space-y-6">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">Applicant pipeline</h2>
            <div className="mt-5 space-y-3">
              {applicantStages.map((stage) => (
                <div key={stage} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-soft">
                  <span className="font-black text-ink">{stage}</span>
                  <span className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">
                    {applicants.filter((item) => item.status === stage).length}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div id="share-job">
            <ShareActions
              mode="job"
              label="Share this hiring link"
              title={`${job.title} at ${job.hideCompanyName ? "a VizHire employer" : job.company}`}
              url={`/candidate/jobs/${job.id}`}
              name={job.title}
              role={job.hideCompanyName ? "Company private" : job.company}
              image={applicants[0]?.candidate.video}
              introLabel="Hiring link"
              trustStatement="Share a polished job link that invites candidates to apply with their VizHire profile, not just another resume upload."
            />
          </div>
        </aside>
      </div>

      <section id="applicants" className="mt-6">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Job-specific review</p>
            <h2 className="text-3xl font-black text-ink">Applicants for this job</h2>
          </div>
          <p className="text-sm font-bold text-slate-500">Only candidates who applied to {job.title}.</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          {applicants.map(({ candidate, status }) => {
            const match = getCandidateMatch(candidate, job);

            return (
              <article key={candidate.id} className="glass overflow-hidden rounded-3xl p-4">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={candidate.avatar} alt={candidate.name} className="h-48 w-full object-cover" />
                  <button className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-white/94 text-viz-700 shadow-soft" aria-label={`Play ${candidate.name} intro video`}>
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </button>
                  <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700">{match.score}% match</span>
                </div>
                <div className="p-2 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black text-ink">{candidate.name}</h3>
                      <p className="text-sm text-slate-600">{candidate.desiredRole}</p>
                      <p className="mt-1 text-sm font-bold text-slate-500">{candidate.location}</p>
                    </div>
                    <span className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{status}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {candidate.topSkills.map((skill) => (
                      <span key={skill} className="rounded-full bg-viz-50 px-3 py-1 text-xs font-bold text-viz-700">{skill}</span>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl bg-white p-3 shadow-soft">
                    <p className="text-sm font-black text-ink">Match reasons</p>
                    <div className="mt-2 space-y-2">
                      {[...match.reasons, "Video intro completed", "References available"].slice(0, 4).map((reason) => (
                        <p key={reason} className="text-xs font-bold text-slate-600">{reason}</p>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-black text-emerald-700">{candidate.references} references · {candidate.recommendations.length} recommendations</p>
                  <div className="mt-4 grid gap-2">
                    <Link href={`/employer/candidates/${candidate.id}?job=${job.id}`} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-viz-700 px-4 text-sm font-black text-white">View Full Profile</Link>
                    <div className="grid grid-cols-2 gap-2">
                      <select defaultValue={status} className="min-h-11 rounded-xl border border-viz-100 bg-white px-3 text-sm font-black text-ink outline-viz-500">
                        {applicantStages.map((stage) => <option key={stage}>{stage}</option>)}
                      </select>
                      <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-viz-200 bg-white px-3 text-sm font-black text-viz-700">
                        <Share2 className="h-4 w-4" /> Share
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
