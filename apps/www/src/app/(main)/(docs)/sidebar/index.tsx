"use client";

import { Link } from "@jamsr-ui/next";
import { Chip, Text } from "@jamsr-ui/react";
import { cn } from "@jamsr-ui/utils";
import { usePathname } from "next/navigation";
import { sidebarItems } from "./config";

export const ComponentsSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed top-14 flex h-[calc(100vh-3.5rem)] min-w-[240px] flex-col gap-4 overflow-y-auto overflow-x-hidden border-r border-divider p-2 scrollbar-hide max-md:hidden">
      <div className="mt-4 flex flex-col gap-4">
        {sidebarItems.map((item, idx) => {
          const { heading, items, tags } = item;
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
                {tags?.map((item) => {
                  return <Chip size="sm" key={item}>{item}</Chip>;
                })}
              </div>
              <div className="flex flex-col">
                {items.map((item) => {
                  const { heading, path } = item;
                  const isActive = pathname === path;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={cn(
                        "rounded-lg text-inherit border border-transparent px-5 py-2 font-normal capitalize hover:bg-content1",
                        isActive &&
                          "border-divider bg-content1 hover:bg-content2",
                      )}
                      variant="paragraph"
                    >
                      {heading}
                    </Link>
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
