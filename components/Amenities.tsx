"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { amenities } from "@/lib/data";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-charcoal py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Amenities</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-white md:text-4xl">
            Everything a stay could ask for, nothing it doesn&apos;t need
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden bg-charcoal"
            >
              <Image
                src={a.image}
                alt={a.name}
                fill
                className="object-cover opacity-60 transition-all duration-700 ease-luxury group-hover:scale-110 group-hover:opacity-40"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-lg font-light text-white">
                  {a.name}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-500 ease-luxury group-hover:mt-3 group-hover:max-h-28 group-hover:opacity-100">
                  {a.description}
                </p>
              </div>

              <div className="absolute left-6 top-6 h-6 w-px bg-gold/70 transition-all duration-500 group-hover:h-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
