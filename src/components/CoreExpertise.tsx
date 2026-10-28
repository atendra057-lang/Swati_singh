"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Check } from "lucide-react";

export const CoreExpertise: React.FC = () => {
  const { expertise } = portfolioData;

  const primaryArea = expertise.areas.find((a) => a.isPrimary);
  const secondaryAreas = expertise.areas.filter((a) => !a.isPrimary);

  return (
    <section
      id="expertise"
      className="relative py-24 sm:py-32 bg-ivory-pure text-graphite overflow-hidden"
      aria-label="Core Professional Expertise"
    >
      {/* Background linework */}
      <div className="absolute inset-0 bg-grid-ivory opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-ivory-border pb-8 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1.5px] bg-brass inline-block" />
              <span className="font-sans text-xs tracking-ultra uppercase text-brass-dark font-semibold">
                {expertise.sectionLabel}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-graphite-dark font-normal tracking-tight">
              {expertise.heading}
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-graphite/80 font-light max-w-md mt-4 md:mt-0">
            {expertise.supportingText}
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* PRIMARY EXPERTISE: Credit & Asset Quality (Expanded 6-col Hero Card) */}
          {primaryArea && (
            <div className="lg:col-span-6 bg-midnight text-ivory p-8 sm:p-12 relative flex flex-col justify-between shadow-xl border border-brass/30">
              {/* Decorative radial oxblood glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-radial-oxblood opacity-70 pointer-events-none" />

              <div className="relative z-10">
                {/* Plate Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-brass/20 mb-8">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-brass font-medium">
                    {primaryArea.scopeTag}
                  </span>
                  <span className="font-mono text-xs text-stone">
                    01 / PRIMARY
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ivory mb-5 tracking-tight">
                  {primaryArea.title}
                </h3>

                <p className="font-sans text-stone-light text-base leading-relaxed font-light mb-8">
                  {primaryArea.description}
                </p>

                {/* Specific Responsibilities List */}
                <div className="space-y-4 pt-4 border-t border-brass/15">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-brass block">
                    Core Operational Domains
                  </span>
                  <ul className="space-y-3">
                    {primaryArea.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-stone-light/90">
                        <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-none border border-brass/40 flex items-center justify-center text-brass">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Credential Anchor */}
              <div className="relative z-10 mt-10 pt-6 border-t border-brass/20 flex items-center justify-between text-xs text-stone">
                <span className="italic font-serif text-stone-light">
                  Moody&apos;s Commercial Credit Certified
                </span>
                <span className="font-mono text-brass">Scale IV Focus</span>
              </div>
            </div>
          )}

          {/* SECONDARY EXPERTISE: 3 Structured Panels (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {secondaryAreas.map((area, index) => {
              const displayIndex = `0${index + 2}`;
              return (
                <div
                  key={area.id}
                  className="bg-ivory border border-ivory-border p-6 sm:p-8 flex flex-col justify-between hover:border-brass/50 transition-colors duration-200 relative group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-ivory-border mb-4">
                      <span className="font-sans text-[10px] tracking-widest uppercase text-brass-dark font-semibold">
                        {area.scopeTag}
                      </span>
                      <span className="font-mono text-xs text-stone-dark">
                        {displayIndex}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl text-graphite-dark font-normal mb-2.5 group-hover:text-oxblood transition-colors">
                      {area.title}
                    </h4>

                    <p className="font-sans text-sm text-graphite/85 font-light leading-relaxed mb-4">
                      {area.description}
                    </p>
                  </div>

                  {/* Bullet Summary */}
                  <div className="pt-3 border-t border-ivory-border/60">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-graphite/75">
                      {area.responsibilities.slice(0, 2).map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brass mt-1.5 flex-shrink-0" />
                          <span className="leading-tight">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

