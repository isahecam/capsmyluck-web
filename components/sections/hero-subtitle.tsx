"use client";

import { useEffect, useState } from "react";

import { TextCascade } from "@/components/motion/text-cascade";

const PHRASES = ["con suerte", "tumbado", "con estilo"];
const INTERVAL_MS = 2400;

export function HeroSubtitle({ playing }: Readonly<{ playing: boolean }>) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % PHRASES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [playing]);

  return (
    <p className="font-heading text-3xl text-balance text-background sm:text-4xl">
      Gorras para andar <TextCascade text={PHRASES[index] ?? PHRASES[0]} className="text-primary" />
    </p>
  );
}
