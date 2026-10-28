"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const { identity, footer } = portfolioData;

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-midnight-dark text-stone border-t border-brass/20 py-10 sm:py-12 md:py-16"
      role="contentinfo"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 sm:pb-10 border-b border-brass/10">
          {/* Identity */}
          <div>
            <span className="font-serif text-base sm:text-lg tracking-[0.16em] uppercase text-ivory block mb-1">
              {identity.fullName}
            </span>
            <p className="font-sans text-[11px] sm:text-xs tracking-wider uppercase text-brass/80">
              {identity.designation} • {identity.neutralSectorName}
            </p>
          </div>

          {/* Back to top anchor */}
          <div>
            <a
              href="#hero"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-xs font-sans tracking-widest uppercase text-stone hover:text-brass transition-colors focus:outline-none focus:ring-1 focus:ring-brass py-2 px-3 min-h-[44px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Institutional Distinction & Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 text-[10.5px] sm:text-[11px] leading-relaxed text-stone/80">
          <p className="max-w-2xl font-light">
            <strong className="font-medium text-stone">Institutional Distinction: </strong>
            {footer.disclaimer}
          </p>

          <p className="font-mono text-stone/60 text-[10px] sm:text-[11px] flex-shrink-0">
            Portfolio Record: 2010 – 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
