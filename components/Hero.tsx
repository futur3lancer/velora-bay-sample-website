"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const imgWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!imgWrap.current) return;

    // GSAP-driven cinematic parallax: the aerial shot drifts and slowly
    // zooms as the guest scrolls past the hero.
    const setY = gsap.quickTo(imgWrap.current, "y", {
      duration: 0.6,
      ease: "power2.out",
    });

    const onScroll = () => setY(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });

    gsap.fromTo(
      imgWrap.current,
      { scale: 1.18 },
      { scale: 1.08, duration: 2.4, ease: "power2.out" }
    );

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      <div ref={imgWrap} className="absolute inset-0 scale-110">
        <Image
          src="/images/aerial-resort.jpg"
          alt="Aerial view of Velora Bay Resort's turquoise waters and private beach"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/50" />

      {/* animated wave overlay */}
      <svg
        className="absolute bottom-0 left-0 w-full text-white/[0.06]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,110 480,10 720,48 C960,86 1200,20 1440,56 L1440,120 L0,120 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,64 C240,110 480,10 720,48 C960,86 1200,20 1440,56 L1440,120 L0,120 Z;
              M0,50 C240,20 480,100 720,60 C960,20 1200,90 1440,40 L1440,120 L0,120 Z;
              M0,64 C240,110 480,10 720,48 C960,86 1200,20 1440,56 L1440,120 L0,120 Z"
          />
        </path>
      </svg>

      <div className="relative z-10 flex h-full flex-col justify-end pb-32 md:pb-24">
        <div className="container-luxury">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow mb-6 text-sand"
          >
            Velora Bay Resort &amp; Spa — A Private Tropical Bay
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-balance font-display text-4xl font-light leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Experience Paradise Beyond Expectations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-lg text-balance font-light leading-relaxed text-white/85"
          >
            Luxury beachfront accommodations, unforgettable sunsets, and
            exceptional island experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#booking"
              className="bg-gold px-8 py-3.5 text-sm tracking-wide text-charcoal transition-transform duration-300 hover:scale-[1.03] hover:bg-gold-light"
            >
              Reserve Your Stay
            </a>
            <a
              href="#experiences"
              className="border border-white/50 px-8 py-3.5 text-sm tracking-wide text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              Explore Experiences
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="animate-driftSlow" size={26} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
