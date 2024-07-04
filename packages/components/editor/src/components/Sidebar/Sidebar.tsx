import type { Editor } from "@tiptap/react";
import { memo, useCallback } from "react";
import { cn } from "@/lib/utils";
import { TableOfContents } from "../TableOfContents";

export const Sidebar = memo(
  ({
    editor,
    isOpen,
    onClose,
  }: {
    editor: Editor;
    isOpen?: boolean;
    onClose: () => void;
  }) => {
    const handlePotentialClose = useCallback(() => {
      if (window.innerWidth < 1024) {
        onClose();
      }
    }, [onClose]);

    const windowClassName = cn(
      "absolute left-0 top-0 z-[999] h-full w-0 bg-white transition-all duration-300 lg:relative lg:h-auto lg:bg-white/30 lg:backdrop-blur-xl",
      "dark:bg-black lg:dark:bg-black/30",
      !isOpen && "border-r-transparent",
      isOpen && "w-80 border-r border-r-neutral-200 dark:border-r-neutral-800",
    );

    return (
      <div className={windowClassName}>
        <div className="size-full overflow-hidden">
          <div className="size-full overflow-auto p-6">
            <TableOfContents
              onItemClick={handlePotentialClose}
              editor={editor}
            />
          </div>
        </div>
      </div>
    );
  },
);

Sidebar.displayName = "TableOfContentSidepanel";
