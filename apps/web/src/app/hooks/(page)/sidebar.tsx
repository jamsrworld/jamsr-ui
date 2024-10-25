"use client";

import { cn } from "@jamsr-ui/utils";
import NextLink, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

const components = [
  "use-hover",
  "use-press",
  "use-focus",
  "use-focus-visible",
  "use-keypress",
  "use-event-listener",
];

export const HooksSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-background-tertiary fixed flex h-screen min-w-[240px] flex-col gap-1 overflow-y-auto overflow-x-hidden rounded-lg p-2 py-12">
      {components.map((item) => {
        const path = `/hooks/${item}`;
        const isActive = pathname === path;
        return (
          <NextLink
            key={item}
            href={`/hooks/${item}` as LinkProps<never>["href"]}
            className={cn(
              "hover:bg-background-secondary rounded-lg px-1 py-2 text-sm font-normal capitalize",
              isActive && "bg-primary hover:bg-primary-600 text-white",
            )}
          >
            {item}
          </NextLink>
        );
      })}
    </div>
  );
};
