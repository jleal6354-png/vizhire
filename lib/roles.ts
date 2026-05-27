import type { AuthRole } from "@/lib/supabase";

export const demoSession = {
  candidate: { role: "candidate" as AuthRole, dashboard: "/candidate/dashboard" },
  employer: { role: "employer" as AuthRole, dashboard: "/employer/dashboard" },
  admin: { role: "admin" as AuthRole, dashboard: "/admin" }
};

export function canAccessAdmin(role: AuthRole) {
  return role === "admin";
}
