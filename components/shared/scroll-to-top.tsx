"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Aparece al salir del hero, que ocupa toda la pantalla y ya tiene su propio botón abajo a la derecha.
    const update = () => setVisible(window.scrollY > window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <Button
      variant="floating"
      size="icon-sm"
      inert={!visible}
      data-visible={visible}
      // `auto` respeta el `scroll-smooth` de `html`.
      onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
      aria-label="Volver arriba"
      className="fixed right-4 bottom-4 z-40">
      <ArrowUpIcon />
    </Button>
  );
}
