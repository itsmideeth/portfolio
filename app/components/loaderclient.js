"use client";

import { useState, useEffect } from "react";
import Loader from "../components/loader";

export default function LoaderClient({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;
  return <>{children}</>;
}
