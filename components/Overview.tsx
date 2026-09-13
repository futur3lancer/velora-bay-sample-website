"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { value: 42, suffix: "", label: "Private Villas & Suites" },
  { value: 0.5, suffix: " km", label: "Of Secluded Shoreline" },
  { value: 98, suffix: "%", label: "Guests Who Return" },
  { value: 12, suffix: "", label: "Years of Island Hospitality" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(value < 1 ? v.toFixed(1) : Math.round(v).toString());
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-light text-ocean md:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Overview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-luxury grid gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden"
        >
          <Image
            src="/images/villas-tropical.jpg"
            alt="Villas set among the palms at Velora Bay"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </motion.div>

        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-gold-dark"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-xl text-balance font-display text-3xl font-light leading-tight text-charcoal md:text-4xl"
          >
            A quiet stretch of coastline, shaped into a sanctuary
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-lg leading-relaxed text-charcoal/70"
          >
            Velora Bay was built around a single idea: that true luxury is
            space, silence, and the sea. Every villa faces the water. Every
            pathway winds instead of cutting straight. Local craftsmen shaped
            the timber and stone by hand, so the resort feels less like it
            was constructed and more like it grew from the shoreline itself.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-lg leading-relaxed text-charcoal/70"
          >
            Twelve years since opening, the promise remains unchanged: a
            place where a handful of guests, at any given time, have an
            entire bay to themselves.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-charcoal/10 pt-10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-sm leading-snug text-charcoal/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
