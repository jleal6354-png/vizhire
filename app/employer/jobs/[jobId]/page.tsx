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
  ShieldCheck,
  Star,
  UsersRound,
  Video
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { JobStatusControl } from "@/components/job-status-control";
import { ShareActions } from "@/components/share-actions";
import { applicantStages, candidates, getCandidateMatch, jobApplicants, jobs } from "@/data/demo";

export function generateStaticParams() {
  return jobs.map((job) => ({ jobId: job.id }));
}

export default async function EmployerJobDetailPage({
  params,
  searchParams
}: {
  params: Promise<{ jobId: string }>;
  searchParams?: Promise<{ stage?: string }>;
}) {
  const { jobId } = await params;
  const query = searchParams ? await searchParams : {};
  const job = jobs.find((item) => item.id === jobId) ?? jobs[0];
  const applicants = (jobApplicants[job.id as keyof typeof jobApplicants] ?? []).map((application) => ({
    ...application,
    candidate: candidates.find((candidate) => candidate.id === application.candidateId) ?? candidates[0]
  }));
  const selectedStage = query.stage ?? "All";
  const suggestedMatches = applicants.filter(({ candidate }) => getCandidateMatch(candidate, job).score >= 88).length;
  const shortlisted = applicants.filter((item) => item.status === "Shortlisted").length;
  const interviewing = applicants.filter((item) => item.status === "Interviewing").length;
  const visibleApplicants = applicants.filter(({ candidate, status }) => {
    if (selectedStage === "All") return true;
    if (selectedStage === "Suggested") return getCandidateMatch(candidate, job).score >= 88;
    return status === selectedStage;
  });

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
            <Link href={`/employer/jobs/${job.id}#applicants`} className="rounded-xl bg-white px-4 py-3 text-sm font-black text-viz-800">Review applicants</Link>
            <Link href={`/employer/post-job?edit=${job.id}`} className="rounded-xl border border-white/24 bg-white/10 px-4 py-3 text-sm font-black text-white">Edit job</Link>
            <a href="#share-job" className="rounded-xl border border-white/24 bg-white/10 px-4 py-3 text-sm font-black text-white">Share job</a>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {[
            ["Total applicants", String(applicants.length), UsersRound, `/employer/jobs/${job.id}?stage=All#applicants`],
            ["New applicants", String(applicants.filter((item) => item.status === "Applied").length), Star, `/employer/jobs/${job.id}?stage=Applied#applicants`],
            ["Shortlisted", String(shortlisted), CheckCircle2, `/employer/jobs/${job.id}?stage=Shortlisted#applicants`],
            ["Interviewing", String(interviewing), Video, `/employer/jobs/${job.id}?stage=Interviewing#applicants`],
            ["Suggested matches", String(suggestedMatches), BriefcaseBusiness, `/employer/jobs/${job.id}?stage=Suggested#applicants`]
          ].map(([label, value, Icon, href]) => (
            <Link key={label as string} href={href as string} className="rounded-2xl bg-white/10 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16">
              <Icon className="h-5 w-5 text-viz-200" />
              <p className="mt-3 text-2xl font-black">{value as string}</p>
              <p className="text-sm text-white/68">{label as string}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="applicants" className="mt-6 scroll-mt-24">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Job-specific review</p>
            <h2 className="text-3xl font-black text-ink">
              {selectedStage === "All" ? "Applicants for this job" : selectedStage === "Suggested" ? "Suggested matches" : `${selectedStage} applicants`}
            </h2>
          </div>
          <p className="text-sm font-bold text-slate-500">{visibleApplicants.length} candidate{visibleApplicants.length === 1 ? "" : "s"} shown for {job.title}.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {visibleApplicants.map(({ candidate, status }) => {
            const match = getCandidateMatch(candidate, job);

            return (
              <article key={candidate.id} className="group overflow-hidden rounded-2xl border border-viz-100 bg-white shadow-soft transition hover:-translate-y-1 hover:border-viz-200 hover:shadow-glow">
                <div className="relative overflow-hidden">
                  <Link href={`/employer/candidates/${candidate.id}?job=${job.id}`} aria-label={`Open ${candidate.name} video and profile`}>
                    <img src={candidate.avatar} alt={candidate.name} className="vh-candidate-thumb h-32 w-full transition duration-500 group-hover:scale-105" />
                    <span className="absolute inset-0 m-auto grid h-10 w-10 place-items-center rounded-full bg-white/94 text-viz-700 shadow-soft">
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </span>
                  </Link>
                  <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-black text-white backdrop-blur">{status}</span>
                  <span className="absolute right-2 top-2 rounded-full bg-white/94 px-2.5 py-1 text-[11px] font-black text-emerald-700">{match.score}%</span>
                </div>
                <div className="p-2.5">
                  <div className="min-w-0">
                    <h3 className="truncate font-black text-ink">{candidate.name}</h3>
                    <p className="mt-0.5 truncate text-xs font-bold text-slate-500">{candidate.desiredRole}</p>
                  </div>
                  <p className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                    <MapPin className="h-3.5 w-3.5" /> {candidate.location}
                  </p>
                  <p className="mt-2.5 line-clamp-1 text-xs font-black text-viz-700">{match.reasons[0] ?? "Strong role context"}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {candidate.topSkills.slice(0, 2).map((skill) => (
                      <span key={skill} className="rounded-full bg-viz-50 px-2.5 py-1 text-[11px] font-black text-viz-700">{skill}</span>
                    ))}
                  </div>
                  <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-viz-50 pt-2.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-black text-slate-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> {candidate.references} refs
                    </span>
                    <span className="text-[11px] font-black text-slate-500">{candidate.recommendations.length} recs</span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <Link href={`/employer/candidates/${candidate.id}?job=${job.id}`} className="inline-flex items-center text-xs font-black text-viz-700">View Profile</Link>
                    <select defaultValue={status} aria-label={`Move ${candidate.name} stage`} className="h-8 max-w-[96px] rounded-full border border-viz-100 bg-viz-50 px-2 text-[11px] font-black text-viz-700 outline-viz-500">
                      {applicantStages.map((stage) => <option key={stage}>{stage}</option>)}
                    </select>
                    <Link href={`mailto:?subject=${encodeURIComponent(`VizHire candidate: ${candidate.name}`)}&body=${encodeURIComponent(`Review ${candidate.name}: /employer/candidates/${candidate.id}?job=${job.id}`)}`} className="grid h-8 w-8 place-items-center rounded-full bg-viz-50 text-viz-700" aria-label={`Share ${candidate.name}`}>
                      <Share2 className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
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
          <JobStatusControl initialStatus={job.id === "senior-ux-researcher" ? "Paused" : "Live"} />
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">Applicant pipeline</h2>
            <div className="mt-5 space-y-3">
              {applicantStages.map((stage) => (
                <Link key={stage} href={`/employer/jobs/${job.id}?stage=${encodeURIComponent(stage)}#applicants`} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:bg-viz-50">
                  <span className="font-black text-ink">{stage}</span>
                  <span className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">
                    {applicants.filter((item) => item.status === stage).length}
                  </span>
                </Link>
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

    </AppShell>
  );
}
