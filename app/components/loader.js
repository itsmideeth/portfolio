'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Simulate Apple-style "ease-in-out" progress speed
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Slight pause before fade-out for realism
          setTimeout(() => {
            setFinished(true);
            if (onFinish) onFinish();
          }, 600);
          return 100;
        }

        // Easing function: slower at start & end, faster in the middle
        const remaining = 100 - prev;
        const increment =
          remaining > 50
            ? Math.max(1, 4 - prev * 0.03) // accelerate
            : Math.max(0.5, remaining * 0.04); // decelerate

        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Progress Bar */}
          <div className="w-[70%] sm:w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gray-900 dark:bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                ease: [0.4, 0, 0.2, 1],
                duration: 0.3,
              }}
              style={{
                boxShadow:
                  '0 0 10px rgba(0,0,0,0.25), 0 0 15px rgba(255,255,255,0.15)',
              }}
            />
          </div>

          {/* Gentle glow pulse */}
          <motion.div
            className="absolute bottom-[45%] sm:bottom-[47%] w-40 h-2 rounded-full bg-gray-900/10 dark:bg-white/10 blur-lg"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
