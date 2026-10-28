"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2, ShieldCheck, Scale } from "lucide-react";

export const ProfessionalProfile: React.FC = () => {
  const { profile } = portfolioData;

  const pillarIcons = [
    <Scale key="scale" className="w-5 h-5 text-brass" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-brass" />,
    <CheckCircle2 key="check" className="w-5 h-5 text-brass" />,
  ];

  return (
    <section
      id="profile"
      className="relative py-24 sm:py-32 bg-ivory text-graphite overflow-hidden"
      aria-label="Professional Profile"
    >
      {/* Subtle security/currency fine-line background */}
      <div className="absolute inset-0 bg-grid-ivory opacity-60 pointer-events-none" />

      {/* Deliberate top hairline transition */}
      <div className="absolute top-0 inset-x-0 h-px bg-brass/30" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-brass inline-block" />
            <span className="font-sans text-xs tracking-ultra uppercase text-brass-dark font-semibold">
              {profile.sectionLabel}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-graphite-dark font-normal tracking-tight max-w-2xl">
            {profile.heading}
          </h2>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {profile.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`font-sans leading-relaxed ${
                  index === 0
                    ? "text-xl sm:text-2xl font-serif text-graphite-dark leading-snug font-normal"
                    : "text-base sm:text-lg text-graphite/90 font-light"
                }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Editorial Rule & Institutional Footnote */}
            <div className="pt-8 border-t border-ivory-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-oxblood" />
                <span className="font-sans text-xs tracking-widest uppercase text-stone-dark font-medium">
                  Public Banking Stewardship
                </span>
              </div>
              <span className="font-mono text-xs text-stone-dark">
                Tenure: 2010 – Present
              </span>
            </div>
          </div>

          {/* Supporting Side Plate: Institutional Governance Principles (5 cols) */}
          <div className="lg:col-span-5 bg-ivory-pure border border-ivory-border p-8 sm:p-10 shadow-sm relative">
            {/* Corner brass accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brass/40" />

            <div className="mb-6 pb-4 border-b border-ivory-border">
              <span className="font-sans text-[10px] tracking-widest uppercase text-stone-dark block mb-1">
                Institutional Tenets
              </span>
              <h3 className="font-serif text-xl text-graphite-dark font-normal">
                Governance & Operating Values
              </h3>
            </div>

            <div className="space-y-6">
              {profile.guidingPrinciples.map((pillar, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-none border border-brass/30 bg-ivory flex items-center justify-center">
                    {pillarIcons[idx] || pillarIcons[0]}
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-graphite-dark font-semibold mb-1">
                      {pillar.title}
                    </h4>
                    <p className="font-sans text-xs text-graphite/80 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-ivory-border flex items-center justify-between text-[11px] text-stone-dark">
              <span>Authentic Career Record</span>
              <span className="font-mono">Documented</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

