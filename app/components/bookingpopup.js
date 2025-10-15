"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Globe } from "lucide-react";

export default function SchedulePopup({ isOpen, onClose }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const dates = [
    { day: 14 },
    { day: 16 },
    { day: 17 },
    { day: 18 },
    { day: 19 },
    { day: 21 },
    { day: 23 },
    { day: 24 },
  ];
  const times = ["6:30pm", "7:00pm", "7:30pm"];

  const handleBackgroundClick = (e) => {
    if (e.target.id === "popup-overlay") onClose();
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      onClose();
      setConfirmed(false);
      setSelectedDay(null);
      setSelectedTime(null);
    }, 2500);
  };

  return (
    <div
      id="popup-overlay"
      onClick={handleBackgroundClick}
      className="fixed inset-0 z-[9999] flex justify-center items-center bg-black/40 dark:bg-black/60 backdrop-blur-sm px-4 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-900 w-full max-w-[850px] rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side */}
        <div className="flex flex-col justify-between p-6 border-b border-gray-200 sm:p-8 md:border-b-0 md:border-r dark:border-gray-700">
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Ayomide Ajilogba
            </h2>
            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              Quick Connect with Ayomide
            </h1>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Looking to hire me for short-term projects as a consultant/contractor?
              Or want to discuss tech generally?
            </p>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 30m
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> Africa/Lagos
              </p>
            </div>
          </div>

          <p className="mt-10 text-xs text-gray-400 dark:text-gray-500">
            © 2025 Ajilogba Ayomide
          </p>
        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold text-gray-700 dark:text-gray-200">
              October 2025
            </p>
            <button
              onClick={onClose}
              className="text-xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Step 1: Select Date */}
          {!selectedDay && (
            <>
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Select a date:
              </p>
              <div className="grid grid-cols-7 gap-2 mb-6">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const selectable = dates.some((d) => d.day === day);
                  return (
                    <button
                      key={day}
                      disabled={!selectable}
                      onClick={() => setSelectedDay(day)}
                      className={`p-2 rounded-md text-sm font-medium ${
                        selectable
                          ? "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                          : "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Step 2: Select Time */}
          {selectedDay && !selectedTime && (
            <>
              <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                Select a time for October {selectedDay}:
              </h3>
              <div className="space-y-2">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className="w-full py-2 text-gray-700 transition-all border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 3: Simple Confirmation */}
          {selectedDay && selectedTime && !confirmed && (
            <div className="mt-6 space-y-4 text-center">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                You selected <b>October {selectedDay}</b> at <b>{selectedTime}</b>.
              </p>
              <button
                onClick={handleConfirm}
                className="w-full py-2 text-white transition-all bg-black rounded-lg dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Confirm Meeting
              </button>
            </div>
          )}

          {/* Success Message */}
          {confirmed && (
            <div className="py-10 text-center">
              <p className="text-lg font-semibold text-green-600 dark:text-green-500">
                ✅ Meeting Confirmed!
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your session has been scheduled successfully.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
