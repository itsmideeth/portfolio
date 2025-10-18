'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Thermometer } from "lucide-react";

export default function InfoDisplay() {
  const [location, setLocation] = useState("Loading...");
  const [time, setTime] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [weatherCode, setWeatherCode] = useState(null);
  const isTyping = false;
 
  // Weather icon mapping (Open-Meteo weather codes)
  const getWeatherEmoji = (code) => {
    if (code === null) return "❔";
    if ([0].includes(code)) return "☀️"; // Clear sky
    if ([1, 2].includes(code)) return "🌤️"; // Mostly clear / partly cloudy
    if ([3].includes(code)) return "☁️"; // Overcast
    if ([45, 48].includes(code)) return "🌫️"; // Fog
    if ([51, 53, 55, 61, 63, 65].includes(code)) return "🌧️"; // Rain
    if ([71, 73, 75, 77].includes(code)) return "❄️"; // Snow
    if ([80, 81, 82].includes(code)) return "🌦️"; // Showers
    if ([95, 96, 99].includes(code)) return "⛈️"; // Thunderstorms
    return "🌈";
  };

  // Fetch location and weather
  useEffect(() => {
    async function fetchLocationAndWeather() {
      try {
        const locRes = await fetch("https://ipapi.co/json/");
        const locData = await locRes.json();

        if (locData.city && locData.country_name) {
          setLocation(`${locData.city}, ${locData.country_name}`);
          fetchWeather(locData.latitude, locData.longitude);
        } else {
          setLocation("Unknown Location");
        }
      } catch {
        setLocation("Location unavailable");
      }
    }

    async function fetchWeather(lat, lon) {
      try {
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const weatherData = await weatherRes.json();
        setTemperature(weatherData.current_weather?.temperature ?? null);
        setWeatherCode(weatherData.current_weather?.weathercode ?? null);
      } catch {
        setTemperature(null);
        setWeatherCode(null);
      }
    }

    fetchLocationAndWeather();

    // Auto-refresh weather every 10 minutes
    const weatherInterval = setInterval(fetchLocationAndWeather, 10 * 60 * 1000);
    return () => clearInterval(weatherInterval);
  }, []);

  // Update local time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);



  return (
        <div className="flex items-center justify-center mt-8 space-x-2 text-sm sm:text-base">
      <span className="flex items-center gap-1.5">
        <MapPin size={14} className="opacity-70" />
        {location}
      </span>
      <span className="text-gray-400 dark:text-gray-500">•</span>
      <span className="flex items-center gap-1.5">
        <Clock size={14} className="opacity-70" />
        {time || "--:--"}
      </span>
      <span className="text-gray-400 dark:text-gray-500">•</span>
      <span className="flex items-center gap-1.5">
        <Thermometer size={14} className="opacity-70" />
        {temperature !== null ? `${temperature}°C` : "--°C"}{" "}
        <span className="ml-1">{getWeatherEmoji(weatherCode)}</span>
      </span>
    </div>

  );
}
 