"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useRef } from "react";

export default function SpotifyPlayer() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]); // counter parallax

  // Hover 3D effect
  const x = useMotionValue(0);
  const rotateX = useTransform(x, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    x.set(offsetX);
  };

  const handleMouseLeave = () => {
    x.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ y, rotateX, rotateY }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="rounded-2xl overflow-hidden shadow-xl bg-black transform-gpu"
    >
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/2f9PTWJ8a5UXeC5WpWQe2C?utm_source=generator"
        width="100%"
        height="320"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
}
