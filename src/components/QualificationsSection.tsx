"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, BookCheck } from "lucide-react";

export const QualificationsSection: React.FC = () => {
  const { qualifications } = portfolioData;

  const getCredentialIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BookCheck className="w-5 h-5 text-brass" />;
      case 1:
        return <Award className="w-5 h-5 text-brass" />;
      default:
        return <GraduationCap className="w-5 h-5 text-brass" />;
    }
  };

  return (
    <section
      id="qualifications"
      className="relative py-24 sm:py-32 bg-midnight-light text-ivory border-t border-brass/20 overflow-hidden"
      aria-label="Professional Qualifications"
    >
      {/* Background linework */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="border-b border-brass/20 pb-8 mb-14 sm:mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1.5px] bg-brass inline-block" />
            <span className="font-sans text-xs tracking-ultra uppercase text-brass font-semibold">
              {qualifications.sectionLabel}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal tracking-tight">
              {qualifications.heading}
            </h2>
            <p className="font-sans text-sm sm:text-base text-stone font-light max-w-md">
              {qualifications.supportingText}
            </p>
          </div>
        </div>

        {/* 3 Horizontal Credential Bands */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {qualifications.items.map((item, index) => (
            <div
              key={item.id}
              className="bg-midnight/90 border border-brass/20 p-8 flex flex-col justify-between hover:border-brass/60 transition-all duration-300 relative group"
            >
              {/* Corner tick */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brass/40" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-brass/15 mb-6">
                  <div className="w-10 h-10 border border-brass/30 bg-oxblood/30 flex items-center justify-center">
                    {getCredentialIcon(index)}
                  </div>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-stone font-mono">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal tracking-wide mb-2 group-hover:text-brass transition-colors">
                  {item.title}
                </h3>

                {item.subTitle && (
                  <p className="font-sans text-xs text-stone-light mb-4 font-light">
                    {item.subTitle}
                  </p>
                )}
              </div>

              {item.accreditedBy && (
                <div className="mt-6 pt-4 border-t border-brass/15 flex items-center justify-between text-xs">
                  <span className="text-stone font-light">Accreditation:</span>
                  <span className="font-sans text-brass font-medium">
                    {item.accreditedBy}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary note */}
        <div className="mt-12 pt-6 border-t border-brass/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone gap-3">
          <span>Official banking certifications certified by accredited institutions.</span>
          <span className="font-mono text-stone/80">Continuous Professional Development</span>
        </div>
      </div>
    </section>
  );
};

