import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { callLink, whatsappLink } from "@/lib/site";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-2 fade-in">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-whatsapp text-white px-5 py-3 rounded-full shadow-elegant font-medium text-sm hover:scale-105 transition-transform"
          >
            <MessageCircle className="size-5" /> WhatsApp Advisor
          </a>
          <a
            href={callLink}
            className="flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-elegant font-medium text-sm hover:scale-105 transition-transform"
          >
            <Phone className="size-5" /> Call 24/7
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="size-14 rounded-full bg-foreground text-background shadow-elegant flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Contact options"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  );
}
