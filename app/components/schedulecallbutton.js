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
      className="inline-block px-6 py-2 text-sm font-medium text-gray-800 transition-all border-2 border-[#151515] rounded-full cursor-pointer hover:bg-gray-100"
    >
      Schedule a call
    </motion.button>

      <BookingPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}


