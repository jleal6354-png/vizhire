import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, Sparkles } from "lucide-react";
import { candidates, jobApplicants, pipelineStages } from "@/data/demo";
import { AppShell } from "@/components/app-shell";

export default async function ApplicantTrackingPage({ searchParams }: { searchParams?: Promise<{ stage?: string }> }) {
  const query = searchParams ? await searchParams : {};
  const selectedStage = pipelineStages.find((stage) => stage.name === query.stage)?.name ?? "Applied";
  const allApplications = Object.entries(jobApplicants).flatMap(([jobId, applications]) =>
    applications.map((application) => ({
      ...application,
      jobId,
      candidate: candidates.find((candidate) => candidate.id === application.candidateId) ?? candidates[0]
    }))
  );
  const stageCandidates = allApplications.filter((application) => application.status === selectedStage);
  const fallbackCandidates = candidates.slice(0, 4).map((candidate) => ({ candidate, status: selectedStage, jobId: "growth-marketing-manager" }));
  const visibleCandidates = stageCandidates.length > 0 ? stageCandidates : fallbackCandidates;

  return (
    <AppShell title="Candidate Pipeline" subtitle="Move candidates through your hiring process with confidence.">
      <div className="space-y-6">
        <section className="glass rounded-3xl p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Candidate Pipeline</p>
              <h1 className="mt-2 text-3xl font-black text-ink">Move candidates through your hiring process with confidence.</h1>
              <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                Select a stage to see exactly who is there, then review, share, or move candidates forward.
              </p>
            </div>
            <Link href="/employer/jobs/growth-marketing-manager/review" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-viz-700 px-5 font-black text-white shadow-glow">
              Review candidates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {pipelineStages.map((stage) => (
              <Link
                key={stage.name}
                href={`/employer/applicant-tracking?stage=${encodeURIComponent(stage.name)}`}
                className={`rounded-full px-4 py-2 text-xs font-black transition ${
                  selectedStage === stage.name ? "bg-viz-700 text-white shadow-glow" : "bg-viz-50 text-viz-700 hover:bg-viz-100"
                }`}
              >
                {stage.name}: {stage.count}
              </Link>
            ))}
          </div>
        </section>

        <section className="glass rounded-3xl p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-viz-600">Stage view</p>
              <h2 className="mt-2 text-2xl font-black text-ink">{selectedStage} candidates</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">A visual look at who is currently inside this stage.</p>
            </div>
            <Link href="/employer/jobs/growth-marketing-manager/review" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-viz-700 px-4 text-sm font-black text-white">
              Review selected stage <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {visibleCandidates.map(({ candidate, status, jobId }) => (
              <Link key={`${selectedStage}-${candidate.id}-${jobId}`} href={`/employer/candidates/${candidate.id}?job=${jobId}`} className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <div className="relative">
                  <img src={candidate.video} alt={`${candidate.name} video preview`} className="h-44 w-full object-cover transition group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-black text-white backdrop-blur">{status}</span>
                  <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black text-emerald-700">{candidate.match}%</span>
                  <span className="absolute inset-0 m-auto grid h-11 w-11 place-items-center rounded-full bg-white/94 text-viz-700 shadow-soft">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-black text-ink">{candidate.name}</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">{candidate.title}</p>
                  <div className="mt-4 space-y-2">
                    <p className="inline-flex items-center gap-2 text-xs font-black text-viz-700">
                      <Sparkles className="h-4 w-4" /> Video intro complete
                    </p>
                    <p className="inline-flex items-center gap-2 text-xs font-black text-viz-700">
                      <ShieldCheck className="h-4 w-4" /> {candidate.references} references
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
