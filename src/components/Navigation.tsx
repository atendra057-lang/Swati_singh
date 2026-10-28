"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Overview", href: "#hero", id: "hero" },
  { label: "Profile", href: "#profile", id: "profile" },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Career", href: "#career", id: "career" },
  { label: "Leadership", href: "#leadership", id: "leadership" },
  { label: "Recognition", href: "#recognition", id: "recognition" },
  { label: "Credentials", href: "#qualifications", id: "qualifications" },
];

export const Navigation: React.FC = () => {
  const { identity } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-midnight/95 backdrop-blur-md border-b border-brass/20 py-3 shadow-lg shadow-midnight/50"
          : "bg-transparent py-4 sm:py-6"
      }`}
      role="banner"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Typographic Identity */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-brass py-0.5"
          aria-label={`${identity.fullName} - Return to Overview`}
        >
          <span className="font-serif text-base sm:text-xl font-medium tracking-[0.14em] sm:tracking-[0.18em] text-ivory group-hover:text-brass transition-colors uppercase">
            {identity.fullName}
          </span>
          <span className="font-sans text-[8.5px] sm:text-[10px] tracking-widest uppercase text-brass/80 group-hover:text-brass transition-colors">
            {identity.subDesignation}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-9"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative font-sans text-xs tracking-wider uppercase transition-colors duration-200 py-1 ${
                  isActive
                    ? "text-brass font-medium"
                    : "text-stone hover:text-ivory"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brass transition-all duration-300" />
                )}
              </a>
            );
          })}

          {/* Institutional Status Badge */}
          <div className="pl-3 border-l border-brass/25 hidden xl:flex items-center space-x-2 text-[11px] text-stone tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 inline-block" />
            <span>Chief Manager</span>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ivory hover:text-brass focus:outline-none focus:ring-1 focus:ring-brass rounded"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-[56px] bg-midnight/98 border-b border-brass/30 backdrop-blur-xl px-6 py-8 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-brass/15 flex items-center justify-between">
              <span className="font-sans text-[10px] tracking-widest uppercase text-brass">
                Executive Index
              </span>
              <span className="text-[10px] font-mono text-stone">
                Scale IV • Public Banking
              </span>
            </div>

            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between py-2.5 text-base tracking-wide transition-colors ${
                    isActive
                      ? "text-brass font-serif font-medium pl-2 border-l-2 border-brass"
                      : "text-ivory hover:text-brass font-serif"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone/60" />
                </a>
              );
            })}

            <div className="pt-4 border-t border-brass/15 text-xs text-stone leading-relaxed">
              <p className="font-serif italic text-ivory/80">
                &ldquo;Sound judgement. Steady leadership. Enduring trust.&rdquo;
              </p>
              <p className="text-[10px] text-stone mt-1">
                Official Portfolio of Swati Singh
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
