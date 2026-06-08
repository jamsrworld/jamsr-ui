"use client";

import { NavigationMenu } from "jamsrui/navigation-menu";
import { ChevronDown } from "lucide-react";

const gettingStartedLinks = [
  {
    href: "#quick-start",
    title: "Quick Start",
    description: "Install and assemble your first component.",
  },
  {
    href: "#accessibility",
    title: "Accessibility",
    description: "Learn how we build accessible components.",
  },
  {
    href: "#releases",
    title: "Releases",
    description: "See what's new in the latest versions.",
  },
  {
    href: "#about",
    title: "About",
    description: "Learn more about the project and our mission.",
  },
];

const handbookLinks = [
  {
    href: "#styling",
    title: "Styling",
    description:
      "Components can be styled with plain CSS, Tailwind, or CSS-in-JS.",
  },
  {
    href: "#animation",
    title: "Animation",
    description:
      "Animate with CSS transitions, animations, or JavaScript libraries.",
  },
  {
    href: "#composition",
    title: "Composition",
    description: "Replace and compose with your own existing components.",
  },
];

export const NavigationMenuUsage = () => {
  return (
    <NavigationMenu>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            Getting Started
            <NavigationMenu.Icon>
              <ChevronDown className="size-3" />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2">
              {gettingStartedLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenu.Link
                    href={item.href}
                    className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-secondary"
                  >
                    <h3 className="mb-1 text-sm font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-snug text-foreground-secondary">
                      {item.description}
                    </p>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            Handbook
            <NavigationMenu.Icon>
              <ChevronDown className="size-3" />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="flex w-75 flex-col gap-1">
              {handbookLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenu.Link
                    href={item.href}
                    className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-surface-secondary"
                  >
                    <h3 className="mb-1 text-sm font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-snug text-foreground-secondary">
                      {item.description}
                    </p>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="https://github.com">
            GitHub
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          sideOffset={10}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
        >
          <NavigationMenu.Popup>
            <NavigationMenu.Arrow />
            <NavigationMenu.Viewport />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu>
  );
};
