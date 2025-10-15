"use client";
import { motion } from "framer-motion";

export default function SpotifyPlayer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="rounded-2xl overflow-hidden shadow-xl bg-black"
    >
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/2f9PTWJ8a5UXeC5WpWQe2C?utm_source=generator"
        width="100%"
        height="360"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
}
