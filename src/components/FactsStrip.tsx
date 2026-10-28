"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export const FactsStrip: React.FC = () => {
  const { facts } = portfolioData;

  return (
    <section
      className="relative bg-midnight-dark text-ivory border-y border-brass/25 py-16 sm:py-20 overflow-hidden"
      aria-label="Professional at a Glance"
    >
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {facts.map((fact, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between py-2 sm:py-4 ${
                index !== 0
                  ? "lg:border-l lg:border-brass/20 lg:pl-8 xl:pl-10"
                  : "lg:pr-8 xl:pr-10"
              }`}
            >
              {/* Stat Numerics with deliberate serif precision */}
              <div className="mb-4">
                <span className="font-serif text-5xl sm:text-6xl xl:text-7xl font-light text-ivory tracking-tight block">
                  {fact.numeric}
                </span>
                <div className="w-12 h-[1px] bg-brass/50 mt-2 mb-3" />
              </div>

              {/* Stat Labels */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-brass mb-1.5 leading-snug">
                  {fact.label}
                </h3>
                <p className="font-sans text-xs text-stone font-light">
                  {fact.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

