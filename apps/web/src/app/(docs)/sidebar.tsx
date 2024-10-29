"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@jamsr-ui/utils";
import NextLink, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

const components = [
  "installation",
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
  "file-upload-multi",
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
  "theme",
  "dnd",
];

export const ComponentsSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed flex h-screen min-w-[240px] flex-col gap-1 overflow-y-auto overflow-x-hidden rounded-lg bg-background-tertiary p-2 py-12 max-md:hidden">
      <ThemeSwitcher />
      {components.map((item) => {
        const path =
          item === "installation" ? "/installation" : `/components/${item}`;
        const isActive = pathname === path;
        return (
          <NextLink
            key={item}
            href={path as LinkProps<never>["href"]}
            className={cn(
              "rounded-lg p-2 text-sm font-normal capitalize hover:bg-content1",
              isActive && "bg-primary text-white hover:bg-primary-300",
            )}
          >
            {item}
          </NextLink>
        );
      })}
    </div>
  );
};
