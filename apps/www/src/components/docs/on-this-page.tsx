"use client";

import { toSlug } from "@/utils/fns";
import { Link, Text } from "@jamsr-ui/react";
import { useEffect, useState } from "react";

type Props = {
  headings: string[];
};

const ListItem = (prop: { heading: string; id: string; isActive: boolean }) => {
  const { heading, id, isActive } = prop;
  return (
    <li className="text-sm" key={heading}>
      <Link
        className={isActive ? "text-foreground" : "text-foreground-secondary"}
        href={`#${id}`}
      >
        {heading}
      </Link>
    </li>
  );
};

export const OnThisPage = (props: Props) => {
  const { headings } = props;
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = headings.map((item) =>
      document.getElementById(toSlug(item)),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0% 0% -80% 0%",
        threshold: 0,
      },
    );

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  return (
    <aside className="fixed right-0 h-dvh w-full max-w-[300px] overflow-scroll px-4 py-12 scrollbar-hide max-xl:hidden">
      <Text as="h3" className="text-foreground-tertiary">
        On this page
      </Text>
      <ul className="mt-4 flex flex-col gap-2">
        {headings.map((heading) => {
          const id = toSlug(heading);
          const isActive = activeId === id;
          return (
            <ListItem
              key={heading}
              heading={heading}
              isActive={isActive}
              id={id}
            />
          );
        })}
      </ul>
    </aside>
  );
};
