"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SpotifyPlayer() {
  const tracks = [
    {
      id: "42K8Irooh4QNXZz2J3E31S",
      title: "Life",
      artist: "Balloranking",
    },
    {
      id: "250gmhnn2mljVBbgTubYXN",
      title: "Hallelujah",
      artist: "Cazulee,TML Vibez",
    },
    {
      id: "0VjIjW4GlUZAMYd2vXMi3b",
      title: "Blinding Lights",
      artist: "The Weeknd",
    },
    {
      id: "5GyaXqMfcIGHfmTUITFacS",
      title: "With You",
      artist: "Davido,Omah Lay",
    },{
      id: "5GkkuEEPtYguzhTdCpS8Ab",
      title: "99(feat.Deacolm)",
      artist: "Olamide,Seyi Vibez,Asake,Young Jonn,Deacolm",
    },{
      id: "0FU7ERQTOECwmEIaWDgdIG",
      title: "BADMAN GANGSTA",
      artist: "Asake,Tiakola",
    },{
      id: "0mfLbIDRH9YJfU3wComro7",
      title: "ManyPeople",
      artist: "Adekunle Gold",
    },
  ];

  const [currentTrack, setCurrentTrack] = useState(0);

  const nextTrack = () =>
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  const prevTrack = () =>
    setCurrentTrack((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );

  const { id, title, artist } = tracks[currentTrack];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        flex flex-col justify-between 
        w-full 
        h-[370px] 
        p-3 
        text-white bg-[#1E1E1E] rounded-2xl shadow-xl overflow-hidden
      "
    >
      {/* Header */}
      <div>
        <h2 className="text-base font-semibold">
          🎶 Now Playing:{" "} 
          <span className="text-green-400">{title}</span>
        </h2>
        <p className="text-xs text-gray-400 sm:text-sm">{artist}</p>
      </div>

      {/* Player */}
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow mt-2"
      >
        <iframe
          style={{ borderRadius: "12px" }}
          src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="h-[250px]"
        ></iframe>
      </motion.div>

      {/* Controls */}
      <div className="flex items-center justify-between ">
        <button
          onClick={prevTrack}
          className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          <ChevronLeft size={16} /> Prev
        </button>
        <button
          onClick={nextTrack}
          className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition bg-green-600 rounded-lg hover:bg-green-500"
        >
          Next <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}
