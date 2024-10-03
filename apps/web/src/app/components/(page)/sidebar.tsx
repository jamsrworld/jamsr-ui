"use client";

import { cn } from "@jamsr-ui/utils";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const components = [
  "accordion",
  "alert",
  "autocomplete",
  "avatar",
  "badge",
  "button",
  "card",
  "checkbox",
  "chip",
  "confirmation",
  "data-table",
  "dialog",
  "divider",
  "drawer",
  "editor",
  "file-upload",
  "header",
  "input",
  "link",
  "menu",
  "otp-input",
  "popover",
  "progress",
  "radio",
  "rating",
  "repeater",
  "ripple",
  "select",
  "skeleton",
  "switch",
  "tab",
  "table",
  "textarea",
  "toast",
  "tooltip",
  "typography",
];

export const ComponentsSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-background-tertiary fixed flex h-screen min-w-[240px] flex-col gap-1 overflow-y-auto overflow-x-hidden rounded-lg p-2 py-12">
      {components.map((item) => {
        const path = `/components/${item}`;
        const isActive = pathname === path;
        return (
          <NextLink
            key={item}
            href={`/components/${item}` as any}
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
