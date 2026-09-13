"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-ocean py-24 md:py-32">
      <div className="container-luxury">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Guest Stories</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-white md:text-4xl">
            Words from those who have stayed
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <Quote className="text-gold" size={32} strokeWidth={1} />

              <p className="mt-6 text-balance font-display text-xl font-light leading-relaxed text-white sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-7 flex items-center gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <p className="mt-4 text-sm text-white/90">{t.name}</p>
              <p className="text-xs text-white/55">{t.origin}</p>

              {t.hasVideo && (
                <button className="mt-5 flex items-center gap-2 border border-white/30 px-5 py-2 text-xs tracking-wide text-white/85 transition-colors hover:border-gold hover:text-gold">
                  <Play size={12} fill="currentColor" strokeWidth={0} />
                  Watch video testimonial
                </button>
              )}
            </motion.div>
          </AnimatePresence>

          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 hidden -translate-x-14 -translate-y-1/2 text-white/50 hover:text-white sm:block"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-14 text-white/50 hover:text-white sm:block"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>

          <div className="mt-12 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-gold" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
