import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { adminStats, candidates } from "@/data/demo";

export default function AdminDashboardPage() {
  return (
    <AppShell role="admin" title="Platform Admin Dashboard" subtitle="Moderation, analytics, subscriptions, and platform health.">
      <div className="space-y-6">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {adminStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="glass rounded-2xl p-6">
                <Icon className="h-7 w-7 text-viz-600" />
                <p className="mt-4 text-sm font-bold text-slate-500">{stat.label}</p>
                <p className="mt-2 text-4xl font-black text-ink">{stat.value}</p>
              </div>
            );
          })}
        </section>
        <section className="grid gap-6 xl:grid-cols-2">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">Candidate moderation</h2>
            <div className="mt-5 space-y-3">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-soft">
                  <div className="flex items-center gap-3">
                    <img src={candidate.avatar} alt={candidate.name} className="h-12 w-12 rounded-2xl object-cover" />
                    <div>
                      <p className="font-black text-ink">{candidate.name}</p>
                      <p className="text-sm text-slate-500">Profile completeness 92%</p>
                    </div>
                  </div>
                  <Link href={`/employer/candidates/${candidate.id}`} className="rounded-xl border border-viz-200 px-4 py-2 text-sm font-black text-viz-700">Review</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-black text-ink">Subscription management</h2>
            <div className="mt-5 space-y-3">
              {["Northstar Health", "BrightLedger", "CareNest", "GW International"].map((company, index) => (
                <div key={company} className="rounded-2xl bg-white p-4 shadow-soft">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-ink">{company}</p>
                    <span className="rounded-full bg-viz-50 px-3 py-1 text-xs font-black text-viz-700">{index === 0 ? "Growth" : "Starter"}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">Stripe-ready billing status · active</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
