import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProfessionalProfile } from "@/components/ProfessionalProfile";
import { FactsStrip } from "@/components/FactsStrip";
import { CoreExpertise } from "@/components/CoreExpertise";
import { CareerJourney } from "@/components/CareerJourney";
import { LeadershipSection } from "@/components/LeadershipSection";
import { RecognitionSection } from "@/components/RecognitionSection";
import { QualificationsSection } from "@/components/QualificationsSection";
import { ClosingStatement } from "@/components/ClosingStatement";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-ivory relative overflow-x-hidden selection:bg-brass/25 selection:text-ivory">
      {/* 01: Executive Navigation */}
      <Navigation />

      {/* 02: Hero Section */}
      <Hero />

      {/* 03: The Professional Profile */}
      <ProfessionalProfile />

      {/* 04: The Professional at a Glance */}
      <FactsStrip />

      {/* 05: Core Expertise */}
      <CoreExpertise />

      {/* 06: The Career Journey */}
      <CareerJourney />

      {/* 07: Leadership & Professional Responsibility */}
      <LeadershipSection />

      {/* 08: Professional Recognition */}
      <RecognitionSection />

      {/* 09: Professional Qualifications */}
      <QualificationsSection />

      {/* 10: Closing Statement */}
      <ClosingStatement />

      {/* 11: Footer & Institutional Distinction */}
      <Footer />
    </main>
  );
}
