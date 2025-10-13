"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-4"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-8"
      >
        Get to know me better
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4 text-gray-800 leading-relaxed"
      >
        <p>
          I`&apos;`m <span className="font-semibold">Ajilogba Ayomide</span>, a
          dedicated <span className="font-semibold">FullStack Developer</span> with
          a Bachelor`&apos;`s degree in{" "}
          <span className="font-semibold">Transport Management</span>, passionate
          about building innovative, efficient software solutions. With expertise
          across both <span className="font-semibold">backend</span> and{" "}
          <span className="font-semibold">frontend development</span>, I deliver
          robust applications that blend user-focused design with reliable
          functionality.
        </p>

        <p>
          I work primarily with{" "}
          <span className="font-semibold">Next JS, Express, Mongo DB and Node</span>,
          complemented by my experience in{" "}
          <span className="font-semibold">Tailwind and React</span>,
          ensuring scalable, resilient solutions that meet modern demands.
        </p>

        <p>
          Beyond coding, I enjoy sharing insights from my learning journey,
          engaging with the tech community on Twitter, and occasionally unwinding
          with YouTube or video games.
        </p>
      </motion.div>
    </section>
  );
}
