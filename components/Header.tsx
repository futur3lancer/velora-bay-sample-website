"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

const links = [
  { href: "#accommodations", label: "Accommodations" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experiences", label: "Experiences" },
  { href: "#testimonials", label: "Guest Stories" },
  { href: "#map", label: "Resort Map" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Only lock while the drawer is actually open. Locking/unlocking here
    // used to run unconditionally on every mount and write directly to
    // `body.style.overflow` — the same property the intro Loader writes
    // to independently, which caused the two to stomp on each other and
    // could leave the page's scroll lock in the wrong state, especially
    // on mobile where `overflow: hidden` alone doesn't reliably stop
    // touch scrolling (see lib/scrollLock.ts).
    if (!open) return;

    lockScroll();
    return () => {
      unlockScroll();
    };
  }, [open]);

  const dark = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Backdrop-blur lives on this inner wrapper, not on <header> itself.
          backdrop-filter creates a new containing block for position:fixed
          descendants, which was collapsing the mobile drawer below (it
          was anchoring to this 80px bar instead of the viewport). */}
      <div
        className={`transition-colors duration-500 ${
          dark ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(26,26,26,0.08)]" : "bg-transparent"
        }`}
      >
      <div className="container-luxury flex h-20 items-center justify-between">
        <a
          href="#top"
          className={`font-display text-lg tracking-widest2 transition-colors ${
            dark ? "text-ocean" : "text-white"
          }`}
        >
          VELORA BAY
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`eyebrow transition-colors hover:text-gold ${
                dark ? "text-charcoal" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+18005550142"
            className={`flex items-center gap-2 text-sm transition-colors ${
              dark ? "text-charcoal" : "text-white"
            }`}
          >
            <Phone size={15} strokeWidth={1.5} />
            +1 (800) 555-0142
          </a>
          <a
            href="#booking"
            className="border border-gold px-6 py-2.5 text-sm tracking-wide text-gold transition-colors hover:bg-gold hover:text-charcoal"
          >
            Reserve
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${dark ? "text-charcoal" : "text-white"}`}
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto overscroll-contain bg-white lg:hidden">
          <nav className="container-luxury flex flex-col gap-1 py-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/10 py-3 font-display text-xl text-charcoal sm:text-2xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-6 w-fit border border-gold px-7 py-3 text-sm tracking-wide text-gold"
            >
              Reserve Your Stay
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
