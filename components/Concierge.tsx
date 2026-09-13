"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Send } from "lucide-react";
import { conciergeScript } from "@/lib/data";

const capabilities = [
  "Answering guest inquiries, day or night",
  "Personalized room recommendations",
  "Booking and itinerary assistance",
  "Resort information on request",
  "Activity and dining recommendations",
];

export default function Concierge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleCount, setVisibleCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!inView) return;
    if (visibleCount >= conciergeScript.length) return;
    const delay = visibleCount === 0 ? 500 : 1400;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [inView, visibleCount]);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-luxury grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col justify-center">
          <p className="eyebrow text-gold-dark">AI Resort Concierge</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-charcoal md:text-4xl">
            A concierge who never sleeps
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-charcoal/70">
            Available around the clock across the site and in-room tablets,
            the Velora Bay concierge handles requests instantly and hands off
            to our human team whenever a personal touch is called for.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-charcoal/70">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div ref={ref} className="relative">
          <div className="border border-charcoal/10 bg-sand-light shadow-[0_30px_60px_-30px_rgba(15,76,129,0.25)]">
            <div className="flex items-center gap-3 border-b border-charcoal/10 bg-ocean px-6 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Sparkles size={16} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Velora Concierge</p>
                <p className="text-xs text-white/70">Typically replies instantly</p>
              </div>
            </div>

            <div className="flex h-[380px] flex-col gap-4 overflow-y-auto p-6">
              {conciergeScript.slice(0, visibleCount).map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`max-w-[85%] rounded-sm px-4 py-3 text-sm leading-relaxed ${
                    m.role === "guest"
                      ? "self-end bg-ocean text-white"
                      : "self-start border border-charcoal/10 bg-white text-charcoal/80"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}

              {visibleCount < conciergeScript.length && visibleCount > 0 && (
                <div className="flex items-center gap-1 self-start px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-charcoal/40" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-charcoal/40 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-charcoal/40 [animation-delay:300ms]" />
                </div>
              )}
            </div>

            <form
              className="flex items-center gap-3 border-t border-charcoal/10 p-4"
              onSubmit={(e) => {
                e.preventDefault();
                setInput("");
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about rooms, dining, or activities…"
                className="flex-1 border border-charcoal/15 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-ocean focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 items-center justify-center bg-ocean text-white transition-colors hover:bg-ocean-dark"
              >
                <Send size={16} strokeWidth={1.5} />
              </button>
            </form>
          </div>
          <p className="mt-3 text-center text-xs text-charcoal/40">
            Demonstration conversation shown for illustration.
          </p>
        </div>
      </div>
    </section>
  );
}
