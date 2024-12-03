"use client";

import { Typography } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { type Route } from "next";
import NextLink, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export const sidebarItems: {
  heading: string;
  items: { heading: string; path: Route }[];
}[] = [
  {
    heading: "Guides",
    items: [
      {
        heading: "Installation",
        path: "/guides/installation",
      },
    ],
  },
  {
    heading: "Components",
    items: [
      {
        heading: "Accordion",
        path: "/components/accordion",
      },
      {
        heading: "Alert",
        path: "/components/alert",
      },
      {
        heading: "Autocomplete",
        path: "/components/autocomplete",
      },
      {
        heading: "Avatar",
        path: "/components/avatar",
      },
      {
        heading: "Button",
        path: "/components/button",
      },
      {
        heading: "Card",
        path: "/components/card",
      },
      {
        heading: "Checkbox",
        path: "/components/checkbox",
      },
      {
        heading: "Chip",
        path: "/components/chip",
      },
      {
        heading: "Confirmation",
        path: "/components/confirmation",
      },
      {
        heading: "Data Table",
        path: "/components/data-table",
      },
      {
        heading: "Dialog",
        path: "/components/dialog",
      },
      {
        heading: "Divider",
        path: "/components/divider",
      },
      {
        heading: "Drag and Drop",
        path: "/components/drag-and-drop",
      },
      {
        heading: "Drawer",
        path: "/components/drawer",
      },
      {
        heading: "Editor",
        path: "/components/editor",
      },
      {
        heading: "File Upload Multi",
        path: "/components/file-upload-multi",
      },
      {
        heading: "File Upload Single",
        path: "/components/file-upload-single",
      },
      {
        heading: "Header",
        path: "/components/header",
      },
      {
        heading: "Input",
        path: "/components/input",
      },
      {
        heading: "Kbd",
        path: "/components/kbd",
      },
      {
        heading: "Link",
        path: "/components/link",
      },
      {
        heading: "Menu",
        path: "/components/menu",
      },
      {
        heading: "Otp Input",
        path: "/components/otp-input",
      },
      {
        heading: "Popover",
        path: "/components/popover",
      },
      {
        heading: "Progress",
        path: "/components/progress",
      },
      {
        heading: "Radio",
        path: "/components/radio",
      },
      {
        heading: "Rating",
        path: "/components/rating",
      },
      {
        heading: "React Hook Form",
        path: "/components/react-hook-form",
      },
      {
        heading: "Ripple",
        path: "/components/ripple",
      },
      {
        heading: "Select",
        path: "/components/select",
      },
      {
        heading: "Skeleton",
        path: "/components/skeleton",
      },
      {
        heading: "Switch",
        path: "/components/switch",
      },
      {
        heading: "Tab",
        path: "/components/tab",
      },
      {
        heading: "Table",
        path: "/components/table",
      },
      {
        heading: "Tags Input",
        path: "/components/tags-input",
      },
      {
        heading: "Textarea",
        path: "/components/textarea",
      },
      {
        heading: "Toast",
        path: "/components/toast",
      },
      {
        heading: "Tooltip",
        path: "/components/tooltip",
      },
      {
        heading: "Typography",
        path: "/components/typography",
      },
    ],
  },
  {
    heading: "Helpers Components",
    items: [
      {
        heading: "Repeater",
        path: "/components/repeater",
      },
      {
        heading: "Show",
        path: "/components/show",
      },
    ],
  },
  {
    heading: "Development",
    items: [
      {
        heading: "Stepper",
        path: "/components/stepper",
      },
      {
        heading: "Pagination",
        path: "/components/pagination",
      },
      {
        heading: "Slider",
        path: "/components/slider",
      },
    ],
  },
  // {
  //   heading: "Hooks",
  //   items: [
  //     {
  //       heading: "useDisclosure",
  //       path: "/hooks/use-disclosure",
  //     },
  //     {
  //       heading: "useHover",
  //       path: "/hooks/use-hover",
  //     },
  //     {
  //       heading: "useFocus",
  //       path: "/hooks/use-focus",
  //     },
  //     {
  //       heading: "useFocusVisible",
  //       path: "/hooks/use-focus-visible",
  //     },
  //     {
  //       heading: "useKeypress",
  //       path: "/hooks/use-keypress",
  //     },
  //     {
  //       heading: "usePress",
  //       path: "/hooks/use-press",
  //     },
  //     {
  //       heading: "useEventListener",
  //       path: "/hooks/use-event-listener",
  //     },
  //   ],
  // },
];

export const ComponentsSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed top-14 flex h-[calc(100vh-3.5rem)] min-w-[240px] flex-col gap-4 overflow-y-auto overflow-x-hidden rounded-lg bg-background-tertiary p-2 max-md:hidden">
      <div className="mt-4 flex flex-col gap-4">
        {sidebarItems.map((item, idx) => {
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
    </aside>
  );
};
