"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Award, ChevronRight, Landmark } from "lucide-react";

export const CareerJourney: React.FC = () => {
  const { career } = portfolioData;

  return (
    <section
      id="career"
      className="relative py-24 sm:py-32 bg-midnight text-ivory overflow-hidden"
      aria-label="Career Journey"
    >
      {/* Background linework & ambient glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-radial-oxblood opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-brass/20 pb-8 mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-brass inline-block" />
            <span className="font-sans text-xs tracking-ultra uppercase text-brass font-semibold">
              {career.sectionLabel}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal tracking-tight">
              {career.heading}
            </h2>
            <p className="font-sans text-sm sm:text-base text-stone font-light max-w-md">
              {career.supportingText}
            </p>
          </div>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative">
          {/* Vertical central brass spine (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-brass/10 via-brass/40 to-brass/10 -translate-x-1/2 pointer-events-none" />

          {/* Vertical spine (Mobile/Tablet) */}
          <div className="lg:hidden absolute left-4 top-4 bottom-4 w-px bg-brass/30 pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
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
                  {/* Left or Right Content Box (Desktop 5/12 width) */}
                  <div
                    className={`w-full lg:w-[calc(50%-48px)] pl-12 lg:pl-0 ${
                      isEven ? "lg:text-left" : "lg:text-right"
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-8 transition-all duration-300 border ${
                        item.highlight
                          ? "bg-midnight-light border-brass/50 shadow-xl"
                          : "bg-midnight/70 border-brass/20"
                      }`}
                    >
                      {/* Year & Cadre Pill */}
                      <div
                        className={`flex items-center space-x-3 mb-3 ${
                          isEven ? "lg:justify-start" : "lg:justify-end"
                        }`}
                      >
                        <span className="font-serif text-2xl sm:text-3xl text-brass font-semibold tracking-wide">
                          {item.year}
                        </span>
                        {item.scale && (
                          <span className="text-[10px] font-sans tracking-widest uppercase px-2.5 py-0.5 bg-oxblood/60 border border-brass/30 text-ivory">
                            {item.scale}
                          </span>
                        )}
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal mb-3">
                        {item.role}
                      </h3>

                      {/* Milestone Description */}
                      <p className="font-sans text-sm text-stone leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Culmination Milestone Callout */}
                      {isLatest && (
                        <div
                          className={`mt-4 pt-4 border-t border-brass/20 flex items-center space-x-2 text-xs text-brass ${
                            isEven ? "lg:justify-start" : "lg:justify-end"
                          }`}
                        >
                          <Award className="w-4 h-4 text-brass" />
                          <span className="tracking-wide font-sans uppercase text-[11px] font-medium">
                            Current Role: Chief Manager
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Central Node Marker on Desktop */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-6 flex items-center justify-center">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center bg-midnight transition-colors ${
                        item.highlight
                          ? "border-brass bg-oxblood text-brass shadow-md shadow-brass/20"
                          : "border-brass/40 bg-midnight text-stone"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.highlight ? "bg-brass" : "bg-stone"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Empty Spacer on Opposite Side (Desktop 5/12 width) */}
                  <div className="hidden lg:block w-[calc(50%-48px)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Institutional Progression Footnote */}
        <div className="mt-16 pt-8 border-t border-brass/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone gap-3">
          <div className="flex items-center space-x-3">
            <Landmark className="w-4 h-4 text-brass" />
            <span className="tracking-widest uppercase font-sans text-[11px]">
              Continuous Service in Public-Sector Banking
            </span>
          </div>
          <span className="font-mono text-brass/80">
            2010 – 2026 (16 Years)
          </span>
        </div>
      </div>
    </section>
  );
};

