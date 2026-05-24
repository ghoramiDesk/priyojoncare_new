import { useState } from "react";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";
import { SITE, callLink } from "@/lib/site";

export function SosButton() {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const trigger = async () => {
    if (!user) { toast.error("Please sign in first"); return; }
    setSubmitting(true);
    const { error } = await supabase.from("sos_alerts").insert({
      user_id: user.id, message: message || "Emergency assistance needed", location: null,
    });
    setSubmitting(false);
    if (error) { toast.error(error.message); return; }
    toast.success("SOS alert sent. Our team is calling you now.");
    setMessage(""); setOpen(false);
    window.location.href = callLink;
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="gap-2 font-semibold animate-pulse">
          <AlertTriangle className="size-4" /> Emergency SOS
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2"><AlertTriangle className="text-destructive" /> Send SOS Alert</AlertDialogTitle>
          <AlertDialogDescription>
            We will be notified immediately and call you within minutes. For life-threatening emergencies, also call <a href={callLink} className="font-semibold text-primary">{SITE.phoneDisplay}</a> directly.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Textarea
          placeholder="Briefly describe the emergency (optional)…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={(e) => { e.preventDefault(); trigger(); }} disabled={submitting} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            {submitting ? <Loader2 className="size-4 animate-spin" /> : "Send SOS"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
