"use client";

import { Command } from "jamsrui/command";
import {
  FileText,
  Globe,
  HelpCircle,
  Mail,
  MessageSquare,
  Music,
  Settings,
  User,
  Video,
} from "lucide-react";

export const CommandWithGroups = (props: Command.Props) => {
  return (
    <Command
      className="max-w-md"
      {...props}
    >
      <Command.Input placeholder="Search all actions..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Communication">
          <Command.Item>
            <Mail className="mr-2" />
            <span>Mail</span>
          </Command.Item>
          <Command.Item>
            <MessageSquare className="mr-2" />
            <span>Messages</span>
          </Command.Item>
          <Command.Item>
            <Video className="mr-2" />
            <span>Video Call</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Media">
          <Command.Item>
            <Music className="mr-2" />
            <span>Music</span>
          </Command.Item>
          <Command.Item>
            <Globe className="mr-2" />
            <span>Browser</span>
          </Command.Item>
          <Command.Item>
            <FileText className="mr-2" />
            <span>Documents</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Other">
          <Command.Item>
            <User className="mr-2" />
            <span>Profile</span>
          </Command.Item>
          <Command.Item>
            <Settings className="mr-2" />
            <span>Settings</span>
          </Command.Item>
          <Command.Item>
            <HelpCircle className="mr-2" />
            <span>Help Center</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  );
};
