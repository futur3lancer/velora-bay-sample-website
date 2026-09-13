"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { rooms, experiences } from "@/lib/data";

function nightsBetween(a: string, b: string) {
  if (!a || !b) return 0;
  const d1 = new Date(a).getTime();
  const d2 = new Date(b).getTime();
  const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

const activityPrices: Record<string, number> = {
  "Sunset Cruise": 10000,
  "Scuba Diving": 13500,
  "Island Hopping": 14500,
  "Romantic Dinner Setup": 8500,
};

export default function Booking() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomSlug, setRoomSlug] = useState(rooms[0].slug);
  const [guests, setGuests] = useState(2);
  const [activities, setActivities] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const room = rooms.find((r) => r.slug === roomSlug)!;
  const nights = nightsBetween(checkIn, checkOut);

  const activitiesTotal = useMemo(
    () => activities.reduce((sum, a) => sum + (activityPrices[a] ?? 0), 0),
    [activities]
  );

  const roomTotal = room.price * Math.max(nights, 1);
  const estimatedTotal = roomTotal + activitiesTotal;

  const toggleActivity = (name: string) =>
    setActivities((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );

  if (submitted) {
    return (
      <section id="booking" className="bg-ocean py-24 md:py-32">
        <div className="container-luxury flex flex-col items-center text-center">
          <CheckCircle2 className="text-gold" size={44} strokeWidth={1} />
          <h2 className="mt-6 font-display text-3xl font-light text-white">
            Your request has been received
          </h2>
          <p className="mt-4 max-w-md text-white/75">
            A member of our reservations team will confirm availability for
            the {room.name} and follow up within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 border border-white/30 px-7 py-3 text-sm tracking-wide text-white hover:border-gold hover:text-gold"
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-ocean py-24 md:py-32">
      <div className="container-luxury grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-gold">Reserve Your Stay</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-white md:text-4xl">
            Begin planning your escape
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-10 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs tracking-wide text-white/70">
                Check-in
                <input
                  required
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border border-white/25 bg-transparent px-4 py-3 text-sm text-white [color-scheme:dark] focus:border-gold focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs tracking-wide text-white/70">
                Check-out
                <input
                  required
                  type="date"
                  value={checkOut}
                  min={checkIn || undefined}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="border border-white/25 bg-transparent px-4 py-3 text-sm text-white [color-scheme:dark] focus:border-gold focus:outline-none"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs tracking-wide text-white/70">
                Accommodation
                <select
                  value={roomSlug}
                  onChange={(e) => setRoomSlug(e.target.value)}
                  className="border border-white/25 bg-transparent px-4 py-3 text-sm text-white [color-scheme:dark] focus:border-gold focus:outline-none"
                >
                  {rooms.map((r) => (
                    <option key={r.slug} value={r.slug} className="text-charcoal">
                      {r.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-xs tracking-wide text-white/70">
                Guests
                <input
                  type="number"
                  min={1}
                  max={8}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="border border-white/25 bg-transparent px-4 py-3 text-sm text-white focus:border-gold focus:outline-none"
                />
              </label>
            </div>

            <div>
              <p className="mb-3 text-xs tracking-wide text-white/70">
                Add experiences
              </p>
              <div className="flex flex-wrap gap-3">
                {experiences
                  .filter((e) => e.name in activityPrices)
                  .map((e) => (
                    <button
                      type="button"
                      key={e.name}
                      onClick={() => toggleActivity(e.name)}
                      className={`border px-4 py-2 text-xs tracking-wide transition-colors ${
                        activities.includes(e.name)
                          ? "border-gold bg-gold text-charcoal"
                          : "border-white/25 text-white/75 hover:border-white/60"
                      }`}
                    >
                      {e.name} · ₱{activityPrices[e.name].toLocaleString()}
                    </button>
                  ))}
              </div>
            </div>

            <label className="flex flex-col gap-2 text-xs tracking-wide text-white/70">
              Name
              <input
                required
                type="text"
                placeholder="Full name"
                className="border border-white/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-2 text-xs tracking-wide text-white/70">
              Email
              <input
                required
                type="email"
                placeholder="you@email.com"
                className="border border-white/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-2 bg-gold px-8 py-4 text-sm tracking-wide text-charcoal transition-colors hover:bg-gold-light"
            >
              Submit Booking Request
            </button>
          </form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-fit border border-white/15 bg-white/[0.04] p-8"
        >
          <h3 className="font-display text-xl font-light text-white">
            Estimated Cost
          </h3>
          <div className="hairline my-6" />

          <div className="flex flex-col gap-4 text-sm text-white/80">
            <div className="flex justify-between">
              <span>{room.name}</span>
              <span>₱{room.price.toLocaleString()} / night</span>
            </div>
            <div className="flex justify-between text-white/60">
              <span>Nights</span>
              <span>{nights || "—"}</span>
            </div>
            <div className="flex justify-between text-white/60">
              <span>Guests</span>
              <span>{guests}</span>
            </div>
            {activities.length > 0 && (
              <div className="flex justify-between text-white/60">
                <span>Experiences ({activities.length})</span>
                <span>₱{activitiesTotal.toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className="hairline my-6" />

          <div className="flex items-baseline justify-between">
            <span className="text-sm text-white/70">Estimated total</span>
            <span className="font-display text-3xl font-light text-gold">
              ₱{estimatedTotal.toLocaleString()}
            </span>
          </div>
          <p className="mt-3 text-xs text-white/45">
            Final pricing confirmed by our reservations team, taxes and
            resort fees not included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
