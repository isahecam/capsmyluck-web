"use client";

import { ArrowDownIcon } from "lucide-react";
import { useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { VideoHero } from "@/components/layouts/video-hero";
import { TextReveal } from "@/components/motion/text-reveal";
import { HeroMotionToggle } from "@/components/sections/hero-motion-toggle";
import { HeroSubtitle } from "@/components/sections/hero-subtitle";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const reduceMotion = useReducedMotion();
  // `null` = el usuario aún no decide: con movimiento reducido arranca pausado.
  const [choice, setChoice] = useState<boolean | null>(null);
  const playing = choice ?? !reduceMotion;

  return (
    <section className="relative flex min-h-dvh flex-col justify-center px-6 py-24 text-secondary-foreground">
      <VideoHero playing={playing} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-secondary/70" />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center md:items-start md:text-left">
        <h1
          aria-label="El estilo también se corona"
          className="font-heading text-6xl text-balance text-background sm:text-8xl">
          <span aria-hidden="true">
            <TextReveal as="span" text="El estilo también se corona" split="char" stagger={0.05} />
          </span>
        </h1>

        <HeroSubtitle playing={playing} />

        <TextReveal
          as="p"
          text="Explora nuestra selección y encuentra la gorra que va con tu estilo."
          delay={0.6}
          stagger={0.04}
          className="max-w-xl text-base text-balance text-card sm:text-xl"
        />

        <Link
          href="#catalogo"
          className={buttonVariants({
            size: "lg",
            className: "shadow-xs shadow-card bg-clip-border!",
          })}>
          Ver colección
          <ArrowDownIcon />
        </Link>

        <HeroMotionToggle playing={playing} onToggle={() => setChoice(!playing)} />
      </div>
    </section>
  );
}
