import { HandIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-card font-sans dark:bg-black">
      <Button>
        Hola <HandIcon />
      </Button>
    </div>
  );
}
