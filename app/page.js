"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScheduleCallButton from "./components/schedulecallbutton";
import InfoDisplay from "./components/infodisplay";
import DayMessage from "./components/daymessage";

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
      
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);


  return (
<main
  className="
    flex flex-col items-center justify-center
    min-h-[55vh]
    py-6
    text-center text-gray-900 dark:text-white bg-white dark:bg-[#121212]
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
      className="mt-5 text-[#151515] dark:text-white text-3xl font-semibold tracking-tight md:text-4xl"
    >
      Ajilogba Abdulrahmon
    </motion.h1>

    {/* Title */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-3 text-base font-medium text-gray-500 dark:text-[#ededed] sm:text-lg md:text-xl"
    >
      Full-Stack Developer
    </motion.p>
<InfoDisplay/>
<DayMessage />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="flex flex-wrap justify-center gap-4 mt-10"
    >
      <motion.a
        href="/about"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 sm:py-2.5 rounded-full text-white font-medium shadow-sm transition-all text-sm bg-[#151515] dark:bg-white dark:text-[#151515]" 
      >
        About me
      </motion.a>
      <ScheduleCallButton />
    </motion.div>
  </motion.section>
</main>


  );
}
