import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";
import { ShieldAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { findPackage, formatBDT } from "@/lib/site";

type Req = {
  id: string; service_type: string; patient_name: string; patient_age: number | null;
  patient_condition: string; location: string; contact_phone: string; status: string;
  assigned_caregiver_id: string | null; admin_notes: string | null; created_at: string;
  package_id: string | null; custom_price: number | null;
};
type Caregiver = { id: string; full_name: string; specialization: string };

const STATUSES = ["pending", "confirmed", "ongoing", "completed", "cancelled"];

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Panel — Priyojon Care" }] }),
  component: AdminPanel,
});

function AdminPanel() {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [requests, setRequests] = useState<Req[]>([]);
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user) navigate({ to: "/login", search: { redirect: "/admin" } });
  }, [user, loading, navigate]);

  const load = async () => {
    const [{ data: r }, { data: c }] = await Promise.all([
      supabase.from("care_requests").select("*").order("created_at", { ascending: false }),
      supabase.from("caregivers").select("id,full_name,specialization").order("full_name"),
    ]);
    setRequests((r as Req[]) ?? []);
    setCaregivers((c as Caregiver[]) ?? []);
  };

  useEffect(() => { if (isAdmin) load(); }, [isAdmin]);

  if (loading) return <div className="p-12 text-center">Loading…</div>;
  if (!isAdmin) return (
    <div className="max-w-md mx-auto p-12 text-center">
      <ShieldAlert className="size-12 text-destructive mx-auto mb-4" />
      <h1 className="font-display text-2xl font-bold">Admin access required</h1>
      <p className="text-muted-foreground mt-2 text-sm">Your account does not have admin privileges.</p>
      <p className="text-xs text-muted-foreground mt-4">To grant admin access, run this in the Cloud SQL editor:<br />
        <code className="block bg-muted p-2 rounded mt-1 text-left">INSERT INTO user_roles (user_id, role) VALUES ('{user?.id ?? "YOUR_USER_ID"}', 'admin');</code>
      </p>
    </div>
  );

  const updateRequest = async (id: string, patch: Record<string, unknown>) => {
    setBusy(true);
    const { error } = await supabase.from("care_requests").update(patch as never).eq("id", id);
    setBusy(false);
    if (error) toast.error(error.message);
    else { toast.success("Updated"); load(); }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-display text-3xl font-bold mb-2">Admin Panel</h1>
      <p className="text-muted-foreground mb-8">Review care requests and assign caregivers.</p>

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {STATUSES.slice(0, 3).map((s) => (
          <Card key={s}>
            <CardContent className="p-4">
              <p className="text-xs uppercase text-muted-foreground tracking-wider">{s}</p>
              <p className="text-3xl font-bold tabular-nums">{requests.filter((r) => r.status === s).length}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        {requests.length === 0 ? <p className="text-muted-foreground">No care requests yet.</p> : requests.map((r) => {
          const pkg = r.package_id ? findPackage(r.package_id) : null;
          return (<Card key={r.id}>
            <CardHeader className="pb-3">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <CardTitle className="text-base">{r.patient_name}{r.patient_age ? `, ${r.patient_age}` : ""} — {r.service_type}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">ID {r.id.slice(0,8).toUpperCase()} · {new Date(r.created_at).toLocaleString()} · {r.contact_phone}</p>
                  <p className="text-xs mt-1">
                    Plan: <strong>{pkg ? pkg.name : r.package_id === "custom" ? "Custom Plan" : "—"}</strong>
                    {pkg && <span className="text-muted-foreground"> · ৳{formatBDT(pkg.priceFrom)}–৳{formatBDT(pkg.priceTo)}/{pkg.unit}</span>}
                  </p>
                </div>
                <Badge>{r.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p><strong>Condition:</strong> {r.patient_condition}</p>
              <p><strong>Location:</strong> {r.location}</p>
              <div className="grid sm:grid-cols-3 gap-3 pt-3 border-t border-border">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Confirmed price (BDT)</label>
                  <Input
                    type="number"
                    defaultValue={r.custom_price ?? ""}
                    placeholder="e.g. 55000"
                    onBlur={(e) => {
                      const v = e.target.value === "" ? null : parseInt(e.target.value, 10);
                      if (v !== (r.custom_price ?? null)) updateRequest(r.id, { custom_price: v });
                    }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</label>
                  <Select value={r.status} onValueChange={(v) => updateRequest(r.id, { status: v as Req["status"] })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Assigned caregiver</label>
                  <Select value={r.assigned_caregiver_id ?? ""} onValueChange={(v) => updateRequest(r.id, { assigned_caregiver_id: v || null })}>
                    <SelectTrigger><SelectValue placeholder="None" /></SelectTrigger>
                    <SelectContent>{caregivers.map((c) => <SelectItem key={c.id} value={c.id}>{c.full_name} — {c.specialization}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Admin note</label>
                <Textarea defaultValue={r.admin_notes ?? ""} onBlur={(e) => { if (e.target.value !== (r.admin_notes ?? "")) updateRequest(r.id, { admin_notes: e.target.value }); }} placeholder="Note visible to the family" />
              </div>
            </CardContent>
          </Card>
          );
        })}
      </div>
      {busy && <p className="text-xs text-muted-foreground mt-4">Saving…</p>}
    </div>
  );
}
