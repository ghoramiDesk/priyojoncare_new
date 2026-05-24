import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Sparkles, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroSlider, HERO_IMAGES } from "@/components/HeroSlider";

export const Route = createFileRoute("/care-suggest")({
  head: () => ({ meta: [{ title: "AI Care Advisor — Priyojon Care" }, { name: "description", content: "Describe your loved one's situation and get instant care suggestions powered by AI. Not a substitute for medical advice." }] }),
  component: CareSuggestPage,
});

function CareSuggestPage() {
  const [desc, setDesc] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (desc.trim().length < 10) { setError("Please describe the situation in a bit more detail."); return; }
    setError(null); setResponse(""); setLoading(true);

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/care-suggest`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ description: desc }),
      });

      if (!resp.ok) {
        if (resp.status === 429) throw new Error("Too many requests. Please wait a moment.");
        if (resp.status === 402) throw new Error("AI credits exhausted. Please contact support.");
        throw new Error("AI service error");
      }
      if (!resp.body) throw new Error("No response stream");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let done = false;
      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });
        let idx;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx); buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") { done = true; break; }
          try {
            const parsed = JSON.parse(json);
            const c = parsed.choices?.[0]?.delta?.content;
            if (c) setResponse((r) => r + c);
          } catch { buf = line + "\n" + buf; break; }
        }
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-surface">
        <HeroSlider images={HERO_IMAGES.careSuggest} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="size-7 text-primary" />
            <h1 className="font-display text-3xl lg:text-4xl font-bold">AI Care Advisor</h1>
          </div>
          <p className="text-muted-foreground">Describe your loved one's situation and get personalized suggestions instantly. <strong>Not a substitute for medical diagnosis.</strong></p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 lg:py-14">

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <Textarea
          rows={5} maxLength={2000} value={desc} onChange={(e) => setDesc(e.target.value)}
          placeholder="E.g. My 78-year-old father had a mild stroke 2 weeks ago. He's home now, has trouble walking, and sometimes forgets recent events. We need help with daily routines and exercises."
          className="text-base"
        />
        <Button type="submit" size="lg" disabled={loading || desc.length < 10}>
          {loading ? <><Loader2 className="size-4 animate-spin mr-2" />Thinking…</> : <><Sparkles className="size-4 mr-2" />Get Suggestions</>}
        </Button>
      </form>

      {error && <div className="mt-6 p-4 rounded-lg bg-destructive/10 text-destructive flex gap-2"><AlertTriangle className="size-5 shrink-0" /><span>{error}</span></div>}

      {response && (
        <Card className="mt-8">
          <CardHeader><CardTitle className="flex items-center gap-2"><Sparkles className="size-5 text-primary" /> Care Suggestions</CardTitle></CardHeader>
          <CardContent>
            <div className="prose prose-zinc max-w-none"><ReactMarkdown>{response}</ReactMarkdown></div>
          </CardContent>
        </Card>
      )}
      </div>
    </div>
  );
}
