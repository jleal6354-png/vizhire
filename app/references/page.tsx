import { MessageCircle, Play, Star, UsersRound } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ComingSoonButton } from "@/components/coming-soon";
import { candidates } from "@/data/demo";

export default function ReferencesPage() {
  return (
    <AppShell title="References & Recommendations" subtitle="Human proof beside every profile.">
      <div className="grid gap-6 lg:grid-cols-[0.7fr_0.3fr]">
        <section className="glass rounded-3xl p-5 sm:p-8">
          <h2 className="text-3xl font-black text-ink">Trust that travels with the candidate.</h2>
          <p className="mt-3 max-w-2xl leading-8 text-slate-600">Collect written recommendations and video references from managers, colleagues, mentors, and clients. Employers see social proof in the same place they review the candidate story.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {candidates.slice(0, 4).map((candidate) => (
              <article key={candidate.id} className="rounded-2xl bg-white p-5 shadow-soft">
                <div className="flex items-center gap-4">
                  <img src={candidate.avatar} alt={candidate.name} className="h-14 w-14 rounded-2xl object-cover" />
                  <div>
                    <h3 className="font-black text-ink">{candidate.name}</h3>
                    <p className="text-sm text-slate-500">{candidate.references} references</p>
                  </div>
                </div>
                <blockquote className="mt-5 rounded-2xl bg-viz-50 p-4 text-sm leading-6 text-slate-700">
                  “{candidate.recommendations[0]}”
                </blockquote>
                <ComingSoonButton className="mt-4 inline-flex items-center gap-2 rounded-xl border border-viz-200 px-4 py-3 text-sm font-black text-viz-700" title="Video reference" message="Video reference playback is coming soon. Written recommendations are visible in this prototype.">
                  <Play className="h-4 w-4 fill-current" /> Watch video reference
                </ComingSoonButton>
              </article>
            ))}
          </div>
        </section>
        <aside className="space-y-5">
          {[
            ["Written recommendations", "Structured endorsements from people who know the candidate’s work.", Star],
            ["Video references", "Short clips that show credibility and context.", Play],
            ["Relationship map", "Future-ready structure for verified reference networks.", UsersRound],
            ["Moderation queue", "Admin review for reported or suspicious content.", MessageCircle]
          ].map(([title, text, Icon]) => (
            <div key={title as string} className="glass rounded-2xl p-5">
              <Icon className="h-7 w-7 text-viz-600" />
              <p className="mt-4 font-black text-ink">{title as string}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p>
            </div>
          ))}
        </aside>
      </div>
    </AppShell>
  );
}
