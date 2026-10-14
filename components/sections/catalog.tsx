import { PackageOpenIcon } from "lucide-react";

import { CatalogFilters } from "@/components/sections/catalog-filters";
import { buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { INSTAGRAM_URL } from "@/lib/constants";

export function Catalog() {
  return (
    <section id="catalogo" aria-labelledby="catalogo-titulo" className="px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            01 — Catálogo
          </p>
          <h2 id="catalogo-titulo" className="font-heading text-6xl leading-none sm:text-8xl">
            La colección
          </h2>
        </header>

        <div className="flex flex-col gap-8">
          <CatalogFilters total={0} />

          <Empty className="border-2 border-foreground bg-stripes">
            <EmptyHeader>
              <EmptyMedia
                variant="icon"
                className="size-14 border border-foreground bg-primary text-primary-foreground">
                <PackageOpenIcon className="size-7" />
              </EmptyMedia>
              <EmptyTitle className="text-4xl font-normal tracking-normal normal-case">
                Próximamente
              </EmptyTitle>
              <EmptyDescription className="text-pretty">
                Estamos preparando la colección. Muy pronto podrás ver aquí todos los modelos
                disponibles.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "default" })}>
                Ver novedades en Instagram
              </a>
            </EmptyContent>
          </Empty>
        </div>
      </div>
    </section>
  );
}
