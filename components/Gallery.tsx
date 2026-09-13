"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, GalleryItem } from "@/lib/data";

const categories: Array<GalleryItem["category"] | "All"> = [
  "All",
  "Villas",
  "Pool",
  "Dining",
  "Beach",
];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter]
  );

  const openAt = (idx: number) => setActiveIndex(idx);
  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );

  return (
    <section id="gallery" className="bg-white py-24 md:py-32">
      <div className="container-luxury">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-dark">Gallery</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-charcoal md:text-4xl">
              A closer look at Velora Bay
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-xs tracking-wide transition-colors ${
                  filter === c
                    ? "bg-ocean text-white"
                    : "border border-charcoal/15 text-charcoal/60 hover:border-ocean hover:text-ocean"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {filtered.map((item, idx) => (
            <motion.button
              layout
              key={item.src + item.category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => openAt(idx)}
              className="group relative mb-4 block w-full overflow-hidden text-left"
            >
              <Image
                src={item.src}
                alt={item.caption}
                width={700}
                height={idx % 3 === 0 ? 900 : 500}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/20" />
              <p className="absolute bottom-4 left-4 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                {item.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-charcoal/95 p-4 md:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button
              aria-label="Close gallery"
              onClick={close}
              className="absolute right-5 top-5 text-white/80 hover:text-white"
            >
              <X size={30} strokeWidth={1.2} />
            </button>

            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white md:left-8"
            >
              <ChevronLeft size={36} strokeWidth={1} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[80vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={filtered[activeIndex].src}
                  alt={filtered[activeIndex].caption}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <p className="mt-4 text-center text-sm text-white/80">
                {filtered[activeIndex].caption}
              </p>
            </motion.div>

            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white md:right-8"
            >
              <ChevronRight size={36} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
