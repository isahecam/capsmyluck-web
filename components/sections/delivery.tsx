import { MapPinIcon, TruckIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    description: "Recíbela en el punto acordado y disfruta tu nuevo estilo.",
  },
];

const DELIVERY_OPTIONS = [
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
          {STEPS.map(({ title, description }, index) => (
            <li key={title} className="group/step flex">
              <Card
                size="sm"
                className="flex-1 group-nth-4/step:bg-primary group-nth-4/step:text-primary-foreground">
                <CardHeader>
                  <span
                    aria-hidden="true"
                    className="mb-2 font-heading text-5xl leading-none text-primary group-nth-4/step:text-primary-foreground">
                    {index + 1}
                  </span>
                  <CardTitle>
                    <h3 className="font-sans! font-bold text-pretty">{title}</h3>
                  </CardTitle>
                  <CardDescription className="text-pretty group-nth-4/step:text-primary-foreground">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ol>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-widest text-primary uppercase">
              Formas de entrega
            </h3>
            <ul className="grid items-start gap-4 sm:grid-cols-2">
              {DELIVERY_OPTIONS.map(({ icon: Icon, title, description }) => (
                <li key={title}>
                  <Card size="sm">
                    <CardHeader>
                      <Icon aria-hidden="true" className="mb-1 size-6" />
                      <CardTitle>
                        <h4 className="tracking-wider text-pretty">{title}</h4>
                      </CardTitle>
                      <CardDescription className="text-pretty">{description}</CardDescription>
                    </CardHeader>
                  </Card>
                </li>
              ))}
            </ul>
          </div>

          <aside aria-labelledby="zona-titulo" className="flex lg:col-span-2">
            <Card
              size="sm"
              className="flex-1 bg-transparent bg-stripes text-accent-foreground shadow-none ring-2 ring-primary ring-inset">
              <CardHeader>
                <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Zona de entrega
                </p>
                <CardTitle className="text-4xl leading-none font-normal tracking-normal normal-case">
                  <h3 id="zona-titulo" className="text-pretty">
                    ¿Estás fuera de la zona?
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-pretty">
                <p>
                  ¡También queremos que tengas tu gorra! Escríbenos y cuéntanos dónde te encuentras.
                  Revisaremos las opciones disponibles para que puedas conseguir tu modelo favorito.
                </p>
                <p className="mt-3">
                  ¿Estás cerca? Coordinamos un punto de encuentro para que recibas tu pedido.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}
