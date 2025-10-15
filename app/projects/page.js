"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const projects = [
  {
    title: "PigGame",
    stack: "Javascript + HTML + CSS",
    description:
      "A simple two-player dice game where players roll to earn points but risk losing their turn if they roll a one. The first to reach 100 wins",
    link: "https://pig-game-sand.vercel.app/",
  },
  {
    title: "Bankist",
    stack: "HTML + CSS + Javascript",
    description:
      "A clean, modern banking landing page showcasing digital banking features and a smooth, interactive user experience.",
    link: "https://bankist-landing-page-five.vercel.app/",
  },
  {
    title: "MovieBox",
    stack: "React + CSS + Movie Database API",
    description:
      "A movie discovery app that lets users search for films, view details like trailers and overviews, and browse popular or top-rated titles.",
    link: "https://stage-two-task-two.vercel.app/",
  },
  {
    title: "EasyAnalytics",
    stack: "Google Cloud + Nextjs + OpenAI",
    description: "A tool that helps you analyze your Google data easily.",
    link: "#",
  },
  {
    title: "EmailGen",
    stack: "Nextjs + Supabase + OpenAI",
    description:
      "A tool that generates emails, letters, statements and more with AI.",
    link: "#",
  },
  {
    title: "Voxu",
    stack: "Python + Javascript + SQL + Flask + OpenAI",
    description:
      "A Python package that provides request handling and AI integrations.",
    link: "#",
  },
];

// Motion Variants for smooth stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between children
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 py-8 text-gray-900 transition-colors duration-300 bg-white dark:bg-gray-950 dark:text-gray-100 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* ======= HEADER ======= */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-4 text-3xl font-semibold ">
            Projects
          </h1>
          <p className="mb-12 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            A few interesting things I have built or contributed to
          </p>
        </motion.div>

        {/* ======= PROJECT GRID (with stagger animation) ======= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="p-6 transition-all bg-white border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-md dark:bg-gray-900 hover:-translate-y-1"
            >
              <h2 className="mb-1 font-semibold">
                {project.title}
              </h2>
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                {project.stack}
              </p>
              <p className="text-sm leading-relaxed text-gray-600 mb-7 dark:text-gray-300 ">
                {project.description}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors dark:text-gray-200 hover:text-black dark:hover:text-blue-400"
              >
                <Eye size={16} /> View Project
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* ======= CTA SECTION ======= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 text-center sm:mt-24"
        >
          <h2 className="mb-2 text-lg font-semibold">
            Interested in working together?
          </h2>
          <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="inline-block px-5 py-2 text-base font-medium text-white transition-all bg-black rounded-md dark:bg-gray-100 dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            Schedule a Call
          </motion.a>
        </motion.div>
      </div>
    </motion.main>
  );
}
