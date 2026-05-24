import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Plus, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { SosButton } from "@/components/SosButton";
import { callLink, whatsappLink } from "@/lib/site";

import { findPackage, formatBDT } from "@/lib/site";

type CareRequest = {
  id: string; service_type: string; patient_name: string; status: string;
  created_at: string; assigned_caregiver_id: string | null; admin_notes: string | null;
  package_id: string | null; custom_price: number | null;
  caregivers: { full_name: string; specialization: string } | null;
};

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Priyojon Care" }] }),
  component: DashboardPage,
});

const statusColors: Record<string, string> = {
  pending: "bg-warning/20 text-warning-foreground",
  confirmed: "bg-primary/20 text-primary",
  ongoing: "bg-success/20 text-success-foreground",
  completed: "bg-muted text-muted-foreground",
  cancelled: "bg-destructive/20 text-destructive",
};

function DashboardPage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [requests, setRequests] = useState<CareRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) navigate({ to: "/login", search: { redirect: "/dashboard" } });
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase.from("care_requests")
      .select("*, caregivers(full_name, specialization)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => { setRequests((data as unknown as CareRequest[]) ?? []); setLoading(false); });
  }, [user]);

  if (authLoading || !user) return <div className="p-12 text-center text-muted-foreground">Loading…</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold">My Dashboard</h1>
          <p className="text-muted-foreground">Welcome, {user.user_metadata?.full_name ?? user.email}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <SosButton />
          <Button asChild><Link to="/request"><Plus className="size-4 mr-1" /> New Request</Link></Button>
          <Button variant="outline" onClick={() => signOut()}><LogOut className="size-4" /></Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        <a href={callLink} className="p-4 rounded-xl bg-primary text-primary-foreground flex items-center gap-3 shadow-cta">
          <Phone className="size-5" /><span className="font-semibold">Call 24/7 Careline</span>
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-whatsapp text-white flex items-center gap-3 shadow-cta">
          <MessageCircle className="size-5" /><span className="font-semibold">WhatsApp Advisor</span>
        </a>
        <Link to="/care-suggest" className="p-4 rounded-xl bg-foreground text-background flex items-center gap-3">
          <span className="font-semibold">✨ AI Care Suggestions</span>
        </Link>
      </div>

      <h2 className="font-display text-xl font-semibold mb-4">My Care Requests</h2>
      {loading ? <p className="text-muted-foreground">Loading…</p> : requests.length === 0 ? (
        <Card><CardContent className="py-12 text-center text-muted-foreground">
          No requests yet. <Link to="/request" className="text-primary font-medium">Submit your first request</Link>.
        </CardContent></Card>
      ) : (
        <div className="space-y-3">
          {requests.map((r) => {
            const pkg = r.package_id ? findPackage(r.package_id) : null;
            return (
              <Card key={r.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <CardTitle className="text-base">{r.patient_name}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {pkg ? pkg.name : r.package_id === "custom" ? "Custom Plan" : r.service_type}
                      </p>
                    </div>
                    <Badge className={statusColors[r.status] ?? ""}>{r.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-1">
                  <p>ID: <span className="font-mono">{r.id.slice(0, 8).toUpperCase()}</span> · {new Date(r.created_at).toLocaleDateString()}</p>
                  {pkg && (
                    <p className="text-foreground">
                      Indicative: <strong className="tabular-nums">৳{formatBDT(pkg.priceFrom)}–৳{formatBDT(pkg.priceTo)}</strong> / {pkg.unit}
                    </p>
                  )}
                  {r.custom_price != null && (
                    <p className="text-success-foreground bg-success/10 px-2 py-1 rounded inline-block">
                      Confirmed price: <strong className="tabular-nums">৳{formatBDT(r.custom_price)}</strong>
                    </p>
                  )}
                  {r.caregivers && <p className="text-foreground">Caregiver: <strong>{r.caregivers.full_name}</strong> ({r.caregivers.specialization})</p>}
                  {r.admin_notes && <p className="bg-muted p-2 rounded mt-2 text-foreground">Note: {r.admin_notes}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
