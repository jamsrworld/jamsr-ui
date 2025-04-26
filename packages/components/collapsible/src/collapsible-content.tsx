import { AnimatePresence, m } from "motion/react";
import { useCollapsibleContext } from "./collapsible-context";

export type CollapsibleContentProps = {
  children: React.ReactNode;
};

export const CollapsibleContent = (props: CollapsibleContentProps) => {
  const { children } = props;
  const { isOpen, id } = useCollapsibleContext();
  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          role="region"
          id={id}
          aria-hidden={!isOpen}
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
};
