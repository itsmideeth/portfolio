"use client";

import { useState } from "react";
import BookingPopup from "./bookingpopup";
import { motion } from "framer-motion";

export default function ScheduleCallButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
     <motion.button
      whileHover={{ scale: 1.05 }}
       onClick={() => setOpen(true)}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer px-6 py-1.5 text-sm rounded-full border-gray-400 text-gray-800 font-medium hover:bg-gray-100 transition-all border-2 inline-block"
    >
      Schedule a call
    </motion.button>

      <BookingPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}


