import { cacheLife } from "next/cache";
import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SECTION_LINKS, WHATSAPP_URL } from "@/lib/constants";

const CONTACT_LINKS = [
  { label: "WhatsApp", href: WHATSAPP_URL },
  { label: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
];

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="dark overflow-hidden border-t-4 border-primary bg-background px-6 pt-16 text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <Link href="/" aria-label="Caps My Luck, inicio" className="w-fit">
              <Logo className="text-3xl" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Catálogo de gorras estilo tumbado, Barbas Hats y más marcas. Rafael Lara Grajales,
              Puebla.
            </p>
          </div>

          <div className="flex gap-16 sm:gap-24">
            <nav aria-label="Pie de página" className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold tracking-widest text-primary uppercase">
                Navegar
              </h2>
              <ul className="flex flex-col gap-1">
                {SECTION_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={buttonVariants({
                        size: "xs",
                        variant: "hover-underline",
                        className: "px-0!",
                      })}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold tracking-widest text-primary uppercase">
                Contacto
              </h2>
              <ul className="flex flex-col gap-1">
                {CONTACT_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({
                        size: "xs",
                        variant: "hover-underline",
                        className: "px-0!",
                      })}>
                      [{label}]
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-muted-foreground/30 pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <p>
            © <CurrentYear /> Caps My Luck. Todos los derechos reservados.
          </p>
          <p>Entregas únicamente en Rafael Lara Grajales.</p>
        </div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1000 190"
        className="mx-auto mt-6 -mb-2 block w-full max-w-6xl fill-primary/20 font-heading">
        <text x="0" y="200" fontSize="250" textLength="1000" lengthAdjust="spacingAndGlyphs">
          Caps My Luck
        </text>
      </svg>
    </footer>
  );
}
