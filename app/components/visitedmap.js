'use client';

import dynamic from 'next/dynamic';

const MapContent = dynamic(
  () => import('../components/mapcontent'),
  { ssr: false, loading: () => <div className="h-[360px] w-full bg-gray-200 rounded-2xl animate-pulse" /> }
);

export default function VisitedMapClient() {
  return <MapContent />;
}