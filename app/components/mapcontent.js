'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import Image from "next/image";

// ✅ Fix missing default icon bug in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const cities = [
  {
    name: "Lagos, Nigeria",
    coords: [6.5244, 3.3792],
    flag: "https://flagcdn.com/w40/ng.png",
  },
  {
    name: "Paris, France",
    coords: [48.8566, 2.3522],
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    name: "London, England",
    coords: [51.5072, -0.1276],
    flag: "https://flagcdn.com/w40/gb.png",
  },
];

function AutoZoom({ cities, delay = 7000 }) {
  const map = useMap();

  useEffect(() => {
    let i = 0;
    const flyToNextCity = () => {
      const city = cities[i];
      map.flyTo(city.coords, 6, { duration: 3 });
      i = (i + 1) % cities.length;
    };
    flyToNextCity();
    const interval = setInterval(flyToNextCity, delay);
    return () => clearInterval(interval);
  }, [map, cities, delay]);

  return null;
}

export default function MapContent() {
  const flagIcons = {};
  cities.forEach((c) => {
    flagIcons[c.name] = L.icon({
      iconUrl: c.flag,
      iconSize: [30, 20],
      iconAnchor: [20, 30],
      popupAnchor: [0, -25],
    });
  });

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        className="h-[360px] w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        {cities.map((city, i) => (
          <Marker key={i} position={city.coords} icon={flagIcons[city.name]}>
            <Popup>
              <div className="text-center">
                <Image
                  src={city.flag}
                  alt={city.name}
                  className="w-8 h-5 mx-auto mb-1 rounded-sm"
                  width={32}
                  height={20}
                />
                <p className="font-semibold text-gray-800">{city.name}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <AutoZoom cities={cities} delay={7000} />
      </MapContainer>
    </div>
  );
}