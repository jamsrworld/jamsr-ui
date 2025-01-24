"use client";

import { Chip, Text } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { type Route } from "next";
import NextLink, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export const sidebarItems: {
  heading: string;
  chip?: React.ReactNode;
  items: { heading: string; path: Route }[];
}[] = [
  {
    heading: "Guides",
    items: [
      {
        heading: "Installation",
        path: "/guides/installation",
      },
      {
        heading: "Theme",
        path: "/guides/theme",
      },
    ],
  },
  {
    heading: "Installation",
    items: [
      {
        heading: "Next.js",
        path: "/installation/next",
      },
      {
        heading: "Vite",
        path: "/installation/vite",
      },
      {
        heading: "Remix",
        path: "/installation/remix",
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
        heading: "Circular Progress",
        path: "/components/circular-progress",
      },
      {
        heading: "Confirmation",
        path: "/components/confirmation",
      },
      {
        heading: "Copy To Clipboard",
        path: "/components/copy-to-clipboard",
      },
      {
        heading: "Collapsible",
        path: "/components/collapsible",
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
        heading: "Icon Button",
        path: "/components/icon-button",
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
        heading: "Linear Progress",
        path: "/components/linear-progress",
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
        heading: "Sidebar",
        path: "/components/sidebar",
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
        heading: "Text",
        path: "/components/text",
      },
    ],
  },
  {
    heading: "Charts",
    chip: <Chip size="sm">Development</Chip>,
    items: [
      {
        heading: "Area Chart",
        path: "/components/charts/area-chart",
      },
      {
        heading: "Bar Chart",
        path: "/components/charts/bar-chart",
      },
      {
        heading: "Line Chart",
        path: "/components/charts/line-chart",
      },
      {
        heading: "Pie Chart",
        path: "/components/charts/pie-chart",
      },
      {
        heading: "Radial Bar Chart",
        path: "/components/charts/radial-bar-chart",
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
    ],
  },
  {
    heading: "Development",
    items: [
      {
        heading: "Stepper",
        path: "/components/stepper",
      },
    ],
  },
  {
    heading: "Planned",
    items: [
      {
        heading: "Pagination",
        path: "/components/pagination",
      },
      {
        heading: "Slider",
        path: "/components/slider",
      },
      {
        heading: "Breadcrumbs",
        path: "/components/breadcrumbs",
      },
      {
        heading: "Date Picker",
        path: "/components/date-picker",
      },
      {
        heading: "Number Input",
        path: "/components/number-input",
      },
      {
        heading: "Empty Content",
        path: "/components/empty-content",
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
    <aside className="fixed top-14 flex h-[calc(100vh-3.5rem)] min-w-[240px] flex-col gap-4 overflow-y-auto overflow-x-hidden border-r border-divider p-2 scrollbar-hide max-md:hidden">
      {/* <Divider
        orientation="vertical"
        className="absolute right-0 top-0 h-full"
      /> */}
      <div className="mt-4 flex flex-col gap-4">
        {sidebarItems.map((item, idx) => {
          const { heading, items, chip } = item;
          return (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Text
                  as="p"
                  variant="paragraph2"
                  className="text-2xs font-medium uppercase text-foreground-tertiary"
                >
                  {heading}
                </Text>
                {chip}
              </div>
              <div className="flex flex-col">
                {items.map((item) => {
                  const { heading, path } = item;
                  const isActive = pathname === path;
                  return (
                    <NextLink
                      key={path}
                      href={path as LinkProps<never>["href"]}
                      className={cn(
                        "rounded-lg border border-transparent px-5 py-2 text-sm font-normal capitalize hover:bg-content1",
                        isActive &&
                          "border-divider bg-content1 hover:bg-content2",
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
