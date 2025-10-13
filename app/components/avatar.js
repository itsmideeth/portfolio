"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import fallbackAvatar from "@/public/avatar.jpg"; // 👈 make sure this exists in /public

export default function Avatar() {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState("your-github-username");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let interval;

    async function fetchAvatar() {
      try {
        setLoading(true);
        const res = await fetch("https://api.github.com/users/itsmideeth", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("GitHub API error");

        const data = await res.json();
        if (data.avatar_url) setAvatar(data.avatar_url);
        if (data.login) setUsername(data.login);
      } catch (error) {
        console.warn("⚠️ Using local fallback:", error.message);
        setAvatar(null);
      } finally {
        setLoading(false);
      }
    }

    fetchAvatar();
    interval = setInterval(fetchAvatar, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#0077B6]/20 shadow-sm group transition-transform duration-300 hover:scale-105"
      title={`@${username}`}
    >
      {/* Avatar Image */}
      <Image
        src={avatar || fallbackAvatar}
        alt={`GitHub Avatar of ${username}`}
        fill
        className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        priority
        onLoadingComplete={() => setLoading(false)}
      />

      {/* Skeleton shimmer */}
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
      )}

      {/* Tooltip */}
      <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-md">
        @{username}
      </div>
    </a>
  );
}
