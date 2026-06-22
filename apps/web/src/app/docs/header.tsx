/* global window, document, KeyboardEvent */
"use client";

import { AppLogo } from "@/components/app-logo";
import { MoonIcon, SearchIcon, SunIcon } from "@/icons";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Command } from "ui/command";
import { Drawer } from "ui/drawer";
import { Header } from "ui/header";
import { IconButton } from "ui/icon-button";
import { Kbd } from "ui/kbd";
import { cn } from "ui/utils";
import { sidebarData } from "./app-sidebar";

// 1. Theme Toggle Component
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleThemeToggle = () => {
    const isCurrentlyDark = document.documentElement.classList.toggle("dark");
    setIsDark(isCurrentlyDark);
  };

  return (
    <IconButton
      variant="soft"
      color="default"
      label="Toggle Theme"
      onClick={handleThemeToggle}
    >
      {isDark ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </IconButton>
  );
};

// 2. Mobile Navigation Drawer Component
type MobileNavDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const MobileNavDrawer = ({ open, onOpenChange }: MobileNavDrawerProps) => {
  const pathname = usePathname();
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      swipeDirection="down"
    >
      <Drawer.Content>
        <Drawer.Bar />
        <div className="px-4 py-6 flex flex-col gap-4 overflow-y-auto max-h-[70vh]">
          <div className="flex flex-col gap-6">
            {sidebarData.map((item) => {
              const { items, title } = item;
              return (
                <div
                  key={title}
                  className="flex flex-col gap-2"
                >
                  <span className="font-semibold text-sm text-foreground-secondary px-3">
                    {title}
                  </span>
                  <div className="flex flex-col gap-1">
                    {items.map((subItem) => {
                      const isActive = pathname === subItem.url;
                      return (
                        <Link
                          key={subItem.title}
                          href={subItem.url}
                          onClick={() => onOpenChange(false)}
                          className={cn(
                            "text-foreground-secondary px-3 py-2 rounded-xl text-base w-full",
                            isActive
                              ? "bg-surface-secondary text-foreground font-medium"
                              : "hover:text-foreground hover:bg-surface-secondary",
                          )}
                        >
                          {subItem.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};

// 3. Search Command Dialog Component
type SearchCommandDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SearchCommandDialog = ({
  open,
  onOpenChange,
}: SearchCommandDialogProps) => {
  const router = useRouter();
  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <Command.Input placeholder="Type a component or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        {sidebarData.map((group) => (
          <Command.Group
            key={group.title}
            heading={group.title}
          >
            {group.items.map((item) => (
              <Command.Item
                key={item.url}
                value={item.title}
                onSelect={() => {
                  router.push(item.url);
                  onOpenChange(false);
                }}
              >
                {item.title}
              </Command.Item>
            ))}
          </Command.Group>
        ))}
      </Command.List>
    </Command.Dialog>
  );
};

// Main AppHeader Component
export const AppHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Header>
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-4">
          <Link href="/">
            <AppLogo />
          </Link>
          <div className="flex items-center gap-4">
            {/* Desktop Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center gap-3 px-3 py-1.5 text-sm rounded-xl border border-border bg-surface-secondary text-foreground-secondary hover:bg-surface hover:text-foreground transition-all w-64 text-left justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <SearchIcon className="size-4 text-foreground-secondary" />
                <span>Search docs...</span>
              </div>
              <Kbd size="sm">⌘K</Kbd>
            </button>

            {/* Mobile Search Button */}
            <IconButton
              variant="soft"
              color="default"
              label="Search Documentation"
              className="md:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <SearchIcon className="size-5" />
            </IconButton>

            <ThemeToggle />

            <IconButton
              variant="soft"
              color="default"
              label="Open Navigation"
              className="lg:hidden"
              onClick={() => setIsDrawerOpen(true)}
            >
              <Icon
                icon="lucide:menu"
                className="size-5"
              />
            </IconButton>
          </div>
        </div>
      </Header>

      <MobileNavDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      />

      <SearchCommandDialog
        open={isSearchOpen}
        onOpenChange={setIsSearchOpen}
      />
    </>
  );
};
