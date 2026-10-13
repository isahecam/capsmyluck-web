import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span className={cn("font-heading text-nowrap", className)} {...props}>
      Caps My Luck <span className="text-sm text-primary">77</span>
    </span>
  );
}
