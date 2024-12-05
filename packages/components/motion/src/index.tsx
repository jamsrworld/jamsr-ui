import { m, type MotionProps } from "framer-motion";
import { type ComponentPropsWithRef } from "react";

export const MotionDiv = (
  props: MotionProps & Omit<ComponentPropsWithRef<"div">, keyof MotionProps>,
) => {
  const { children } = props;
  // @ts-expect-error FramerError
  return <m.div {...props}>{children}</m.div>;
};

export const MotionSpan = (
  props: MotionProps & Omit<ComponentPropsWithRef<"span">, keyof MotionProps>,
) => {
  const { children } = props;
  // @ts-expect-error FramerError
  return <m.span {...props}>{children}</m.span>;
};

export const MotionUl = (
  props: MotionProps & Omit<ComponentPropsWithRef<"ul">, keyof MotionProps>,
) => {
  const { children } = props;
  // @ts-expect-error FramerError
  return <m.ul {...props}>{children}</m.ul>;
};

export const MotionLi = (
  props: MotionProps & Omit<ComponentPropsWithRef<"li">, keyof MotionProps>,
) => {
  const { children } = props;
  // @ts-expect-error FramerError
  return <m.li {...props}>{children}</m.li>;
};

export const MotionButton = (
  props: MotionProps & Omit<ComponentPropsWithRef<"button">, keyof MotionProps>,
) => {
  const {
    children,
    disabled,
    initial,
    whileTap,
    animate,
    whileDrag,
    whileFocus,
    whileHover,
    ...restProps
  } = props;
  return (
    // @ts-expect-error FramerError
    <m.button
      disabled={disabled}
      {...(!disabled && {
        initial,
        whileTap,
        animate,
        whileDrag,
        whileFocus,
        whileHover,
      })}
      {...restProps}
    >
      {children}
    </m.button>
  );
};

export const MotionSection = (
  props: MotionProps &
    Omit<ComponentPropsWithRef<"section">, keyof MotionProps>,
) => {
  const { children } = props;
  // @ts-expect-error FramerError
  return <m.section {...props}>{children}</m.section>;
};
