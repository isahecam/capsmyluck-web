import type { ReactNode } from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, MapControls, MapMarker, MarkerContent } from "@/components/ui/map";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

const ZONE_CENTER = { latitude: 19.2260186, longitude: -97.8047029 };

const DELIVERY_HOURS = [
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

export function DeliveryZone() {
  return (
    <section id="zona" aria-labelledby="zona-entrega-titulo" className="px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            03 — La zona
          </p>
          <h2 id="zona-entrega-titulo" className="font-heading text-6xl leading-none sm:text-8xl">
            Dónde entregamos
          </h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="relative map-tint h-80 border border-border bg-accent shadow sm:h-96 lg:col-span-3 lg:h-auto lg:min-h-96">
            <Map
              theme="dark"
              center={[ZONE_CENTER.longitude, ZONE_CENTER.latitude]}
              zoom={14}
              cooperativeGestures
              locale={MAP_LOCALE}>
              <MapMarker {...ZONE_CENTER}>
                <MarkerContent className="flex size-40 cursor-default items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary bg-primary/10"
                  />
                </MarkerContent>
              </MapMarker>
              <MapControls position="top-right" />
            </Map>
          </div>

          <ul className="flex flex-col gap-4 lg:col-span-2">
            <li>
              <InfoCard label="Punto de encuentro" title="Rafael Lara Grajales, Puebla">
                <p className="text-sm text-pretty text-muted-foreground">
                  Acordamos el lugar exacto contigo al confirmar tu pedido.
                </p>
              </InfoCard>
            </li>
            <li>
              <InfoCard label="Horario de entregas">
                <dl className="flex flex-col gap-2">
                  {DELIVERY_HOURS.map(({ days, hours }) => (
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
