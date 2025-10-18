"use client";

import Link from "next/link";
import Avatar from "./avatar";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/itsmideeth", icon: <FiGithub size={17} />, label: "GitHub" },
    { href: "https://linkedin.com/in/itsmideeth", icon: <FiLinkedin size={17} />, label: "LinkedIn" },
    { href: "https://twitter.com/itsmideeth", icon: <FiTwitter size={17} />, label: "Twitter" },
    { href: "mailto:ajilogbaayomide34@gmail.com", icon: <FiMail size={17} />, label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-white dark:bg-gray-950 py-7 sm:py-5"
    >
      <div
        className="flex flex-col items-center justify-between max-w-6xl gap-4 px-6 mx-auto text-center sm:flex-row sm:gap-3 sm:text-left"
      >
        {/* Avatar + Name */}
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Avatar size={28} />
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 sm:mt-0">
            © {new Date().getFullYear()} Ajilogba Ayomide
          </p>
        </div>

        {/* Social Icons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          variants={containerVariants}
        >
          {socialLinks.map(({ href, icon, label }) => (
            <motion.div
              key={label}
              variants={iconVariants}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-gray-600 transition-colors dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                {icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}
