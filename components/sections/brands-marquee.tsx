import { Marquee } from "@/components/motion/marquee";

const ITEMS = ["BAEZ X SHIFU", "Barbas Hats", "Entregas en Rafael Lara Grajales"];

export function BrandsMarquee() {
  return (
    <section
      aria-label="Marcas y estilos"
      className="border-y-2 border-border bg-primary py-3 font-heading text-2xl text-primary-foreground sm:text-3xl">
      <Marquee fade={false} pauseOnHover={false} speed={25} gap="1.25rem">
        {ITEMS.flatMap((item) => [
          <span key={item}>{item}</span>,
          <span key={`${item}-separador`} aria-hidden="true">
            ✦
          </span>,
        ])}
      </Marquee>
    </section>
  );
}
