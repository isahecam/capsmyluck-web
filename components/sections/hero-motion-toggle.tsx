import { PauseIcon, PlayIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroMotionToggle({
  playing,
  onToggle,
}: Readonly<{
  playing: boolean;
  onToggle: () => void;
}>) {
  return (
    <Button
      size="icon-sm"
      onClick={onToggle}
      aria-label={playing ? "Pausar animaciones" : "Reproducir animaciones"}
      className="absolute right-4 bottom-4">
      {playing ? <PauseIcon /> : <PlayIcon />}
    </Button>
  );
}
