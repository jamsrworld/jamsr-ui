"use client";

import { cn } from "@jamsrui/utils";
import { Text } from "ui/text";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  onThisPage?: React.ReactNode;
};

export const DocsPageInner = (props: Props) => {
  const { children, description, title, onThisPage } = props;
  return (
    <>
      <div className={cn("w-full px-4 md:px-12 max-w-4xl")}>
        <article className={cn("flex col-span-2 flex-col gap-8 w-full")}>
          <div className="flex flex-col gap-1">
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
    </>
  );
};
