const columns = [
  {
    title: "Explore",
    links: ["Accommodations", "Amenities", "Experiences", "Gallery"],
  },
  {
    title: "Resort",
    links: ["Our Story", "Resort Map", "Guest Stories", "Careers"],
  },
  {
    title: "Support",
    links: ["Contact", "Reservations", "Cancellation Policy", "FAQs"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20">
      <div className="container-luxury">
        <div className="grid grid-cols-2 gap-10 pb-16 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-lg tracking-widest2 text-white">
              VELORA BAY
            </p>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-white/50">
              An intimate five-star sanctuary on a private tropical bay.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-white/40">{col.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/65 hover:text-gold">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline-solid !bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Velora Bay Resort &amp; Spa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
