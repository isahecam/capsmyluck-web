"use client";

import { useEffect, useRef } from "react";

export function VideoHero({ playing }: Readonly<{ playing: boolean }>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) video.play().catch(() => {});
    else video.pause();
  }, [playing]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 -z-10 h-full w-full object-cover">
      <source src="/videos/hero-bg.webm" type="video/webm" />
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
    </video>
  );
}
