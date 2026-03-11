"use client";

import { motion } from "framer-motion";
import { focusData } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

export default function Focus() {
  const { t } = useLanguage();

  return (
    <section id="focus" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-[#3b82f6] uppercase">
            {t(focusData.label)}
          </p>
          <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
            {t(focusData.heading)}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {focusData.areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-xl border border-[#222] bg-[#111] p-6 transition-colors hover:border-[#333] hover:bg-[#1a1a1a]"
            >
              <h3 className="mb-3 text-lg font-semibold tracking-tight">
                {t(area.title)}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#888]">
                {t(area.description)}
              </p>

              <div className="flex flex-wrap gap-2">
                {t(area.tags).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#1a1a1a] px-3 py-1 text-xs text-[#888]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
