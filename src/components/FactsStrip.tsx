"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export const FactsStrip: React.FC = () => {
  const { facts } = portfolioData;

  return (
    <section
      className="relative bg-midnight-dark text-ivory border-y border-brass/25 py-12 sm:py-16 md:py-18 lg:py-20 overflow-hidden"
      aria-label="Professional at a Glance"
    >
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
          {facts.map((fact, index) => {
            // Tablet (sm): border on right col (index 1 & 3), border-b on row 1 (index 0 & 1)
            const isTabletRightCol = index % 2 === 1;
            const isTabletTopRow = index < 2;

            return (
              <div
                key={index}
                className={`flex flex-col justify-between py-2 sm:py-3 lg:py-4 ${
                  index !== 0 ? "lg:border-l lg:border-brass/20 lg:pl-8 xl:pl-10" : "lg:pr-8 xl:pr-10"
                } ${
                  isTabletRightCol ? "sm:border-l sm:border-brass/20 sm:pl-6 md:pl-8" : "sm:pr-4"
                } ${
                  index !== facts.length - 1 ? "border-b border-brass/10 pb-6 sm:border-b-0 sm:pb-0" : ""
                } ${
                  isTabletTopRow ? "sm:border-b sm:border-brass/15 sm:pb-6 lg:border-b-0 lg:pb-0" : ""
                }`}
              >
                {/* Stat Numerics with deliberate serif precision */}
                <div className="mb-2.5 sm:mb-3 lg:mb-4">
                  <span className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-ivory tracking-tight block">
                    {fact.numeric}
                  </span>
                  <div className="w-10 sm:w-12 h-[1px] bg-brass/50 mt-1.5 sm:mt-2 mb-2 sm:mb-3" />
                </div>

                {/* Stat Labels */}
                <div>
                  <h3 className="font-sans text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-brass mb-1 sm:mb-1.5 leading-snug">
                    {fact.label}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-stone font-light leading-relaxed">
                    {fact.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
