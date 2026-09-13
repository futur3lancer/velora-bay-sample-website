"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Maximize2 } from "lucide-react";
import { rooms } from "@/lib/data";

export default function Accommodations() {
  return (
    <section id="accommodations" className="bg-sand-light py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-dark">Accommodations</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-charcoal md:text-4xl">
            Five residences, one shared view of the water
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room, i) => (
            <motion.article
              key={room.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute right-4 top-4 bg-white/95 px-3 py-1.5 text-sm text-ocean">
                  ₱{room.price.toLocaleString()} / night
                </div>
              </div>

              <div className="flex flex-1 flex-col border border-t-0 border-charcoal/10 p-6">
                <h3 className="font-display text-xl font-light text-charcoal">
                  {room.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  {room.description}
                </p>

                <div className="mt-4 flex items-center gap-5 text-xs text-charcoal/55">
                  <span className="flex items-center gap-1.5">
                    <Users size={14} strokeWidth={1.5} /> {room.capacity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize2 size={14} strokeWidth={1.5} /> {room.size}
                  </span>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {room.amenities.map((a) => (
                    <li
                      key={a}
                      className="border border-charcoal/15 px-2.5 py-1 text-[11px] text-charcoal/60"
                    >
                      {a}
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className="mt-6 inline-block border border-ocean px-6 py-2.5 text-center text-sm tracking-wide text-ocean transition-colors duration-300 hover:bg-ocean hover:text-white"
                >
                  Book Now
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
