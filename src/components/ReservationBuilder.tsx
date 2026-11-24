"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle, Users, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { RevealBlock, TACTILE_SPRING } from "./MotionPrimitives";

interface ReservationBuilderProps {
  selectedZoneExternal?: string | null;
}

export function ReservationBuilder({ selectedZoneExternal }: ReservationBuilderProps) {
  const [zone, setZone] = useState<string>(siteConfig.reservation.zones[0].id);
  const [date, setDate] = useState<string>(siteConfig.reservation.defaultDate);
  const [time, setTime] = useState<string>(siteConfig.reservation.defaultTime);
  const [groupSize, setGroupSize] = useState<string>(siteConfig.reservation.groupSizes[0]);
  const [guestName, setGuestName] = useState<string>("");

  useEffect(() => {
    if (selectedZoneExternal) {
      setZone(selectedZoneExternal);
    }
  }, [selectedZoneExternal]);

  const formattedMessage = useMemo(() => {
    const namePart = guestName.trim() ? `Name: ${guestName.trim()}\n` : "";
    return (
      `Hello ${siteConfig.brandName} (Ajman)! I'd like to reserve a session:\n` +
      `${namePart}` +
      `• Experience Zone: ${zone}\n` +
      `• Date: ${date}\n` +
      `• Preferred Time: ${time} (24/7 Club)\n` +
      `• Players / Group: ${groupSize}\n` +
      `Please confirm availability.`
    );
  }, [zone, date, time, groupSize, guestName]);

  const whatsappHref = `${siteConfig.whatsappBaseUrl}?text=${encodeURIComponent(formattedMessage)}`;

  return (
    <section
      id="reserve"
      className="relative py-24 sm:py-32 bg-[#0E0B09] border-y border-white/5 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 18% 50%, rgba(111, 69, 40, 0.22) 0%, transparent 45%), radial-gradient(circle at 82% 30%, rgba(15, 81, 50, 0.22) 0%, transparent 45%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <RevealBlock className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left 5 Columns: Editorial Pitch & Live WhatsApp Preview */}
          <div className="lg:col-span-5 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F5132]/35 border border-[#198754]/45 text-[11px] uppercase tracking-[0.18em] text-[#FAF7F2]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Instant Concierge Booking</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-[-0.02em] leading-[1.08] text-[#FAF7F2]">
              Lock In Your Opening Week Table or VIP Suite
            </h2>

            <p className="text-base text-[#B8AFA6] leading-relaxed">
              Opening November 28, 2026 in Ajman — open 24 hours a day. Select your zone,
              preferred arrival time, and group size below to send a ready-to-confirm booking
              directly to our concierge on WhatsApp.
            </p>

            {/* Live Message Preview */}
            <div className="luxury-surface rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#D4AF37]">
                <span>WhatsApp Dispatch Preview</span>
                <span className="text-[#B8AFA6]">{siteConfig.whatsappDisplay}</span>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-[#FAF7F2]/90 leading-relaxed bg-[#090706]/70 border border-white/10 rounded-xl p-4">
                {formattedMessage}
              </pre>
            </div>
          </div>

          {/* Right 7 Columns: Interactive Reservation Builder */}
          <div className="lg:col-span-7 luxury-surface rounded-3xl p-6 sm:p-10 space-y-8">
            {/* Step 1: Experience Zone */}
            <div className="space-y-3.5">
              <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                1. Choose Experience Zone
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteConfig.reservation.zones.map((item) => {
                  const active = zone === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setZone(item.id)}
                      className={`relative text-left p-4 min-h-[64px] rounded-2xl border transition-colors cursor-pointer ${
                        active
                          ? "border-[#D4AF37]/60 text-[#FAF7F2]"
                          : "border-white/10 bg-[#090706]/50 text-[#B8AFA6] hover:border-white/25 hover:text-[#FAF7F2]"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="activeReservationZone"
                          transition={TACTILE_SPRING}
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0F5132]/45 via-[#1C1613] to-[#6F4528]/35 border border-[#D4AF37]/50 -z-0"
                        />
                      )}
                      <div className="relative z-10">
                        <div className="text-sm font-semibold text-[#FAF7F2]">{item.label}</div>
                        <div className="text-xs text-[#B8AFA6] mt-0.5">{item.detail}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2.5">
                <label
                  htmlFor="res-date"
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2. Preferred Date</span>
                </label>
                <input
                  id="res-date"
                  type="date"
                  value={date}
                  min="2026-11-28"
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full min-h-[48px] px-4 rounded-xl bg-[#090706]/85 border border-white/15 text-sm text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-2.5">
                <label
                  htmlFor="res-time"
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Arrival Time (24/7)</span>
                </label>
                <input
                  id="res-time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full min-h-[48px] px-4 rounded-xl bg-[#090706]/85 border border-white/15 text-sm text-[#FAF7F2] focus:outline-none focus:border-[#D4AF37]"
                />
                <div className="flex flex-wrap gap-2 pt-1">
                  {siteConfig.reservation.quickTimeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={`px-3 min-h-[34px] rounded-full text-xs tabular-nums border transition-colors cursor-pointer ${
                        time === slot
                          ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#F3D06B]"
                          : "bg-white/5 border-white/10 text-[#B8AFA6] hover:text-[#FAF7F2]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Players / Group Size + Optional Name */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-end">
              <div className="sm:col-span-7 space-y-2.5">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  <Users className="w-3.5 h-3.5" />
                  <span>3. Players / Group Size</span>
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {siteConfig.reservation.groupSizes.map((size) => {
                    const active = groupSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setGroupSize(size)}
                        className={`relative min-h-[48px] px-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                          active
                            ? "border-[#D4AF37]/60 text-[#FAF7F2]"
                            : "border-white/10 bg-[#090706]/50 text-[#B8AFA6] hover:text-[#FAF7F2]"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="activeGroupSize"
                            transition={TACTILE_SPRING}
                            className="absolute inset-0 rounded-xl bg-[#6F4528]/50 border border-[#D4AF37]/60"
                          />
                        )}
                        <span className="relative z-10">{size}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="sm:col-span-5 space-y-2.5">
                <label
                  htmlFor="res-name"
                  className="block text-xs uppercase tracking-[0.2em] text-[#B8AFA6]"
                >
                  Your Name (Optional)
                </label>
                <input
                  id="res-name"
                  type="text"
                  placeholder="Guest name"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full min-h-[48px] px-4 rounded-xl bg-[#090706]/85 border border-white/15 text-sm text-[#FAF7F2] placeholder:text-[#B8AFA6]/50 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Confirm & Send on WhatsApp CTA */}
            <div className="pt-2">
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="gold-cta w-full min-h-[56px] rounded-2xl flex items-center justify-center gap-3 text-sm sm:text-base font-semibold tracking-[0.06em] uppercase transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirm &amp; Send on WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
