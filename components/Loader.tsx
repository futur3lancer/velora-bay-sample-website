"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

export default function Loader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const lockedRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setHidden(true);
      onDone();
      return;
    }

    lockScroll();
    lockedRef.current = true;

    const release = () => {
      if (!lockedRef.current) return;
      lockedRef.current = false;
      unlockScroll();
    };

    const tl = gsap.timeline({
      onComplete: () => {
        window.clearTimeout(safety);
        release();
        setHidden(true);
        onDone();
      },
    });

    // Safety net: if the animation never completes (e.g. the tab was
    // backgrounded on mobile while the page loaded, which pauses
    // requestAnimationFrame and stalls GSAP), force the intro to finish
    // instead of leaving the page permanently locked and unscrollable.
    const safety = window.setTimeout(() => {
      tl.kill();
      release();
      setHidden(true);
      onDone();
    }, 6000);

    tl.set(mark.current, { opacity: 0, letterSpacing: "0.6em" })
      .set(line.current, { scaleX: 0 })
      .to(mark.current, {
        opacity: 1,
        letterSpacing: "0.32em",
        duration: 1.1,
        ease: "power3.out",
      })
      .to(
        line.current,
        { scaleX: 1, duration: 0.9, ease: "power2.inOut" },
        "-=0.5"
      )
      .to({}, { duration: 0.5 })
      .to(root.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });

    return () => {
      window.clearTimeout(safety);
      tl.kill();
      release();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
      aria-hidden="true"
    >
      <div
        ref={mark}
        className="font-display text-2xl md:text-3xl font-light text-sand tracking-widest2"
      >
        VELORA BAY
      </div>
      <div className="mt-6 h-px w-28 bg-gold/70 origin-left" ref={line} />
    </div>
  );
}
