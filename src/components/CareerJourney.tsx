"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Award, Landmark } from "lucide-react";

export const CareerJourney: React.FC = () => {
  const { career } = portfolioData;

  return (
    <section
      id="career"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-midnight text-ivory overflow-hidden"
      aria-label="Career Journey"
    >
      {/* Background linework & ambient glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-radial-oxblood opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-brass/20 pb-6 sm:pb-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-2.5 sm:mb-3">
            <span className="w-5 sm:w-6 h-[1.5px] bg-brass inline-block" />
            <span className="font-sans text-[11px] sm:text-xs tracking-ultra uppercase text-brass font-semibold">
              {career.sectionLabel}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory font-normal tracking-tight">
              {career.heading}
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-stone font-light max-w-md">
              {career.supportingText}
            </p>
          </div>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative">
          {/* Vertical central brass spine (Desktop 1024px+) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-brass/10 via-brass/40 to-brass/10 -translate-x-1/2 pointer-events-none" />

          {/* Vertical spine (Mobile & Tablet < 1024px) */}
          <div className="lg:hidden absolute left-3 sm:left-4 md:left-6 top-4 bottom-4 w-px bg-brass/30 pointer-events-none" />

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {career.milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const isLatest = index === career.milestones.length - 1;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left or Right Content Box */}
                  <div
                    className={`w-full lg:w-[calc(50%-48px)] pl-8 sm:pl-12 md:pl-16 lg:pl-0 ${
                      isEven ? "lg:text-left" : "lg:text-right"
                    }`}
                  >
                    <div
                      className={`p-5 sm:p-6 md:p-7 lg:p-8 transition-all duration-300 border ${
                        item.highlight
                          ? "bg-midnight-light border-brass/50 shadow-xl"
                          : "bg-midnight/70 border-brass/20"
                      }`}
                    >
                      {/* Year & Cadre Pill */}
                      <div
                        className={`flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3 ${
                          isEven ? "lg:justify-start" : "lg:justify-end"
                        }`}
                      >
                        <span className="font-serif text-xl sm:text-2xl md:text-3xl text-brass font-semibold tracking-wide">
                          {item.year}
                        </span>
                        {item.scale && (
                          <span className="text-[9.5px] sm:text-[10px] font-sans tracking-widest uppercase px-2 sm:px-2.5 py-0.5 bg-oxblood/60 border border-brass/30 text-ivory">
                            {item.scale}
                          </span>
                        )}
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-ivory font-normal mb-2 sm:mb-3">
                        {item.role}
                      </h3>

                      {/* Milestone Description */}
                      <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Culmination Milestone Callout */}
                      {isLatest && (
                        <div
                          className={`mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-brass/20 flex items-center space-x-2 text-xs text-brass ${
                            isEven ? "lg:justify-start" : "lg:justify-end"
                          }`}
                        >
                          <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brass flex-shrink-0" />
                          <span className="tracking-wide font-sans uppercase text-[10px] sm:text-[11px] font-medium">
                            Current Role: Chief Manager
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Node Marker */}
                  <div className="absolute left-3 sm:left-4 md:left-6 lg:left-1/2 -translate-x-1/2 top-5 sm:top-6 flex items-center justify-center">
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center bg-midnight transition-colors ${
                        item.highlight
                          ? "border-brass bg-oxblood text-brass shadow-md shadow-brass/20"
                          : "border-brass/40 bg-midnight text-stone"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                          item.highlight ? "bg-brass" : "bg-stone"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Empty Spacer on Opposite Side (Desktop 1024px+) */}
                  <div className="hidden lg:block w-[calc(50%-48px)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Institutional Progression Footnote */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-brass/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone gap-2.5 sm:gap-3">
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            <Landmark className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brass flex-shrink-0" />
            <span className="tracking-widest uppercase font-sans text-[10px] sm:text-[11px]">
              Continuous Service in Public-Sector Banking
            </span>
          </div>
          <span className="font-mono text-brass/80 text-[11px] sm:text-xs">
            2010 – 2026 (16 Years)
          </span>
        </div>
      </div>
    </section>
  );
};
