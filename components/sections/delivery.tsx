import { MapPinIcon, StoreIcon, TruckIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Elige tu gorra",
    description: "Filtra por marca y tipo, y anota el modelo que más te guste.",
  },
  {
    title: "Escríbenos por WhatsApp",
    description: "Envíanos el modelo que elegiste y te confirmamos disponibilidad y precio.",
  },
  {
    title: "Coordinamos tu entrega",
    description: "Elige la opción que más te convenga y acordamos el horario contigo.",
  },
  {
    title: "¡Estrena tu gorra!",
    description: "Recíbela o pasa por ella y disfruta tu nuevo estilo.",
  },
];

const DELIVERY_OPTIONS = [
  {
    icon: StoreIcon,
    title: "En la tienda",
    description: "Pasa por ella en nuestro horario, ya apartada.",
  },
  {
    icon: MapPinIcon,
    title: "Punto de encuentro",
    description: "Nos vemos en un lugar acordado dentro de Rafael Lara Grajales.",
  },
  {
    icon: TruckIcon,
    title: "A domicilio",
    description: "Por el momento no contamos con envíos a domicilio. ¡Muy pronto!",
  },
];

export function Delivery() {
  return (
    <section
      id="entrega"
      aria-labelledby="entrega-titulo"
      className="bg-accent px-6 py-24 text-accent-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            02 — Entrega
          </p>
          <h2 id="entrega-titulo" className="font-heading text-6xl leading-none sm:text-8xl">
            Tu gorra,
            <br />a tu manera
          </h2>
        </header>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ title, description }, index) => {
            const last = index === STEPS.length - 1;
            return (
              <li key={title} className="flex">
                <Card size="sm" variant={last ? "primary" : "outline"} className="flex-1">
                  <CardHeader>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mb-2 font-heading text-5xl leading-none text-primary",
                        last && "text-primary-foreground",
                      )}>
                      {index + 1}
                    </span>
                    <CardTitle variant="label">
                      <h3>{title}</h3>
                    </CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              </li>
            );
          })}
        </ol>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-widest text-primary uppercase">
              Formas de entrega
            </h3>
            <ul className="grid items-start gap-4 sm:grid-cols-3">
              {DELIVERY_OPTIONS.map(({ icon: Icon, title, description }) => (
                <li key={title}>
                  <Card size="sm">
                    <CardHeader>
                      <Icon aria-hidden="true" className="mb-1 size-6" />
                      <CardTitle variant="display">
                        <h4>{title}</h4>
                      </CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                  </Card>
                </li>
              ))}
            </ul>
          </div>

          <aside aria-labelledby="zona-titulo" className="flex lg:col-span-2">
            <Card size="sm" variant="stripes" className="flex-1">
              <CardHeader>
                <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Zona de entrega
                </p>
                <CardTitle variant="display-lg">
                  <h3 id="zona-titulo">¿Estás fuera de la zona?</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  ¡También queremos que tengas tu gorra! Escríbenos y cuéntanos dónde te encuentras.
                  Revisaremos las opciones disponibles para que puedas conseguir tu modelo favorito.
                </p>
                <p className="mt-3">
                  ¿Estás cerca? Puedes recoger tu pedido en tienda o coordinar un punto de
                  encuentro.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}
