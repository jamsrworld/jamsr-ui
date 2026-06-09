"use client";

import { Command } from "ui/command";
import React, { useEffect, useState } from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

export const CommandDialogDemo = (
  props: React.ComponentProps<typeof Command.Dialog>,
) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: globalThis.KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    globalThis.document.addEventListener("keydown", down);
    return () => globalThis.document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="text-sm text-foreground-secondary">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-surface-secondary px-1.5 font-mono text-xs font-medium text-foreground-secondary">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to open the command menu
      </p>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        {...props}
      >
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <Calendar className="mr-2" />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <Smile className="mr-2" />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item>
              <Calculator className="mr-2" />
              <span>Calculator</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <User className="mr-2" />
              <span>Profile</span>
              <Command.Shortcut>⌘P</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <CreditCard className="mr-2" />
              <span>Billing</span>
              <Command.Shortcut>⌘B</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <Settings className="mr-2" />
              <span>Settings</span>
              <Command.Shortcut>⌘S</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
};
