import { BrandsMarquee } from "@/components/sections/brands-marquee";
import { Delivery } from "@/components/sections/delivery";
import { Hero } from "@/components/sections/hero";
import { Store } from "@/components/sections/store";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <BrandsMarquee />
      <Delivery />
      <Store />
    </main>
  );
}
