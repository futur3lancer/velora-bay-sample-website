"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experiences() {
  return (
    <section id="experiences" className="bg-sand-light py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-dark">Experiences</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-charcoal md:text-4xl">
            Moments arranged around the water
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={exp.image}
                alt={exp.name}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-luxury group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="eyebrow text-gold">{exp.duration}</span>
                <h3 className="mt-2 font-display text-2xl font-light text-white">
                  {exp.name}
                </h3>
                <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 ease-luxury group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
