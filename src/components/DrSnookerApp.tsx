"use client";

import { useState } from "react";
import { MotionProvider } from "./MotionPrimitives";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { FacilitiesSection } from "./FacilitiesSection";
import { ReservationBuilder } from "./ReservationBuilder";
import { ClubGallery } from "./ClubGallery";
import { LocationSection } from "./LocationSection";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function DrSnookerApp() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#090706] text-[#FAF7F2]">
        <Navbar />
        <main>
          <HeroSection />
          <FacilitiesSection onSelectZoneForBooking={setSelectedZone} />
          <ReservationBuilder selectedZoneExternal={selectedZone} />
          <ClubGallery />
          <LocationSection />
        </main>
        <FloatingWhatsApp />
      </div>
    </MotionProvider>
  );
}
