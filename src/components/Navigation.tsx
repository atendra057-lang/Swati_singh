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
  { label: "Recognition", href: "#recognition", id: "recognition" },
  { label: "Credentials", href: "#qualifications", id: "qualifications" },
];

export const Navigation: React.FC = () => {
  const { identity } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 180;
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
      const navOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-midnight/95 backdrop-blur-md border-b border-brass/20 py-2.5 sm:py-3 shadow-lg shadow-midnight/60"
          : "bg-midnight/60 backdrop-blur-sm sm:bg-transparent py-3.5 sm:py-5 lg:py-6"
      }`}
      role="banner"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Typographic Identity */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-brass py-1"
          aria-label={`${identity.fullName} - Return to Overview`}
        >
          <span className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-[0.14em] sm:tracking-[0.18em] text-ivory group-hover:text-brass transition-colors uppercase leading-tight">
            {identity.fullName}
          </span>
          <span className="font-sans text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-widest uppercase text-brass/80 group-hover:text-brass transition-colors">
            {identity.subDesignation}
          </span>
        </a>

        {/* Desktop & Tablet Navigation */}
        <nav
          className="hidden md:flex items-center space-x-4 lg:space-x-7 xl:space-x-8"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative font-sans text-[11px] lg:text-xs tracking-wider uppercase transition-colors duration-200 py-1.5 px-1 min-h-[36px] flex items-center ${
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

          {/* Institutional Status Badge (Visible on large tablet & desktop) */}
          <div className="pl-3 border-l border-brass/25 hidden lg:flex items-center space-x-2 text-[11px] text-stone tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 inline-block" />
            <span>Chief Manager</span>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 -mr-1.5 text-ivory hover:text-brass focus:outline-none focus:ring-1 focus:ring-brass rounded min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brass" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[56px] bg-midnight-dark/80 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-[56px] bg-midnight border-b border-brass/30 px-5 sm:px-6 py-6 shadow-2xl z-50 max-h-[calc(100vh-56px)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-2">
            <div className="pb-3 border-b border-brass/15 flex items-center justify-between">
              <span className="font-sans text-[10px] tracking-widest uppercase text-brass font-medium">
                Executive Index
              </span>
              <span className="text-[10px] font-mono text-stone">
                Chief Manager • Public Banking
              </span>
            </div>

            <div className="py-2 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between py-3 px-3 text-base tracking-wide transition-all min-h-[48px] rounded ${
                      isActive
                        ? "text-brass font-serif font-medium bg-midnight-light border-l-2 border-brass"
                        : "text-ivory hover:text-brass hover:bg-midnight-light/50 font-serif"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? "text-brass" : "text-stone/60"}`} />
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-brass/15 text-xs text-stone leading-relaxed">
              <p className="font-serif italic text-ivory/80 text-sm">
                &ldquo;Sound judgement. Steady leadership. Enduring trust.&rdquo;
              </p>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-brass/10 text-[10px] text-stone">
                <span>Swati Singh</span>
                <span className="font-mono text-brass/80">Scale IV</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
