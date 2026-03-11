"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-[#3b82f6] uppercase">
            {t(aboutData.label)}
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t(aboutData.headline)}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 max-w-2xl text-lg leading-relaxed text-[#888]"
        >
          {t(aboutData.description)}
        </motion.p>

        <div className="grid gap-3 sm:grid-cols-2">
          {aboutData.highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex items-center gap-3 rounded-lg border border-[#222] bg-[#111] px-4 py-3"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
              <span className="text-sm text-[#ccc]">{t(item)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
