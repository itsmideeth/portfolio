"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="max-w-6xl px-4 py-3 mx-auto text-gray-800 transition-colors duration-300 sm:px-6 lg:px-8 dark:text-gray-100">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-3xl font-bold lg:text-left"
      >
        About Me
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-base text-gray-600 sm:text-sm dark:text-gray-400 lg:text-left "
      >
        Get to know me better
      </motion.p>

      {/* Body */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-3 text-sm leading-relaxed sm:text-base sm:leading-loose lg:text-left"
      >
        <p>
          I&apos;m <span className="font-semibold">Ajilogba Ayomide</span>, a
          dedicated <span className="font-semibold">Full-Stack Developer</span> with
          a Bachelor&apos;s degree in{" "}
          <span className="font-semibold">Transport Management</span>. I’m
          passionate about building innovative and efficient software solutions
          that merge usability with performance.
        </p>

        <p>
          My main tech stack includes{" "}
          <span className="font-semibold">Next.js, Node.js, Express, and MongoDB</span>,
          paired with modern tools like{" "}
          <span className="font-semibold">React and Tailwind CSS</span> to create
          fast, scalable, and visually consistent applications.
        </p>

        <p>
          Beyond coding, I enjoy sharing insights from my learning journey,
          connecting with other developers on social platforms, and unwinding with
          YouTube or video games.
        </p>
      </motion.div>
    </section>
  );
}
