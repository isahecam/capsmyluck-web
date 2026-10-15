function requireEnv(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Falta la variable de entorno ${name}. Revisa .env.example.`);
  }
  return value;
}

// Next.js solo reemplaza `process.env.NEXT_PUBLIC_*` cuando se lee con su nombre literal.
export const INSTAGRAM_URL = requireEnv(
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  "NEXT_PUBLIC_INSTAGRAM_URL",
);

// Se deriva de la URL del perfil para que el texto del enlace siempre coincida con ella.
export const INSTAGRAM_HANDLE = `@${new URL(INSTAGRAM_URL).pathname.split("/").find(Boolean)}`;

// Número con lada internacional y sin signos, p. ej. 5212221234567.
export const WHATSAPP_URL = `https://wa.me/${requireEnv(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  "NEXT_PUBLIC_WHATSAPP_NUMBER",
)}`;

export const SECTION_LINKS = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Entrega", href: "#entrega" },
  { label: "Zona", href: "#zona" },
];
