"use client";

import { useEffect, useState } from "react";

const HERO_VIDEO_SRC = "/videos/hero-video.mp4";

function scheduleIdle(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const ric = window.requestIdleCallback;
  if (typeof ric === "function") {
    const id = ric.call(window, () => callback(), { timeout: 2500 });
    return () => {
      if (typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(id);
      }
    };
  }
  const t = window.setTimeout(callback, 180);
  return () => window.clearTimeout(t);
}

/**
 * Defers mounting the hero <video> until the browser is idle so HTML/CSS and
 * the rest of the page can render without competing with a large media download.
 */
export default function HeroDeferredVideo() {
  const [mountVideo, setMountVideo] = useState(false);

  useEffect(() => {
    const cancel = scheduleIdle(() => setMountVideo(true));
    return cancel;
  }, []);

  if (!mountVideo) {
    return (
      <div
        className="absolute inset-0 bg-neutral-950"
        aria-hidden
      />
    );
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={HERO_VIDEO_SRC} type="video/mp4" />
    </video>
  );
}
