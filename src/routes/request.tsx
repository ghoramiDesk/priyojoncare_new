import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { zodValidator } from "@tanstack/zod-adapter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Loader2, Sparkles, Phone, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import {
  SERVICES,
  findPackage,
  formatBDT,
  unitLabel,
  unitLabelBn,
  callLink,
  whatsappLink,
  SITE,
} from "@/lib/site";
import { toast } from "sonner";

const searchSchema = z.object({
  service: z.string().optional(),
  package: z.string().optional(),
});

export const Route = createFileRoute("/request")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Request a Care Package — Priyojon Care" },
      {
        name: "description",
        content: "Submit a care request and a care advisor will call you within hours to confirm your plan.",
      },
    ],
  }),
  component: RequestPage,
});

const formSchema = z.object({
  service_type: z.string().min(1, "Select a service"),
  package_id: z.string().min(1, "Select a package"),
  patient_name: z.string().trim().min(1).max(120),
  patient_age: z.coerce.number().int().min(0).max(130).optional(),
  patient_condition: z.string().trim().min(5, "Describe the condition").max(2000),
  preferred_date: z.string().optional(),
  preferred_time: z.string().max(50).optional(),
  location: z.string().trim().min(2).max(300),
  contact_phone: z.string().trim().min(6).max(30),
  notes: z.string().max(2000).optional(),
});

function RequestPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [requestId, setRequestId] = useState<string | null>(null);
  const [serviceSlug, setServiceSlug] = useState<string>(search.service ?? "");
  const [packageId, setPackageId] = useState<string>(search.package ?? "");

  const selectedService = SERVICES.find((s) => s.slug === serviceSlug);
  const selectedPkg = packageId && packageId !== "custom" ? findPackage(packageId) : null;
  const isCustom = packageId === "custom";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please sign in to submit a request");
      navigate({ to: "/login", search: { redirect: "/request" } });
      return;
    }
    const fd = new FormData(e.currentTarget);
    const parsed = formSchema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Check the form");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from("care_requests")
      .insert({
        user_id: user.id,
        service_type: parsed.data.service_type,
        package_id: parsed.data.package_id,
        patient_name: parsed.data.patient_name,
        patient_age: parsed.data.patient_age ?? null,
        patient_condition: parsed.data.patient_condition,
        preferred_date: parsed.data.preferred_date || null,
        preferred_time: parsed.data.preferred_time ?? null,
        location: parsed.data.location,
        contact_phone: parsed.data.contact_phone,
        notes: parsed.data.notes ?? null,
      })
      .select("id")
      .single();
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setRequestId(data.id);
    toast.success("Request submitted! A care advisor will call you shortly.");
  };

  if (requestId) {
    return (
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <CheckCircle2 className="size-16 text-success mx-auto mb-6" />
        <h1 className="font-display text-3xl font-bold">Request received</h1>
        <p className="font-bangla text-muted-foreground mt-3">আপনার অনুরোধ গ্রহণ করা হয়েছে।</p>
        <p className="text-muted-foreground mt-3">
          Your request ID:{" "}
          <code className="font-mono bg-muted px-2 py-1 rounded">
            {requestId.slice(0, 8).toUpperCase()}
          </code>
        </p>
        <p className="text-muted-foreground mt-3">
          A care advisor will call you within a few hours to confirm your plan and final pricing.
        </p>
        <div className="flex gap-3 justify-center mt-7">
          <Button onClick={() => navigate({ to: "/dashboard" })}>Go to Dashboard</Button>
          <Button asChild variant="outline">
            <a href={callLink}>
              <Phone className="size-4" /> Call now
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="mb-8 max-w-2xl">
          <h1 className="font-display text-3xl lg:text-4xl font-bold">Request a Care Package</h1>
          <p className="font-bangla text-muted-foreground mt-2">
            ফর্ম পূরণ করুন — আমাদের কেয়ার অ্যাডভাইজার শীঘ্রই আপনাকে কল করবেন।
          </p>
          <p className="text-muted-foreground mt-2">
            No online payment. Final pricing is confirmed by phone after we understand your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Summary */}
          <aside className="lg:col-span-1 lg:order-2">
            <div className="sticky top-24 space-y-4">
              <Card className="border-primary/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Sparkles className="size-4 text-primary" /> Selected Plan
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  {selectedService ? (
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Service</p>
                      <p className="font-semibold">{selectedService.title}</p>
                      <p className="font-bangla text-xs text-primary">{selectedService.bangla}</p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Choose a service below.</p>
                  )}
                  {selectedPkg && (
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Package</p>
                      <p className="font-semibold">{selectedPkg.name}</p>
                      <p className="text-base font-bold tabular-nums mt-1">
                        ৳{formatBDT(selectedPkg.priceFrom)} – ৳{formatBDT(selectedPkg.priceTo)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-bangla">{unitLabelBn[selectedPkg.unit]}</span>{" "}
                        {unitLabel[selectedPkg.unit]}
                      </p>
                    </div>
                  )}
                  {isCustom && (
                    <div className="p-3 rounded-lg bg-accent text-accent-foreground text-xs">
                      <p className="font-semibold mb-1">Custom Plan</p>
                      <p className="font-bangla">পরিবার অনুযায়ী প্ল্যান সাজানো হবে।</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Prefer to talk?
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full justify-start gap-2">
                    <a href={callLink}>
                      <Phone className="size-4" /> {SITE.phoneDisplay}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full justify-start gap-2">
                    <a
                      href={whatsappLink("Hi, I'd like to talk to a Care Advisor.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" /> WhatsApp Advisor
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle>Care Request Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service_type">Service</Label>
                      <Select
                        name="service_type"
                        value={serviceSlug}
                        onValueChange={(v) => {
                          setServiceSlug(v);
                          setPackageId("");
                        }}
                        required
                      >
                        <SelectTrigger id="service_type">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s.slug} value={s.slug}>
                              {s.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="package_id">Package</Label>
                      <Select name="package_id" value={packageId} onValueChange={setPackageId} required>
                        <SelectTrigger id="package_id">
                          <SelectValue placeholder={selectedService ? "Choose a package" : "Select service first"} />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedService?.packages.map((p) => (
                            <SelectItem key={p.id} value={p.id}>
                              {p.name} — ৳{formatBDT(p.priceFrom)}+
                            </SelectItem>
                          ))}
                          <SelectItem value="custom">✨ Custom Plan (advisor designs it)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="patient_name">Name</Label>
                      <Input id="patient_name" name="patient_name" required maxLength={120} />
                    </div>
                    <div>
                      <Label htmlFor="patient_age">Age</Label>
                      <Input id="patient_age" name="patient_age" type="number" min={0} max={130} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="patient_condition">Health condition</Label>
                    <Textarea
                      id="patient_condition"
                      name="patient_condition"
                      required
                      maxLength={2000}
                      placeholder="E.g. Recently discharged after stroke, needs daily nursing and physiotherapy."
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferred_date">Preferred start date</Label>
                      <Input id="preferred_date" name="preferred_date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="preferred_time">Calling time</Label>
                      <Input
                        id="preferred_time"
                        name="preferred_time"
                        placeholder="e.g. Morning shift"
                        maxLength={50}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location / address</Label>
                    <Input
                      id="location"
                      name="location"
                      required
                      maxLength={300}
                      placeholder="House, Road, Area, Dhaka"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact_phone">Contact phone</Label>
                    <Input
                      id="contact_phone"
                      name="contact_phone"
                      required
                      maxLength={30}
                      placeholder="+8801XXXXXXXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Anything else? (optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      maxLength={2000}
                      placeholder="Budget concerns, special preferences, family context…"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-cta" disabled={loading}>
                    {loading ? <Loader2 className="size-4 animate-spin" /> : "Submit Request"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting you agree to be contacted by our care team. No payment is collected online.
                  </p>
                  {/* {!user && (
                    <p className="text-xs text-center text-muted-foreground">
                      You'll be asked to{" "}
                      <Link to="/login" className="text-primary font-medium">
                        sign in
                      </Link>{" "}
                      to track your request.
                    </p>
                  )} */}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
