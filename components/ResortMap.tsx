"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { mapZones } from "@/lib/data";

export default function ResortMap() {
  const [active, setActive] = useState(mapZones[0].id);
  const zone = mapZones.find((z) => z.id === active)!;

  return (
    <section id="map" className="bg-sand-light py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-dark">Resort Map</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-charcoal md:text-4xl">
            Find your way around the bay
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-charcoal/10">
            <Image
              src="/images/aerial-resort.jpg"
              alt="Aerial map of Velora Bay Resort"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 65vw, 100vw"
            />
            <div className="absolute inset-0 bg-charcoal/25" />

            {mapZones.map((z) => (
              <button
                key={z.id}
                onClick={() => setActive(z.id)}
                style={{ left: `${z.x}%`, top: `${z.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                aria-label={z.name}
              >
                <span className="relative flex h-4 w-4 items-center justify-center">
                  {active === z.id && (
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-gold/70" />
                  )}
                  <span
                    className={`relative h-3 w-3 rounded-full border-2 transition-colors ${
                      active === z.id
                        ? "border-gold bg-gold"
                        : "border-white bg-ocean"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {mapZones.map((z) => (
              <button
                key={z.id}
                onClick={() => setActive(z.id)}
                className={`border-l-2 px-5 py-4 text-left transition-colors ${
                  active === z.id
                    ? "border-gold bg-white"
                    : "border-transparent hover:bg-white/60"
                }`}
              >
                <p
                  className={`text-sm font-medium ${
                    active === z.id ? "text-ocean" : "text-charcoal/80"
                  }`}
                >
                  {z.name}
                </p>
                {active === z.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-1.5 text-sm leading-relaxed text-charcoal/60"
                  >
                    {zone.description}
                  </motion.p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
