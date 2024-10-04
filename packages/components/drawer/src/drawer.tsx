import { cn } from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

export type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: () => void;
  className?: string;
};

const Backdrop = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, ...restProps } = props;
  return (
    <div
      data-component="backdrop"
      className={cn(
        "bg-overlay/30 fixed inset-0 z-backdrop flex size-full items-center justify-center backdrop-blur-sm backdrop-saturate-150",
        className,
      )}
      {...restProps}
    />
  );
};

export const Drawer = (props: DrawerProps) => {
  const { children, isOpen, onOpenChange, className } = props;
  if (!isOpen) return null;
  return (
    <div data-component="drawer" className="border border-divider">
      {isOpen && <Backdrop onClick={onOpenChange} />}
      <AnimatePresence>
        {isOpen && (
          // @ts-ignore
          <m.div
            initial={{ right: -900 }}
            animate={{ right: 0 }}
            exit={{ right: -900 }}
            className={cn(
              "fixed right-0 top-0 z-dialog h-screen bg-background-secondary",
              className,
            )}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
