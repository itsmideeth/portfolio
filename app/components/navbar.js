'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Home,
  User,
  Briefcase,
  FolderOpen,
  BookOpen,
  FileText
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [avatar, setAvatar] = useState(null);

useEffect(() => {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = storedTheme === 'dark';

  if (prefersDark) {
    document.body.classList.add('dark');
    setIsDark(true);
  } else {
    document.body.classList.remove('dark');
    setIsDark(false);
  }
}, []);

const toggleTheme = () => {
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
  localStorage.setItem('theme', newTheme);
  setIsDark(!isDark);
};


  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [open]);

  // Fetch GitHub avatar
  useEffect(() => {
    let interval;
    async function fetchAvatar() {
      try {
        const res = await fetch('https://api.github.com/users/itsmideeth', {
          cache: 'no-store',
        });
        const data = await res.json();
        if (data.avatar_url) setAvatar(data.avatar_url);
      } catch (error) {
        console.error('Error fetching GitHub avatar:', error);
      }
    }
    fetchAvatar();
    interval = setInterval(fetchAvatar, 30000);
    setMounted(true);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed z-[9999] w-full border-b border-gray-200 dark:border-0 bg-white/90 backdrop-blur-md dark:backdrop-blur-xs dark:bg-[#121212] transition-all duration-300">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto sm:px-6 sm:py-4">

        {/* Left side: Avatar + Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-[#0077B6]/20 shadow-sm transition-all duration-300 group-hover:ring-[#0077B6]/40"
          >
            {avatar ? (
              <Image
                src={avatar || '/avatar.jpg'}
                alt="GitHub Avatar"
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-xs text-gray-400 bg-gray-100 animate-pulse">
                ...
              </div>
            )}
          </motion.div>
          <span className="text-sm font-semibold text-gray-800 transition-colors duration-200 dark:text-gray-200 sm:text-base">
            Abdulrahmon
          </span>
        </Link>

        {/* Right side: Theme toggle & menu button */}
        <div className="flex items-center gap-4 text-sm">
          <button
             onClick={toggleTheme}
            className="p-2 transition-colors rounded-lg dark:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="p-2 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-white"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center w-screen h-screen bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative z-[100000] bg-white dark:bg-gray-900/95 border border-gray-200 dark:border-0 shadow-2xl dark:shadow-sm rounded-2xl w-[90%] max-w-sm sm:max-w-md"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, type: 'spring', stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-5 sm:px-6 pt-10 sm:pt-12 pb-6 flex flex-col text-sm gap-3 sm:gap-4 min-w-[200px] sm:min-w-[220px] dark:bg-[#1E1E1E] rounded-lg">
                {[
                  { href: '/', label: 'Home', icon: Home },
                  { href: '/about', label: 'About', icon: User },
                  { href: '/work', label: 'Work', icon: Briefcase },
                  { href: '/projects', label: 'Projects', icon: FolderOpen },
                  { href: '/blog', label: 'Blog', icon: BookOpen },
                  { href: '/ayomide.pdf', target: "_blank", external: true, label: 'Resume', icon: FileText },
                ].map(({ href, label, icon: Icon, external }) =>
                  external ? (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center p-3 space-x-3 text-gray-700 transition-all rounded-lg dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-black/30"
                    >
                      <Icon size={18} className="text-current" />
                      <span>{label}</span>
                    </a>
                  ) : (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center p-3 space-x-3 text-gray-700 transition-all rounded-lg dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-black/30 hover:translate-x-1"
                    >
                      <Icon size={18} className="text-current" />
                      <span>{label}</span>
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
