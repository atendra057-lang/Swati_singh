"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ExecutivePortrait } from "./ExecutivePortrait";
import { ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  const { identity, hero } = portfolioData;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 70;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen pt-20 pb-14 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 bg-midnight text-ivory flex flex-col justify-center overflow-hidden"
      aria-label="Executive Overview"
    >
      {/* Background Architectural Atmosphere: fine grid, subtle oxblood glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[280px] sm:w-[480px] lg:w-[600px] h-[280px] sm:h-[480px] lg:h-[600px] bg-radial-oxblood opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 sm:w-80 h-48 sm:h-80 bg-midnight-light/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        {/* Top Editorial Archival Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brass/20 pb-3.5 mb-6 sm:mb-10 lg:mb-14 text-stone text-[10px] sm:text-[11px] md:text-xs tracking-wider sm:tracking-widest uppercase gap-2">
          <div className="flex items-center space-x-2.5">
            <span className="inline-block w-2 h-2 bg-brass flex-shrink-0" />
            <span className="text-ivory font-medium tracking-wider sm:tracking-widest">
              {hero.eyebrow}
            </span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 text-[9.5px] sm:text-[11px] font-mono text-stone/80">
            <span>PUBLIC-SECTOR BANKING</span>
            <span>•</span>
            <span>EXP. SINCE 2010</span>
          </div>
        </div>

        {/* Asymmetrical 2-Column Grid (md: for tablets 768px+, lg: for desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-6 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Executive Typography & Narrative */}
          <div className="md:col-span-7 flex flex-col justify-center">
            {/* Identity & Rank Badge */}
            <div className="mb-3 sm:mb-4 inline-flex items-center space-x-2.5 sm:space-x-3">
              <span className="px-2.5 sm:px-3 py-1 text-[9.5px] sm:text-[11px] font-sans tracking-widest uppercase bg-oxblood/60 border border-brass/30 text-ivory">
                {identity.designation}
              </span>
              <span className="text-stone text-[11px] sm:text-xs tracking-wider">
                {identity.neutralSectorName}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-ivory leading-[1.08] mb-4 sm:mb-6">
              {identity.fullName}
            </h1>

            {/* Brass hairline separator */}
            <div className="w-16 sm:w-20 md:w-24 h-[1px] bg-brass/60 mb-5 sm:mb-6 lg:mb-7" />

            {/* Primary Headline: Sound judgement. Steady leadership. Enduring trust. */}
            <h2 className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-ivory/95 font-light leading-snug tracking-normal mb-5 sm:mb-6 lg:mb-7 max-w-2xl">
              {hero.headline}
            </h2>

            {/* Supporting Paragraph */}
            <p className="font-sans text-stone-light text-sm sm:text-base md:text-base lg:text-lg leading-relaxed font-light mb-7 sm:mb-8 lg:mb-10 max-w-xl">
              {hero.supportingParagraph}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
              <a
                href="#career"
                onClick={(e) => handleScrollTo(e, "career")}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-ivory text-midnight hover:bg-brass transition-colors duration-200 font-sans text-xs uppercase tracking-widest font-semibold border border-ivory focus:ring-2 focus:ring-brass min-h-[44px]"
              >
                <span>{hero.primaryCtaLabel}</span>
                <ArrowDown className="ml-2 w-3.5 h-3.5" />
              </a>

              <a
                href="#expertise"
                onClick={(e) => handleScrollTo(e, "expertise")}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-transparent text-ivory hover:text-brass hover:border-brass transition-colors duration-200 font-sans text-xs uppercase tracking-widest border border-brass/40 focus:ring-2 focus:ring-brass min-h-[44px]"
              >
                <span>{hero.secondaryCtaLabel}</span>
              </a>
            </div>

            {/* Executive Footnote Badges: Responsive grid on mobile & tablet */}
            <div className="pt-5 sm:pt-6 lg:pt-8 border-t border-brass/15 grid grid-cols-3 gap-2 sm:gap-4 text-left">
              <div>
                <span className="block font-serif text-base sm:text-lg md:text-xl text-ivory font-medium">
                  16 Years
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-stone leading-tight block">
                  Banking Record
                </span>
              </div>
              <div className="border-l border-brass/15 pl-2 sm:pl-3 md:pl-4">
                <span className="block font-serif text-base sm:text-lg md:text-xl text-ivory font-medium">
                  3 Districts
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-stone leading-tight block">
                  Recovery & Planning
                </span>
              </div>
              <div className="border-l border-brass/15 pl-2 sm:pl-3 md:pl-4">
                <span className="block font-serif text-base sm:text-lg md:text-xl text-ivory font-medium">
                  Scale IV
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-stone leading-tight block">
                  Executive Cadre
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Executive Portrait Frame */}
          <div className="md:col-span-5 flex justify-center md:justify-end mt-2 md:mt-0">
            <ExecutivePortrait priority={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
