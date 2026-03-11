"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-[#222]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">
            KR
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-white ${
                  activeSection === item.href
                    ? "text-white"
                    : "text-[#888]"
                }`}
              >
                {t(item.label)}
              </a>
            ))}

            <div className="flex items-center gap-0.5 rounded-full border border-[#222] bg-[#111] p-0.5">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                  lang === "en"
                    ? "bg-[#3b82f6] text-white"
                    : "text-[#888] hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("de")}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                  lang === "de"
                    ? "bg-[#3b82f6] text-white"
                    : "text-[#888] hover:text-white"
                }`}
              >
                DE
              </button>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#050505]/95 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-light text-white transition-colors hover:text-[#3b82f6]"
              >
                {t(item.label)}
              </a>
            ))}

            <div className="mt-4 flex items-center gap-1 rounded-full border border-[#222] bg-[#111] p-1">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  lang === "en"
                    ? "bg-[#3b82f6] text-white"
                    : "text-[#888]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("de")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  lang === "de"
                    ? "bg-[#3b82f6] text-white"
                    : "text-[#888]"
                }`}
              >
                DE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
