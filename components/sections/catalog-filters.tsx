"use client";

import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const BRAND_OPTIONS = [
  { value: "todas", label: "Todas" },
  { value: "barbas-hats", label: "Barbas Hats" },
  { value: "otras", label: "Otras marcas" },
];

const TYPE_OPTIONS = [
  { value: "todos", label: "Todos" },
  { value: "snapback", label: "Snapback" },
  { value: "curva", label: "Curva" },
  { value: "trucker", label: "Trucker" },
];

export function CatalogFilters({ total }: Readonly<{ total: number }>) {
  const [brand, setBrand] = useState(BRAND_OPTIONS[0].value);
  const [type, setType] = useState(TYPE_OPTIONS[0].value);

  return (
    <div className="flex flex-col gap-6 border border-border bg-card p-4 text-card-foreground shadow sm:flex-row sm:flex-wrap sm:items-end sm:gap-10 sm:p-5">
      <FilterGroup label="Marca" options={BRAND_OPTIONS} value={brand} onChange={setBrand} />
      <FilterGroup label="Tipo" options={TYPE_OPTIONS} value={type} onChange={setType} />
      <p
        aria-live="polite"
        className="text-xs font-semibold tracking-widest uppercase sm:ml-auto sm:py-2">
        {total} {total === 1 ? "gorra" : "gorras"}
      </p>
    </div>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: Readonly<{
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}>) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-2 text-xs font-semibold tracking-widest text-accent uppercase">
        {label}
      </legend>
      <ToggleGroup
        aria-label={label}
        value={[value]}
        onValueChange={([next]) => next && onChange(next)}
        className="flex-wrap">
        {options.map((option) => (
          <ToggleGroupItem
            key={option.value}
            value={option.value}
            variant="outline"
            size="sm"
            className="border-foreground aria-pressed:bg-foreground aria-pressed:text-primary">
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </fieldset>
  );
}
