"use client";

import { cn } from "@jamsrui/utils";
import { Sidebar, useSidebarState } from "jamsrui/sidebar";
import { Text } from "jamsrui/text";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  onThisPage?: React.ReactNode;
  size?: "md" | "lg";
};

export const DocsPageInner = (props: Props) => {
  const { children, description, size, title, onThisPage } = props;
  const { isOpen } = useSidebarState();
  return (
    <div className={"flex w-full"}>
      <div
        className={cn(
          "py-12 w-full px-4 md:px-12 mx-auto",
          size === "lg" ? "max-w-5xl" : "max-w-3xl",
        )}
      >
        <Sidebar.Toggle className="md:hidden" />
        {!isOpen && <Sidebar.Toggle />}
        <article className={cn("flex col-span-2 flex-col gap-8 w-full py-12")}>
          <div className="flex flex-col gap-2">
            <Text
              render={<h1 />}
              variant="h2"
            >
              {title}
            </Text>
            <Text className="text-foreground-secondary">{description}</Text>
          </div>
          <div className="flex flex-col gap-12">{children}</div>
        </article>
      </div>
      {onThisPage}
    </div>
  );
};
