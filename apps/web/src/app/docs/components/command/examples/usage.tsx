"use client";

import { Command } from "jamsrui/command";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

export const CommandUsage = (props: Command.Props) => {
  return (
    <Command
      className="max-w-md"
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
          <Command.Item disabled>
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
    </Command>
  );
};
