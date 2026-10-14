import { MapPinIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, MapControls, MapMarker, MarkerContent } from "@/components/ui/map";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

const STORE_COORDINATES = { latitude: 19.2260186, longitude: -97.8047029 };

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${STORE_COORDINATES.latitude},${STORE_COORDINATES.longitude}`;

const OPENING_HOURS = [
  { days: "Lunes a viernes", hours: "3:30 p. m. a 7:00 p. m." },
  { days: "Sábado y domingo", hours: "10:00 a. m. a 7:00 p. m." },
];

const CONTACT_LINKS = [
  { label: "WhatsApp", href: WHATSAPP_URL },
  { label: "Instagram", href: INSTAGRAM_URL },
];

// Textos de los gestos del mapa, que MapLibre solo trae en inglés.
const MAP_LOCALE = {
  "CooperativeGesturesHandler.WindowsHelpText": "Usa Ctrl + rueda del ratón para hacer zoom",
  "CooperativeGesturesHandler.MacHelpText": "Usa ⌘ + rueda del ratón para hacer zoom",
  "CooperativeGesturesHandler.MobileHelpText": "Usa dos dedos para mover el mapa",
};

export function Store() {
  return (
    <section id="tienda" aria-labelledby="tienda-titulo" className="px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            03 — La tienda
          </p>
          <h2 id="tienda-titulo" className="font-heading text-6xl leading-none sm:text-8xl">
            Dónde encontrarnos
          </h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="relative map-tint h-80 border border-border bg-accent shadow sm:h-96 lg:col-span-3 lg:h-auto lg:min-h-96">
            <Map
              theme="dark"
              center={[STORE_COORDINATES.longitude, STORE_COORDINATES.latitude]}
              zoom={15}
              cooperativeGestures
              locale={MAP_LOCALE}>
              <MapMarker {...STORE_COORDINATES}>
                <MarkerContent className="flex size-24 cursor-default items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary"
                  />
                  <MapPinIcon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="absolute bottom-1/2 size-12 fill-primary text-foreground"
                  />
                </MarkerContent>
              </MapMarker>
              <MapControls position="top-right" />
            </Map>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="absolute top-2.5 left-2.5 border border-border bg-card px-3 py-1.5 text-xs font-semibold tracking-widest text-card-foreground uppercase decoration-primary decoration-2 underline-offset-4 hover:underline">
              [Cómo llegar]
            </a>
          </div>

          <ul className="flex flex-col gap-4 lg:col-span-2">
            <li>
              <InfoCard label="Ubicación" title="Rafael Lara Grajales, Puebla">
                <p className="text-sm text-pretty text-muted-foreground">
                  Te compartimos la dirección exacta al confirmar tu pedido.
                </p>
              </InfoCard>
            </li>
            <li>
              <InfoCard label="Horario">
                <dl className="flex flex-col gap-2">
                  {OPENING_HOURS.map(({ days, hours }) => (
                    <div key={days}>
                      <dt className="text-sm tracking-wider text-muted-foreground uppercase">
                        {days}
                      </dt>
                      <dd className="font-heading text-2xl leading-none">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </InfoCard>
            </li>
            <li>
              <InfoCard label="Zona de entrega" title="Solo dentro de Rafael Lara Grajales" />
            </li>
            <li>
              <Card
                size="sm"
                className="bg-primary text-primary-foreground shadow-none ring-foreground">
                <CardHeader>
                  <h3 className="text-xs font-semibold tracking-widest uppercase">
                    Pedidos y dudas
                  </h3>
                  <CardTitle className="text-2xl leading-none font-normal tracking-normal normal-case">
                    <p className="flex flex-wrap items-center gap-x-2">
                      {CONTACT_LINKS.map(({ label, href }, index) => (
                        <span key={href} className="contents">
                          {index > 0 && <span aria-hidden="true">·</span>}
                          <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="decoration-2 underline-offset-4 hover:underline">
                            [{label}]
                          </a>
                        </span>
                      ))}
                    </p>
                  </CardTitle>
                </CardHeader>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  title,
  children,
}: {
  label: string;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <Card size="sm" className="shadow-none ring-foreground">
      <CardHeader>
        <h3 className="text-xs font-semibold tracking-widest text-accent uppercase">{label}</h3>
        {title && (
          <CardTitle className="text-2xl leading-none font-normal tracking-normal normal-case">
            <p className="text-pretty">{title}</p>
          </CardTitle>
        )}
        {children}
      </CardHeader>
    </Card>
  );
}
