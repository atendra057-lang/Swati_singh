"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

interface ExecutivePortraitProps {
  className?: string;
  priority?: boolean;
}

export const ExecutivePortrait: React.FC<ExecutivePortraitProps> = ({
  className = "",
  priority = true,
}) => {
  const { portrait, identity } = portfolioData;
  const [imageError, setImageError] = useState(false);

  // If real photo flag is set to true and there's no loading error, render the actual image
  const shouldRenderImage = portrait.hasRealPhoto && !imageError;

  return (
    <div
      className={`relative group w-full max-w-[280px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[420px] mx-auto ${className}`}
      aria-label="Executive Portrait Section"
    >
      {/* Outer framing and architectural shadow */}
      <div className="relative aspect-[3/4] w-full overflow-hidden border border-brass/35 bg-midnight-light p-2 sm:p-2.5 transition-all duration-500 shadow-2xl">
        {/* Fine inner brass hairline border */}
        <div className="relative h-full w-full overflow-hidden border border-brass/20 bg-midnight">
          {shouldRenderImage ? (
            <div className="relative h-full w-full">
              <Image
                src={portrait.assetPath}
                alt={portrait.altText}
                fill
                priority={priority}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 360px, 420px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          ) : (
            /* Bespoke Designed Architectural Executive Placeholder */
            <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-6 lg:p-7 bg-gradient-to-br from-midnight via-midnight-dark to-oxblood-dark overflow-hidden select-none">
              {/* Subtle architectural background linework */}
              <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />

              {/* Decorative radial lighting */}
              <div className="absolute top-0 right-0 w-44 sm:w-64 h-44 sm:h-64 bg-radial-oxblood pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 sm:w-52 h-36 sm:h-52 bg-brass/5 rounded-full blur-2xl pointer-events-none" />

              {/* Top metadata row */}
              <div className="relative z-10 flex items-center justify-between border-b border-brass/20 pb-2 sm:pb-2.5">
                <span className="font-sans text-[8.5px] sm:text-[10px] uppercase tracking-widest text-brass/80">
                  Executive Archive
                </span>
                <span className="font-sans text-[8.5px] sm:text-[10px] tracking-wider text-stone font-mono">
                  EST. 2010
                </span>
              </div>

              {/* Centerplate: Monogram & Crest */}
              <div className="relative z-10 my-auto text-center py-3 sm:py-5">
                <div className="relative mx-auto w-16 h-16 sm:w-22 sm:h-22 mb-3 sm:mb-4 flex items-center justify-center border border-brass/40 rounded-full bg-midnight-dark/80 backdrop-blur-sm">
                  <div className="absolute inset-1 border border-dashed border-brass/25 rounded-full" />
                  <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-ivory">
                    SS
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg sm:text-xl text-ivory tracking-wide font-normal">
                    {identity.fullName}
                  </h3>
                  <p className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-brass">
                    {identity.designation}
                  </p>
                  <p className="font-sans text-[9.5px] sm:text-[10.5px] text-stone tracking-wide">
                    {identity.neutralSectorName}
                  </p>
                </div>
              </div>

              {/* Bottom metadata panel */}
              <div className="relative z-10 border-t border-brass/20 pt-2 space-y-1">
                <div className="flex items-center justify-between text-[8.5px] sm:text-[9.5px] text-stone tracking-wider uppercase">
                  <span>Portrait Placeholder</span>
                  <span className="text-brass/70 font-mono">Plate 01</span>
                </div>
                <p className="text-[8.5px] sm:text-[9.5px] text-stone/80 leading-relaxed text-center italic">
                  High-resolution portrait asset reserved at:
                  <br />
                  <code className="text-brass/90 not-italic text-[8px] sm:text-[8.5px] font-mono">
                    {portrait.assetPath}
                  </code>
                </p>
              </div>

              {/* Corner registration marks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-brass/40 pointer-events-none" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-brass/40 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-brass/40 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-brass/40 pointer-events-none" />
            </div>
          )}
        </div>

        {/* Outer corner accents */}
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-brass/70 pointer-events-none" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-brass/70 pointer-events-none" />
      </div>

      {/* Under-portrait caption strip */}
      <div className="mt-2.5 sm:mt-3 flex items-center justify-between px-0.5 text-[9.5px] sm:text-[11px]">
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brass/70 animate-pulse flex-shrink-0" />
          <span className="font-sans tracking-widest uppercase text-stone truncate max-w-[150px] sm:max-w-none">
            Public-Sector Leadership
          </span>
        </div>
        <span className="font-mono text-stone/70 flex-shrink-0">
          Scale IV
        </span>
      </div>
    </div>
  );
};
