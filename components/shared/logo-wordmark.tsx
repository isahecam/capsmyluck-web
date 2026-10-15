import { cn } from "@/lib/utils";

export function LogoWordmark({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 190"
      className={cn("block w-full fill-primary/20 font-heading", className)}
      {...props}>
      <text x="0" y="200" fontSize="250" textLength="1000" lengthAdjust="spacingAndGlyphs">
        Caps My Luck
      </text>
    </svg>
  );
}
