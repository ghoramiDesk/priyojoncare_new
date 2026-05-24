import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type Role = "admin" | "care_advisor" | "user";

interface AuthCtx {
  session: Session | null;
  user: User | null;
  roles: Role[];
  loading: boolean;
  isAdmin: boolean;
  signOut: () => Promise<void>;
  refreshRoles: () => Promise<void>;
}

const Ctx = createContext<AuthCtx | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);

  const loadRoles = async (userId: string | undefined) => {
    if (!userId) { setRoles([]); return; }
    const { data } = await supabase.from("user_roles").select("role").eq("user_id", userId);
    setRoles((data?.map((r) => r.role as Role)) ?? []);
  };

  useEffect(() => {
    // Set up listener FIRST
    const { data: sub } = supabase.auth.onAuthStateChange((_evt, s) => {
      setSession(s);
      // Defer DB call to avoid deadlock
      setTimeout(() => loadRoles(s?.user?.id), 0);
    });

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      loadRoles(data.session?.user?.id).finally(() => setLoading(false));
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const value: AuthCtx = {
    session,
    user: session?.user ?? null,
    roles,
    loading,
    isAdmin: roles.includes("admin"),
    signOut: async () => { await supabase.auth.signOut(); },
    refreshRoles: () => loadRoles(session?.user?.id),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

const FALLBACK_AUTH: AuthCtx = {
  session: null,
  user: null,
  roles: [],
  loading: false,
  isAdmin: false,
  signOut: async () => {},
  refreshRoles: async () => {},
};

const warnedRoutes = new Set<string>();

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (!warnedRoutes.has(path)) {
        warnedRoutes.add(path);
        // eslint-disable-next-line no-console
        console.warn(
          `[auth] useAuth() called without <AuthProvider> on route "${path}".\n` +
          `→ Falling back to unauthenticated state.\n` +
          `→ Fix: wrap <Outlet /> with <AuthProvider> in src/routes/__root.tsx (RootComponent),\n` +
          `   or wrap the specific layout route that owns this page.`
        );
      }
    }
    return FALLBACK_AUTH;
  }
  return c;
}
