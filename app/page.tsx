"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Accommodations from "@/components/Accommodations";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Experiences from "@/components/Experiences";
import Concierge from "@/components/Concierge";
import Testimonials from "@/components/Testimonials";
import ResortMap from "@/components/ResortMap";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <Header />
        <main>
          <Hero />
          <Overview />
          <Accommodations />
          <Amenities />
          <Gallery />
          <Experiences />
          <Concierge />
          <Testimonials />
          <ResortMap />
          <Booking />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
