"use client";

import { MapPinIcon, XIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="relative border-b bg-background px-12 py-2.5 text-foreground">
      <p className="mx-auto max-w-5xl text-center text-xs font-semibold tracking-widest text-balance uppercase sm:text-sm">
        <MapPinIcon aria-hidden="true" className="mr-2 inline size-4 align-text-bottom" />
        Solo entregas en Rafael Lara Grajales, Puebla
        <span className="mt-0.5 block text-accent sm:mt-0 sm:ml-2 sm:inline">
          · Sin envíos foráneos
        </span>
      </p>

      <Button
        variant="ghost"
        size="icon-xs"
        aria-label="Cerrar aviso"
        onClick={() => setOpen(false)}
        className="absolute top-1/2 right-2 -translate-y-1/2">
        <XIcon />
      </Button>
    </div>
  );
}
