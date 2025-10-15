"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScheduleCallButton from "./components/schedulecallbutton";

export default function Home() {
  const [avatar, setAvatar] = useState(null);
  const [info, setInfo] = useState({});
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Fetch GitHub, location, weather, and time
  useEffect(() => {
    const fetchData = async () => {
      try {
        const github = await fetch("https://api.github.com/users/itsmideeth");
        const githubData = await github.json();
        setAvatar(githubData.avatar_url);

        const locRes = await fetch("https://ipapi.co/json/");
        const loc = await locRes.json();
        const { city, country_name, latitude, longitude } = loc;

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weatherData = await weatherRes.json();
        const temp = weatherData.current_weather?.temperature;

        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        const day = now.toLocaleDateString([], { weekday: "long" });
        const hour = now.getHours();

        let emoji = "🔥";
        if (hour >= 5 && hour < 11) emoji = "🌅";
        else if (hour >= 11 && hour < 17) emoji = "🌤️";
        else if (hour >= 17 && hour < 21) emoji = "🌆";
        else emoji = "🌙";

        setInfo({ city, country: country_name, temp, time, day, emoji });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  // Typing animation
  useEffect(() => {
    if (!info.city || !info.time) return;
    const fullText = `${info.city}, ${info.country} • ${info.time} • ${info.temp}°C`;

    setIsTyping(true);
    setDisplayText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [info]);

  return (
<main
  className="
    flex flex-col items-center justify-center
    min-h-[55vh]
    py-20
    text-center text-gray-900 bg-white
  "
>
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    className="flex flex-col items-center mt-6 sm:mt-8 md:mt-10"
  >
    {/* Avatar */}
    <motion.div
      whileHover={{ scale: 1.08, rotate: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md ring-2 ring-gray-100 hover:ring-[#0077B6]/40 cursor-pointer"
    >
      {avatar ? (
        <Image src={avatar} alt="GitHub Avatar" fill className="object-cover" priority />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-sm text-gray-400 bg-gray-100 sm:text-base animate-pulse">
          Loading...
        </div>
      )}
    </motion.div>

    {/* Name */}
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
    >
      Ajilogba Abdulrahmon
    </motion.h1>

    {/* Title */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-2 text-base font-medium text-gray-500 sm:text-lg md:text-xl"
    >
      Full-Stack Developer
    </motion.p>

    {/* Info line */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="gap-16 mt-5 font-mono text-xs text-gray-600 sm:text-sm md:text-base"
    >
      {displayText}{" "}
      {!isTyping && (
        <motion.span
          key={info.emoji}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {info.emoji}
        </motion.span>
      )}
    </motion.div>

    {/* Day message */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="mt-2 text-xs text-gray-500 sm:text-sm md:text-base"
    >
      Have a nice {info.day} {info.emoji}
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="flex flex-wrap justify-center gap-4 mt-8 sm:mt-10"
    >
      <motion.a
        href="/about"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 sm:px-8 sm:py-2.5 rounded-full bg-gray-900 text-white font-medium shadow-sm hover:bg-gray-800 transition-all text-sm sm:text-base"
      >
        About me
      </motion.a>
      <ScheduleCallButton />
    </motion.div>
  </motion.section>
</main>


  );
}
