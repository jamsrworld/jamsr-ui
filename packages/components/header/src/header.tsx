import { Divider } from "@jamsr-ui/divider";
import { AnimatePresence, m } from "framer-motion";
import { useHeader, type UseHeaderProps } from "./use-header";

export type HeaderProps = UseHeaderProps;

export const Header = (props: HeaderProps) => {
  const { getBaseProps, children, isVisible, isBordered } = useHeader(props);
  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.header
        initial={{
          opacity: 1,
          y: -100,
        }}
        exit={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 1,
          stiffness: 120,
          damping: 20,
        }}
        data-component="header"
        data-state={isVisible ? "active" : "inactive"}
        {...getBaseProps()}
      >
        {children}
        {isBordered && <Divider className="absolute bottom-0 left-0 w-full" />}
      </m.header>
    </AnimatePresence>
  );
};
