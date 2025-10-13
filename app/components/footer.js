"use client";

import Link from "next/link";
import Avatar from "./avatar";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  const socialLinks = [
     {
      href: "https://github.com/itsmideeth",
      icon: <FiGithub size={17} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/",
      icon: <FiLinkedin size={17} />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/",
      icon: <FiTwitter size={17} />,
      label: "Twitter",
    },
    {
      href: "mailto:ajilogbaayomide34@gmail.com",
      icon: <FiMail size={17} />,
      label: "Email",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-24 bg-white py-8 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
     
        <div className="flex items-center gap-3">
            <Avatar size={28} />
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Ajilogba Ayomide
          </p>
        </div>

        {/* Outlined Social Icons */}
        <motion.div
          className="flex items-center gap-4"
          variants={containerVariants}
        >
          {socialLinks.map(({ href, icon, label }) => (
            <motion.div
              key={label}
              variants={iconVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-gray-600 hover:text-[#101010] transition-colors"
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

