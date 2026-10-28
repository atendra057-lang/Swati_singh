"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Users, Compass, HeartHandshake } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  const { leadership } = portfolioData;

  const themeIcons = [
    <Compass key="accountability" className="w-5 h-5 text-brass" />,
    <Users key="breadth" className="w-5 h-5 text-brass" />,
    <HeartHandshake key="service" className="w-5 h-5 text-brass" />,
  ];

  return (
    <section
      id="leadership"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-midnight via-oxblood-dark to-midnight text-ivory overflow-hidden"
      aria-label="Leadership & Responsibility"
    >
      {/* Background Architectural Grid and Atmospheric radial highlights */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-oxblood/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Oversized Watermark Word */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 select-none pointer-events-none text-brass/[0.03] font-serif text-[12vw] tracking-widest whitespace-nowrap leading-none font-bold uppercase"
        aria-hidden="true"
      >
        {leadership.watermarkWord}
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-brass inline-block" />
            <span className="font-sans text-xs tracking-ultra uppercase text-brass font-semibold">
              {leadership.sectionLabel}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal tracking-tight mb-8">
            {leadership.heading}
          </h2>

          <div className="space-y-5 text-stone-light text-base sm:text-lg font-light leading-relaxed">
            {leadership.narrative.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 3 Leadership Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-brass/20">
          {leadership.themes.map((theme, index) => (
            <div
              key={index}
              className="bg-midnight/60 border border-brass/25 p-8 relative flex flex-col justify-between backdrop-blur-sm hover:border-brass/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-brass/15 mb-6">
                  <div className="w-10 h-10 border border-brass/30 bg-oxblood/40 flex items-center justify-center">
                    {themeIcons[index] || themeIcons[0]}
                  </div>
                  <span className="font-mono text-xs text-brass">
                    0{index + 1}
                  </span>
                </div>

                <span className="font-sans text-[10px] tracking-widest uppercase text-brass block mb-1.5 font-medium">
                  {theme.eyebrow}
                </span>

                <h3 className="font-serif text-2xl text-ivory font-normal mb-3">
                  {theme.title}
                </h3>

                <p className="font-sans text-sm text-stone leading-relaxed font-light">
                  {theme.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brass/15 text-[11px] font-sans tracking-wider text-stone/80 uppercase">
                Institutional Tenet
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

