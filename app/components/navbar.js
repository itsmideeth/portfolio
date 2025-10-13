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
  const { theme, setTheme } = useTheme();
  const [avatar, setAvatar] = useState(null);

  // Fetch GitHub avatar dynamically
  useEffect(() => {
    let interval;

    async function fetchAvatar() {
      try {
        const res = await fetch("https://api.github.com/users/itsmideeth", {
          cache: "no-store",
        });
        const data = await res.json();
        if (data.avatar_url) setAvatar(data.avatar_url);
      } catch (error) {
        console.error("Error fetching GitHub avatar:", error);
      }
    }

    fetchAvatar();
    interval = setInterval(fetchAvatar, 30000);
    setMounted(true);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 dark:bg-gray-950/80 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left side: Avatar + Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#0077B6]/20 shadow-sm transition-all duration-300 group-hover:ring-[#0077B6]/40"
          >
            {avatar ? (
    <Image
      src={avatar || "/avatar.jpg"}
      alt="GitHub Avatar"
      fill
      className="object-cover"
      priority
    />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs animate-pulse">
                ...
              </div>
            )}
          </motion.div>
          <span className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 font-xs">
            Abdulrahmon
          </span>
        </Link>

        {/* Right side: Theme toggle & menu button */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Animated mobile menu */}
      {open && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 w-screen h-screen bg-black/30 backdrop-blur-md z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-2xl rounded-2xl"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, type: 'spring', stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 pt-12 pb-6 flex flex-col text-sm gap-4 min-w-[220px]">
                {[
                  { href: '/', label: 'Home', icon: Home,  },
                  { href: '/about', label: 'About', icon: User },
                  { href: '/work', label: 'Work', icon: Briefcase },
                  { href: '/projects', label: 'Projects', icon: FolderOpen },
                  { href: '/blog', label: 'Blog', icon: BookOpen },
                  { href: '/resume', label: 'Resume', icon: FileText },
                ].map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-800 pr-76 p-3 rounded-lg transition-all hover:translate-x-1 text-gray-600 dark:text-gray-300"
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </nav>
  );
}
