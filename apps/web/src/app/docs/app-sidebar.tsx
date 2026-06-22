"use client";

import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { cn } from "tailwind-variants";
import { ScrollArea } from "ui/scroll-area";
import { Text } from "ui/text";

export const sidebarData: {
  title: string;
  items: { title: string; url: Route }[];
}[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Theme",
        url: "/docs/theme",
      },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", url: "/docs/components/accordion" },
      { title: "Alert", url: "/docs/components/alert" },
      { title: "Alert Dialog", url: "/docs/components/alert-dialog" },
      { title: "Autocomplete", url: "/docs/components/autocomplete" },
      { title: "Avatar", url: "/docs/components/avatar" },
      { title: "Breadcrumb", url: "/docs/components/breadcrumb" },
      { title: "Button", url: "/docs/components/button" },
      { title: "Calendar", url: "/docs/components/calendar" },
      { title: "Card", url: "/docs/components/card" },
      { title: "Charts", url: "/docs/components/charts" },
      { title: "Checkbox", url: "/docs/components/checkbox" },
      { title: "Checkbox Group", url: "/docs/components/checkbox-group" },
      { title: "Chip", url: "/docs/components/chip" },
      { title: "Circular Progress", url: "/docs/components/circular-progress" },
      { title: "Clipboard", url: "/docs/components/clipboard" },
      { title: "Collapsible", url: "/docs/components/collapsible" },
      { title: "Combobox", url: "/docs/components/combobox" },
      { title: "Command", url: "/docs/components/command" },
      { title: "Context Menu", url: "/docs/components/context-menu" },
      { title: "Data Grid", url: "/docs/components/data-grid" },
      { title: "Date Field", url: "/docs/components/date-field" },
      { title: "Date Picker", url: "/docs/components/date-picker" },
      { title: "Dialog", url: "/docs/components/dialog" },
      { title: "Field", url: "/docs/components/field" },
      { title: "Separator", url: "/docs/components/separator" },
      { title: "Drawer", url: "/docs/components/drawer" },
      { title: "Editor", url: "/docs/components/editor" },
      { title: "File Upload", url: "/docs/components/file-upload" },
      { title: "Header", url: "/docs/components/header" },
      { title: "Icon Button", url: "/docs/components/icon-button" },
      { title: "Input", url: "/docs/components/input" },
      { title: "Kbd", url: "/docs/components/kbd" },
      { title: "Linear Progress", url: "/docs/components/linear-progress" },
      { title: "Link", url: "/docs/components/link" },
      { title: "Meter", url: "/docs/components/meter" },
      { title: "Menu", url: "/docs/components/menu" },
      { title: "Menubar", url: "/docs/components/menubar" },
      { title: "Navigation Menu", url: "/docs/components/navigation-menu" },
      { title: "Number Field", url: "/docs/components/number-field" },
      { title: "Otp Input", url: "/docs/components/otp-input" },
      { title: "Pagination", url: "/docs/components/pagination" },
      { title: "Popover", url: "/docs/components/popover" },
      { title: "Progress", url: "/docs/components/progress" },
      { title: "Preview Card", url: "/docs/components/preview-card" },
      { title: "Radio Group", url: "/docs/components/radio-group" },
      { title: "Rating", url: "/docs/components/rating" },
      { title: "Ripple", url: "/docs/components/ripple" },
      { title: "Scroll Area", url: "/docs/components/scroll-area" },
      { title: "Select", url: "/docs/components/select" },
      { title: "Sidebar", url: "/docs/components/sidebar" },
      { title: "Skeleton", url: "/docs/components/skeleton" },
      { title: "Slider", url: "/docs/components/slider" },
      { title: "Switch", url: "/docs/components/switch" },
      { title: "Table", url: "/docs/components/table" },
      { title: "Tabs", url: "/docs/components/tabs" },
      { title: "Tags Input", url: "/docs/components/tags-input" },
      { title: "Time Field", url: "/docs/components/time-field" },
      { title: "Text", url: "/docs/components/text" },
      { title: "TextArea", url: "/docs/components/textarea" },
      { title: "Toast", url: "/docs/components/toast" },
      { title: "Toggle", url: "/docs/components/toggle" },
      { title: "Toggle Group", url: "/docs/components/toggle-group" },
      { title: "Toolbar", url: "/docs/components/toolbar" },
      { title: "Tooltip", url: "/docs/components/tooltip" },
    ],
  },
  {
    title: "Libs",
    items: [
      {
        title: "React Hook Form",
        url: "/docs/libs/react-hook-form",
      },
    ],
  },
];

type LinkProps = ComponentProps<typeof Link>;

const LinkItem = ({ href, ...restProp }: LinkProps) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link
      href={href}
      {...restProp}
      className={cn(
        "text-foreground-secondary px-3 py-2 rounded-xl text-base w-full",
        restProp.className,
        isActive
          ? "bg-surface-secondary text-foreground"
          : "hover:text-foreground",
      )}
    />
  );
};

export const AppSidebar = () => {
  return (
    <div className="sticky max-lg:hidden top-12 h-[calc(100vh-48px)] self-start overscroll-contain">
      <ScrollArea className="h-full">
        <ScrollArea.Viewport className="overscroll-contain h-full">
          <div className="flex flex-col gap-2 min-w-55">
            {sidebarData.map((item) => {
              const { items, title } = item;
              return (
                <div
                  key={title}
                  className="flex flex-col"
                >
                  <Text
                    variant="h6"
                    className="mb-3"
                  >
                    {title}
                  </Text>
                  {items.map((item) => {
                    return (
                      <LinkItem
                        key={item.title}
                        href={item.url}
                      >
                        {item.title}
                      </LinkItem>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea>
    </div>
  );
};
