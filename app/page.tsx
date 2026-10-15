import { BrandsMarquee } from "@/components/sections/brands-marquee";
import { Catalog } from "@/components/sections/catalog";
import { Delivery } from "@/components/sections/delivery";
import { DeliveryZone } from "@/components/sections/delivery-zone";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <BrandsMarquee />
      <Catalog />
      <Delivery />
      <DeliveryZone />
    </main>
  );
}
