import Link from "next/link";

import { Instagram } from "@/components/icons/instagram";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { MobileMenu } from "@/components/sections/mobile-menu";
import { Logo } from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SECTION_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="w-full">
      <AnnouncementBar />

      <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2 sm:justify-between">
        <MobileMenu />

        <Link href="/" aria-label="Caps My Luck, inicio">
          <Logo className="text-2xl sm:text-3xl" />
        </Link>

        <nav aria-label="Principal" className="ml-auto flex items-center gap-2 sm:ml-0">
          <ul className="hidden items-center gap-6 sm:flex">
            {SECTION_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={buttonVariants({
                    size: "lg",
                    className: "px-0!",
                    variant: "hover-underline",
                  })}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label={INSTAGRAM_HANDLE}
          className={buttonVariants({
            variant: "default",
            size: "icon-sm",
            className: "sm:w-auto sm:gap-1.5 sm:px-6",
          })}>
          <Instagram />
          <span className="hidden sm:inline">{INSTAGRAM_HANDLE}</span>
        </a>
      </div>
    </header>
  );
}
