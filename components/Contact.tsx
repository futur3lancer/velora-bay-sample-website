"use client";

import { useState } from "react";
import { Phone, MessageCircle, Instagram, Facebook, Twitter, MapPin, Mail } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="container-luxury">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-dark">Contact</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-charcoal md:text-4xl">
            We&apos;d love to help you plan
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-charcoal/10">
              <iframe
                title="Velora Bay Resort location"
                src="https://maps.google.com/maps?q=tropical%20private%20island%20resort&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col gap-4 text-sm text-charcoal/75">
              <div className="flex items-center gap-3">
                <MapPin size={18} strokeWidth={1.5} className="text-ocean" />
                One Velora Point, Tamarind Bay
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} strokeWidth={1.5} className="text-ocean" />
                <a href="tel:+18005550142" className="hover:text-ocean">
                  +1 (800) 555-0142
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} strokeWidth={1.5} className="text-ocean" />
                <a href="mailto:stay@velorabay.com" className="hover:text-ocean">
                  stay@velorabay.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="tel:+18005550142"
                className="flex items-center gap-2 bg-ocean px-5 py-3 text-sm text-white transition-colors hover:bg-ocean-dark"
              >
                <Phone size={15} strokeWidth={1.5} /> Call Now
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-charcoal/15 px-5 py-3 text-sm text-charcoal/75 transition-colors hover:border-ocean hover:text-ocean"
              >
                <MessageCircle size={15} strokeWidth={1.5} /> Message Us
              </a>

              <div className="ml-auto flex items-center gap-4 text-charcoal/40">
                <a href="#" aria-label="Instagram" className="hover:text-ocean">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-ocean">
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-ocean">
                  <Twitter size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-5"
          >
            {sent ? (
              <div className="border border-charcoal/10 bg-sand-light p-8 text-center">
                <p className="font-display text-xl font-light text-charcoal">
                  Thank you for reaching out
                </p>
                <p className="mt-2 text-sm text-charcoal/60">
                  Our team will reply within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <input
                    required
                    placeholder="First name"
                    className="border border-charcoal/15 px-4 py-3 text-sm focus:border-ocean focus:outline-none"
                  />
                  <input
                    required
                    placeholder="Last name"
                    className="border border-charcoal/15 px-4 py-3 text-sm focus:border-ocean focus:outline-none"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="border border-charcoal/15 px-4 py-3 text-sm focus:border-ocean focus:outline-none"
                />
                <input
                  placeholder="Phone (optional)"
                  className="border border-charcoal/15 px-4 py-3 text-sm focus:border-ocean focus:outline-none"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="resize-none border border-charcoal/15 px-4 py-3 text-sm focus:border-ocean focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-2 self-start bg-charcoal px-8 py-3.5 text-sm tracking-wide text-white transition-colors hover:bg-ocean"
                >
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
