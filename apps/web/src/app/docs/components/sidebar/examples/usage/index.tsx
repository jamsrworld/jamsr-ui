"use client";

import { Icon } from "@iconify/react";
import { Sidebar } from "ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export const SidebarUsage = () => {
  return (
    <Sidebar.Wrapper>
      <AppSidebar />
      <Sidebar.Inset>
        <header className="border-b border-border px-4 py-3 sticky top-0 bg-background">
          <Sidebar.Toggle>
            <Icon
              icon="cuida:sidebar-collapse-outline"
              className="size-5 text-foreground-secondary"
            />
          </Sidebar.Toggle>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="w-full aspect-video bg-surface-secondary rounded-md"
            />
          ))}
        </div>
      </Sidebar.Inset>
    </Sidebar.Wrapper>
  );
};
