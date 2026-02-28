"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-[#3b82f6] uppercase">
            Projects
          </p>
          <h2 className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
            Selected work
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl border border-[#222] bg-[#111] p-6 transition-colors hover:border-[#333] hover:bg-[#1a1a1a]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium tracking-wider text-[#666] uppercase">
                  {project.year}
                </span>
                <svg
                  className="h-4 w-4 text-[#444] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#3b82f6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#888]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#1a1a1a] px-3 py-1 text-xs text-[#888] group-hover:bg-[#222] group-hover:text-[#aaa]"
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
