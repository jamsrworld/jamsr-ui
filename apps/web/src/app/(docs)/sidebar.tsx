"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Typography } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import NextLink, { type LinkProps } from "next/link";
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
  "dnd",
  "drawer",
  "editor",
  "file-upload-multi",
  "file-upload",
  "header",
  "input",
  "installation",
  "link",
  "menu",
  "otp-input",
  "popover",
  "progress",
  "radio",
  "rating",
  "repeater",
  "rhf",
  "ripple",
  "select",
  "skeleton",
  "switch",
  "tab",
  "table",
  "tags-input",
  "textarea",
  "theme",
  "toast",
  "tooltip",
  "typography",
];
const guides = ["installation"];
const hooks = [
  "use-disclosure",
  "use-hover",
  "use-focus",
  "use-focus-visible",
  "use-event-listener",
  "use-keypress",
  "use-press",
];

const formatName = (name: string) => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatPaths = (paths: string[], group: string) => {
  return paths.map((item) => {
    return { heading: formatName(item), path: `/${group}/${item}` };
  });
};

const items = [
  {
    heading: "Guides",
    items: formatPaths(guides, "guides"),
  },
  {
    heading: "Components",
    items: formatPaths(components, "components"),
  },
  {
    heading: "Hooks",
    items: formatPaths(hooks, "hooks"),
  },
];

export const ComponentsSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed flex h-screen min-w-[240px] flex-col gap-1 overflow-y-auto overflow-x-hidden rounded-lg bg-background-tertiary p-2 py-12 max-md:hidden">
      <ThemeSwitcher />
      <div className="flex flex-col gap-4 mt-4">
        {items.map((item, idx) => {
          const { heading, items } = item;
          return (
            <div key={idx} className="flex flex-col gap-2">
              <Typography
                as="p"
                variant="paragraph2"
                className="text-foreground-tertiary"
              >
                {heading}
              </Typography>
              <div className="flex flex-col">
                {items.map((item) => {
                  const { heading, path } = item;
                  const isActive = pathname === path;
                  return (
                    <NextLink
                      key={path}
                      href={path as LinkProps<never>["href"]}
                      className={cn(
                        "rounded-lg p-2 text-sm font-normal capitalize hover:bg-content1",
                        isActive &&
                          "bg-primary text-white hover:bg-primary-300",
                      )}
                    >
                      {heading}
                    </NextLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
