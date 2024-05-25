import { cn } from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

type Props = {
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
        "bg-overlay/30 z-backdrop fixed inset-0 flex size-full h-full w-full items-center justify-center backdrop-blur-sm backdrop-saturate-150",
        className,
      )}
      {...restProps}
    />
  );
};

export const Drawer = (props: Props) => {
  const { children, isOpen, onOpenChange, className } = props;
  if (!isOpen) return null;
  return (
    <div
      data-component="drawer"
      className="border-divider border"
    >
      {isOpen && <Backdrop onClick={onOpenChange} />}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ right: -900 }}
            animate={{ right: 0 }}
            exit={{ right: -900 }}
            className={cn(
              "bg-background-paper z-dialog fixed right-0 top-0 h-screen",
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
