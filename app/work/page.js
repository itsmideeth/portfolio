"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  { company: "CodSoft", role: "Frontend Developer Intern", link: "#" },
  { company: "MyReader", role: "Full-Stack Developer", link: "#" },
  { company: "RhicsTech", role: "Full-Stack Developer", link: "#" },
  { company: "Lokafy", role: "Frontend Developer", link: "#" },
];

export default function WorkExperience() {
  return (
    <section
      className="px-4 py-6 transition-colors duration-300 bg-white sm:px-6 lg:px-8 dark:bg-[#121212]"
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-left text-gray-900 dark:text-gray-100">
            Work Experience
          </h2>
          <p className="mt-3 text-sm text-left text-gray-600 sm:text-base dark:text-gray-400 ">
            Places I have worked at (Full-time and Contractor)
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15, // staggered entry
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 transition-all duration-300 border border-gray-100 dark:border-0 shadow-sm rounded-2xl hover:shadow-md hover:-translate-y-1 dark:bg-[#1E1E1E]"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-none p-3 bg-gray-100 dark:bg-black/50 border dark:border-0 border-gray-100 rounded-xl dark:border-gray-700">
                  <Briefcase className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    {exp.company}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {exp.role}
                  </p>

                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-gray-200 mt-5 hover:text-black transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Website
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
