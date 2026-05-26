import Link from "next/link";
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Edit3,
  FileText,
  Home,
  Link2,
  LogOut,
  MessageCircle,
  Search,
  Settings,
  ShieldCheck,
  UsersRound
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

type AppRole = "candidate" | "employer" | "admin";

const employerNav = [
  { href: "/employer/dashboard", label: "Dashboard", icon: Home },
  { href: "/employer/candidates", label: "Browse Candidates", icon: UsersRound },
  { href: "/employer/post-job", label: "Post Job", icon: BriefcaseBusiness },
  { href: "/employer/applicant-tracking", label: "Applicants", icon: FileText }
];

const candidateNav = [
  { href: "/candidate/dashboard", label: "Dashboard", icon: Home },
  { href: "/candidate/edit", label: "Edit Profile", icon: Edit3 },
  { href: "/candidate/jobs", label: "Jobs", icon: BriefcaseBusiness },
  { href: "/profile/maya-johnson", label: "Share Profile", icon: Link2 }
];

const adminNav = [
  { href: "/admin", label: "Platform Admin", icon: ShieldCheck },
  { href: "/admin#users", label: "Users", icon: UsersRound },
  { href: "/admin#reports", label: "Reports", icon: MessageCircle },
  { href: "/admin#metrics", label: "Metrics", icon: BarChart3 }
];

export function AppShell({
  children,
  title = "Dashboard",
  subtitle = "See the real person sooner.",
  role = "employer"
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  role?: AppRole;
}) {
  const nav = role === "candidate" ? candidateNav : role === "admin" ? adminNav : employerNav;
  const upgradeCopy =
    role === "candidate"
      ? {
          title: "Stand out beyond the resume",
          text: "Create your VizHire profile for free and share it before an opportunity passes.",
          cta: "Edit Profile",
          href: "/candidate/edit"
        }
      : {
          title: "Try VizHire free",
          text: "Post your first job free for 30 days and find candidates beyond the resume.",
          cta: "Post a Job",
          href: "/employer/post-job"
        };

  return (
    <div className="min-h-screen bg-[#fbfafc]">
      <aside className="fixed bottom-0 left-0 right-0 z-30 border-t border-viz-100 bg-white/95 p-2 backdrop-blur xl:bottom-auto xl:right-auto xl:top-0 xl:h-screen xl:w-64 xl:border-r xl:border-t-0 xl:p-5">
        <div className="hidden xl:block">
          <BrandLogo />
        </div>
        <nav className="mt-0 flex justify-around gap-1 xl:mt-10 xl:block xl:space-y-2">
          {nav.slice(0, 6).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-12 min-w-12 flex-col items-center justify-center gap-1 rounded-xl px-2 text-[10px] font-black text-slate-600 transition hover:bg-viz-50 hover:text-viz-700 sm:text-xs xl:flex-row xl:justify-start xl:gap-3 xl:px-3 xl:text-sm xl:font-bold"
              >
                <Icon className="h-5 w-5" />
                <span className="max-w-16 truncate xl:max-w-none">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 hidden rounded-2xl bg-viz-50 p-4 xl:block">
          <p className="font-black text-ink">{upgradeCopy.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{upgradeCopy.text}</p>
          <Link href={upgradeCopy.href} className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-viz-700 px-4 py-3 text-sm font-black text-white">
            {upgradeCopy.cta}
          </Link>
        </div>
        <Link href="/" className="mt-4 hidden items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-red-500 xl:flex">
          <LogOut className="h-5 w-5" />
          Log out
        </Link>
      </aside>

      <main className="pb-28 xl:ml-64 xl:pb-0">
        <header className="sticky top-0 z-20 border-b border-viz-100 bg-white/88 px-4 py-4 backdrop-blur lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-3 xl:hidden">
                <BrandLogo compact />
                <div className="min-w-0">
                  <h1 className="truncate text-lg font-black text-ink">{title}</h1>
                  <p className="truncate text-xs font-bold text-slate-500">{subtitle}</p>
                </div>
              </div>
              <h1 className="hidden text-2xl font-black text-ink xl:block">{title}</h1>
              <p className="hidden text-sm text-slate-500 xl:block">{subtitle}</p>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <label className="hidden max-w-lg flex-1 items-center gap-3 rounded-2xl border border-viz-100 bg-white px-4 py-3 shadow-soft md:flex">
                <Search className="h-5 w-5 text-slate-400" />
                <input className="w-full border-0 bg-transparent text-sm outline-none" placeholder={role === "candidate" ? "Search jobs, applications, or profile sections..." : "Search candidates, jobs, or notes..."} />
              </label>
              <button className="relative rounded-full border border-viz-100 bg-white p-3 shadow-soft" aria-label="Notifications">
                <Bell className="h-5 w-5 text-ink" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-viz-600" />
              </button>
              <div className="hidden items-center gap-3 rounded-full bg-viz-50 py-1 pl-1 pr-4 md:flex">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=120&q=80" alt="Sarah Mitchell" className="h-9 w-9 rounded-full object-cover" />
                <span className="text-sm font-black text-ink">{role === "candidate" ? "Maya" : role === "admin" ? "Admin" : "Sarah"}</span>
              </div>
            </div>
          </div>
        </header>
        <div className="p-4 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
