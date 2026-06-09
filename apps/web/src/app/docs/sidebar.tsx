"use client";

import { AppLogo } from "@/components/app-logo";
import { Chip } from "ui/chip";
import { Sidebar } from "ui/sidebar";
import { Text } from "ui/text";
import { Route } from "next";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "tailwind-variants";

const data: { title: string; items: { title: string; url: Route }[] }[] = [
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

const LinkItem = ({ href, ...restProp }: LinkProps<Route>) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link
      href={href}
      {...restProp}
      className={cn(
        restProp.className,
        isActive ? "bg-background-quaternary" : "hover:bg-background-tertiary",
      )}
    />
  );
};

export const AppSidebar = () => {
  return (
    <Sidebar width={250}>
      <Sidebar.Container>
        <Sidebar.Backdrop />
        <Sidebar.Content>
          <Sidebar.Header className="flex justify-between border-b border-border">
            <AppLogo />
            <Sidebar.Toggle />
          </Sidebar.Header>
          <Sidebar.Body>
            {data.map((item) => {
              const { items, title } = item;
              return (
                <Sidebar.Group key={title}>
                  <Sidebar.GroupLabel>{title}</Sidebar.GroupLabel>
                  <Sidebar.Menu>
                    {items.map((item) => {
                      return (
                        <Sidebar.MenuItem key={item.title}>
                          <Sidebar.MenuItemButton
                            render={<LinkItem href={item.url} />}
                          >
                            {item.title}
                          </Sidebar.MenuItemButton>
                        </Sidebar.MenuItem>
                      );
                    })}
                  </Sidebar.Menu>
                </Sidebar.Group>
              );
            })}
          </Sidebar.Body>
          <Sidebar.Footer className="flex gap-2 items-center">
            <Text>Version 0.2.0</Text>
            <Chip
              color="primary"
              size="sm"
            >
              Beta
            </Chip>
          </Sidebar.Footer>
        </Sidebar.Content>
      </Sidebar.Container>
    </Sidebar>
  );
};
