'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DayMessage() {
  const [info, setInfo] = useState({
    day: "",
    emoji: "🌞",
    message: "Have a nice",
  });

  const updateMessage = () => {
    const now = new Date();
    const dayName = now.toLocaleDateString("en-US", { weekday: "long" });

    const dayEmojis = {
      Monday: "💼",
      Tuesday: "🔥",
      Wednesday: "🌿",
      Thursday: "🌟",
      Friday: "🎉",
      Saturday: "🎯",
      Sunday: "☕",
    };

    setInfo({
      day: dayName,
      emoji: dayEmojis[dayName] || "🌞",
      message: "Have a nice",
    });
  };

  useEffect(() => {
    updateMessage();
    const interval = setInterval(updateMessage, 60 * 60 * 1000); // update hourly
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="mt-2 mb-4 text-base text-gray-600 transition-colors duration-300 dark:text-gray-300"
    >
      {info.message}{" "}
      <span className="font-medium text-gray-700 dark:text-gray-100">
        {info.day}
      </span>{" "}
      {info.emoji}
    </motion.p>
  );
}
