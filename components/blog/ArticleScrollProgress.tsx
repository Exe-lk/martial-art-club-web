"use client";

import { useEffect, useState } from "react";

export default function ArticleScrollProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      setPercent(scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 z-40 h-1 bg-primary transition-[width] duration-150 ease-out"
      style={{ top: "5rem", width: `${percent}%` }}
      aria-hidden
    />
  );
}
