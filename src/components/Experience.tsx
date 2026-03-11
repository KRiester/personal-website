"use client";

import { motion } from "framer-motion";
import {
  experienceData,
  experienceLabels,
  educationData,
  certificationsData,
} from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-[#3b82f6] uppercase">
            {t(experienceLabels.label)}
          </p>
          <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
            {t(experienceLabels.heading)}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#222] md:left-8" />

          {experienceData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="relative mb-12 pl-8 md:pl-20"
            >
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[#3b82f6] md:left-[28px]" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <h3 className="text-lg font-semibold">{t(item.role)}</h3>
                <span className="text-sm text-[#888]">{t(item.period)}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-[#3b82f6]">
                {item.company}{" "}
                <span className="text-[#666]">/ {t(item.location)}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#888]">
                {t(item.description)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="mb-8 text-xl font-semibold">
            {t(experienceLabels.educationHeading)}
          </h3>
          <div className="space-y-4">
            {educationData.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#222] bg-[#111] p-6"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="font-semibold">{t(item.institution)}</h4>
                  <span className="text-sm text-[#888]">{t(item.period)}</span>
                </div>
                <p className="mt-1 text-sm text-[#888]">{t(item.degree)}</p>
                <p className="mt-2 text-sm font-medium text-[#3b82f6]">
                  {t(item.note)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="mb-6 text-xl font-semibold">
            {t(experienceLabels.certificationsHeading)}
          </h3>
          <div className="flex flex-wrap gap-3">
            {certificationsData.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-[#222] bg-[#111] px-4 py-2 text-sm text-[#ccc]"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
