"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, BookCheck } from "lucide-react";

export const QualificationsSection: React.FC = () => {
  const { qualifications } = portfolioData;

  const getCredentialIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BookCheck className="w-4 sm:w-5 h-4 sm:h-5 text-brass" />;
      case 1:
        return <Award className="w-4 sm:w-5 h-4 sm:h-5 text-brass" />;
      default:
        return <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-brass" />;
    }
  };

  return (
    <section
      id="qualifications"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-midnight-light text-ivory border-t border-brass/20 overflow-hidden"
      aria-label="Professional Qualifications"
    >
      {/* Background linework */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-brass/20 pb-6 sm:pb-8 mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-2.5 sm:mb-3">
            <span className="w-5 sm:w-6 h-[1.5px] bg-brass inline-block" />
            <span className="font-sans text-[11px] sm:text-xs tracking-ultra uppercase text-brass font-semibold">
              {qualifications.sectionLabel}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory font-normal tracking-tight">
              {qualifications.heading}
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-stone font-light max-w-md">
              {qualifications.supportingText}
            </p>
          </div>
        </div>

        {/* 3 Credential Bands */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {qualifications.items.map((item, index) => (
            <div
              key={item.id}
              className="bg-midnight/90 border border-brass/20 p-5 sm:p-6 md:p-6 lg:p-8 flex flex-col justify-between hover:border-brass/60 transition-all duration-300 relative group"
            >
              {/* Corner tick */}
              <div className="absolute top-0 right-0 w-3.5 sm:w-4 h-3.5 sm:h-4 border-t border-r border-brass/40" />

              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-brass/15 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 border border-brass/30 bg-oxblood/30 flex items-center justify-center">
                    {getCredentialIcon(index)}
                  </div>
                  <span className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-stone font-mono">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-ivory font-normal tracking-wide mb-1.5 sm:mb-2 group-hover:text-brass transition-colors">
                  {item.title}
                </h3>

                {item.subTitle && (
                  <p className="font-sans text-xs text-stone-light mb-3 sm:mb-4 font-light leading-relaxed">
                    {item.subTitle}
                  </p>
                )}
              </div>

              {item.accreditedBy && (
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-brass/15 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="text-stone font-light text-[11px] sm:text-xs">Accreditation:</span>
                  <span className="font-sans text-brass font-medium text-[11px] sm:text-xs">
                    {item.accreditedBy}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary note */}
        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-brass/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone gap-2 sm:gap-3">
          <span className="text-[11px] sm:text-xs">Official banking certifications certified by accredited institutions.</span>
          <span className="font-mono text-stone/80 text-[10px] sm:text-[11px]">Continuous Professional Development</span>
        </div>
      </div>
    </section>
  );
};
