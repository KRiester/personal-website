"use client";

import { motion } from "framer-motion";
import { siteConfig, heroData } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-gradient absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-transparent blur-3xl" />
        <div className="animate-gradient absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-blue-500/15 via-cyan-500/10 to-transparent blur-3xl [animation-delay:4s]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium tracking-[0.3em] text-[#888] uppercase"
        >
          {t(siteConfig.title)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="#about"
            className="group flex items-center gap-2 text-sm text-[#888] transition-colors hover:text-white"
          >
            {t(heroData.explore)}
            <span className="inline-block transition-transform group-hover:translate-y-0.5">
              &darr;
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-[#333] p-1"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-[#888]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
