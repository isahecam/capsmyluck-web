"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { LogoWordmark } from "@/components/shared/logo-wordmark";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SECTION_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon-sm" aria-label="Abrir menú" className="sm:hidden" />
        }>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <nav aria-label="Secciones" className="px-8">
          <ul className="flex flex-col gap-1">
            {SECTION_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants({ size: "sm" }), "w-full justify-start")}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="overflow-hidden pb-0">
          <LogoWordmark className="-mb-2" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
