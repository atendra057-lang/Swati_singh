"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Bookmark, Shield } from "lucide-react";

export const RecognitionSection: React.FC = () => {
  const { recognition } = portfolioData;

  return (
    <section
      id="recognition"
      className="relative py-24 sm:py-32 bg-ivory text-graphite overflow-hidden"
      aria-label="Professional Recognition"
    >
      {/* Background delicate grid */}
      <div className="absolute inset-0 bg-grid-ivory opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-ivory-border pb-8 mb-14 sm:mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-brass inline-block" />
            <span className="font-sans text-xs tracking-ultra uppercase text-brass-dark font-semibold">
              {recognition.sectionLabel}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-graphite-dark font-normal tracking-tight">
              {recognition.heading}
            </h2>
            <p className="font-sans text-sm sm:text-base text-graphite/80 font-light max-w-md">
              {recognition.supportingText}
            </p>
          </div>
        </div>

        {/* 2 Refined Editorial Plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {recognition.items.map((item, index) => (
            <div
              key={item.id}
              className="bg-ivory-pure border border-ivory-border p-8 sm:p-12 relative flex flex-col justify-between shadow-sm hover:border-brass transition-colors duration-300 group"
            >
              {/* Corner brass marker */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brass/50 group-hover:border-brass transition-colors" />

              <div>
                {/* Year Pill & Designation */}
                <div className="flex items-center justify-between pb-4 border-b border-ivory-border mb-6">
                  <span className="font-sans text-xs font-semibold tracking-widest uppercase text-brass-dark px-3 py-1 bg-ivory border border-brass/30">
                    {item.period}
                  </span>
                  <span className="font-mono text-xs text-stone-dark">
                    Recognition No. 0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-graphite-dark font-normal mb-4 group-hover:text-oxblood transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-graphite/85 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Footnote */}
              <div className="pt-6 border-t border-ivory-border/70 flex items-center justify-between text-xs text-stone-dark">
                <span className="italic font-serif">
                  Internal Institutional Honor
                </span>
                <span className="font-mono text-stone-dark">
                  Verified Record
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Note on Record Restraint */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-dark font-light italic">
            Entries reflect official executive club memberships formally recorded in consecutive performance evaluations.
          </p>
        </div>
      </div>
    </section>
  );
};

