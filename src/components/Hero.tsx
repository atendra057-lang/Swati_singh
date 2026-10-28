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
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 bg-midnight text-ivory flex flex-col justify-center overflow-hidden"
      aria-label="Executive Overview"
    >
      {/* Background Architectural Atmosphere: fine grid, subtle oxblood glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-radial-oxblood opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-midnight-light/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {/* Top Editorial Archival Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brass/20 pb-4 mb-8 sm:mb-14 text-stone text-[11px] sm:text-xs tracking-wider sm:tracking-widest uppercase gap-2">
          <div className="flex items-center space-x-2.5">
            <span className="inline-block w-2 h-2 bg-brass flex-shrink-0" />
            <span className="text-ivory font-medium tracking-wider sm:tracking-widest">
              {hero.eyebrow}
            </span>
          </div>
          <div className="flex items-center space-x-4 text-[10px] sm:text-[11px] font-mono text-stone/80">
            <span>PUBLIC-SECTOR BANKING</span>
            <span>•</span>
            <span>EXP. SINCE 2010</span>
          </div>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          {/* Left Column: Executive Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Identity & Rank Badge */}
            <div className="mb-4 inline-flex items-center space-x-3">
              <span className="px-3 py-1 text-[10px] sm:text-[11px] font-sans tracking-widest uppercase bg-oxblood/60 border border-brass/30 text-ivory">
                {identity.designation}
              </span>
              <span className="text-stone text-xs tracking-wider">
                {identity.neutralSectorName}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight text-ivory leading-[1.08] mb-6">
              {identity.fullName}
            </h1>

            {/* Brass hairline separator */}
            <div className="w-20 sm:w-24 h-[1px] bg-brass/60 mb-6 sm:mb-7" />

            {/* Primary Headline: Sound judgement. Steady leadership. Enduring trust. */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory/95 font-light leading-snug tracking-normal mb-6 sm:mb-7 max-w-2xl">
              {hero.headline}
            </h2>

            {/* Supporting Paragraph */}
            <p className="font-sans text-stone-light text-base sm:text-lg leading-relaxed font-light mb-8 sm:mb-10 max-w-xl">
              {hero.supportingParagraph}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 mb-10 sm:mb-12">
              <a
                href="#career"
                onClick={(e) => handleScrollTo(e, "career")}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-ivory text-midnight hover:bg-brass transition-colors duration-200 font-sans text-xs uppercase tracking-widest font-semibold border border-ivory focus:ring-2 focus:ring-brass"
              >
                <span>{hero.primaryCtaLabel}</span>
                <ArrowDown className="ml-2 w-3.5 h-3.5" />
              </a>

              <a
                href="#expertise"
                onClick={(e) => handleScrollTo(e, "expertise")}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-ivory hover:text-brass hover:border-brass transition-colors duration-200 font-sans text-xs uppercase tracking-widest border border-brass/40 focus:ring-2 focus:ring-brass"
              >
                <span>{hero.secondaryCtaLabel}</span>
              </a>
            </div>

            {/* Executive Footnote Badges */}
            <div className="pt-6 sm:pt-8 border-t border-brass/15 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 text-left">
              <div>
                <span className="block font-serif text-lg sm:text-xl text-ivory font-medium">
                  16 Years
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone">
                  Banking Record
                </span>
              </div>
              <div className="sm:border-l sm:border-brass/15 sm:pl-4">
                <span className="block font-serif text-lg sm:text-xl text-ivory font-medium">
                  3 Districts
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone">
                  Recovery & Planning
                </span>
              </div>
              <div className="sm:border-l sm:border-brass/15 sm:pl-4">
                <span className="block font-serif text-lg sm:text-xl text-ivory font-medium">
                  Scale IV
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone">
                  Executive Cadre
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Executive Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <ExecutivePortrait priority={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
