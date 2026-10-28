"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export const ClosingStatement: React.FC = () => {
  const { closing, identity } = portfolioData;

  const handleReturnToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="relative py-20 sm:py-28 md:py-32 lg:py-40 bg-midnight text-ivory text-center overflow-hidden border-t border-brass/25"
      aria-label="Executive Closing"
    >
      {/* Background radial ambiance */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[600px] h-[200px] sm:h-[300px] bg-radial-oxblood opacity-50 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Monogram Crest */}
        <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 border border-brass/40 flex items-center justify-center mb-6 sm:mb-8 md:mb-10 bg-midnight/80 backdrop-blur-sm">
          <span className="font-serif text-xl sm:text-2xl text-ivory font-medium">SS</span>
        </div>

        {/* Closing Headline */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-ivory font-light leading-tight tracking-tight mb-5 sm:mb-8">
          {closing.headline}
        </h2>

        {/* Delicate divider */}
        <div className="w-16 sm:w-20 h-[1.5px] bg-brass/50 mx-auto mb-5 sm:mb-8" />

        {/* Supporting text */}
        <p className="font-sans text-stone-light text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12">
          {closing.supportingText}
        </p>

        {/* Return to Overview Button */}
        <div>
          <a
            href="#hero"
            onClick={handleReturnToTop}
            className="inline-flex items-center space-x-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-brass/50 hover:bg-brass hover:text-midnight transition-colors duration-300 text-xs font-sans uppercase tracking-widest text-ivory font-medium focus:ring-2 focus:ring-brass min-h-[44px]"
          >
            <span>{closing.ctaLabel}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Typographic Signature descriptor */}
        <div className="mt-10 sm:mt-14 md:mt-16 pt-6 sm:pt-8 border-t border-brass/15 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10.5px] sm:text-xs text-stone tracking-widest uppercase">
          <span>{identity.fullName}</span>
          <span className="hidden sm:inline">•</span>
          <span>{identity.designation}</span>
          <span className="hidden sm:inline">•</span>
          <span>{identity.neutralSectorName}</span>
        </div>
      </div>
    </section>
  );
};
