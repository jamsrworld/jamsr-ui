"use client";

import { createContext, use, useMemo } from "react";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { accordionStyles } from "./styles";
import { cn } from "../utils/cn";

import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "tailwind-variants";

type AccordionVariants = VariantProps<typeof accordionStyles>;

const AccordionContext = createContext<{
  styles: ReturnType<typeof accordionStyles>;
} | null>(null);

const useAccordionContext = () => {
  const ctx = use(AccordionContext);
  if (!ctx) {
    throw new Error("useAccordionContext must be used within an Accordion");
  }
  return ctx;
};

export const Accordion = (props: Accordion.Props) => {
  const { variant, radius, className, ...restProps } = props;
  const styles = accordionStyles({ variant, radius });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <AccordionContext value={value}>
      <AccordionPrimitive.Root
        {...restProps}
        className={styles.root({ className: cn(className) })}
      />
    </AccordionContext>
  );
};
export namespace Accordion {
  export interface Props
    extends AccordionPrimitive.Root.Props, AccordionVariants {}
}

export const AccordionItem = (props: AccordionPrimitive.Item.Props) => {
  const { styles } = useAccordionContext();
  return (
    <AccordionPrimitive.Item
      {...props}
      className={styles.item({ className: cn(props.className) })}
    />
  );
};

export const AccordionTrigger = (props: AccordionTrigger.Props) => {
  const { styles } = useAccordionContext();
  const { slotProps, ...restProps } = props;
  return (
    <AccordionPrimitive.Header
      {...slotProps?.header}
      className={styles.heading({
        className: cn(slotProps?.header?.className),
      })}
    >
      <AccordionPrimitive.Trigger
        {...restProps}
        className={styles.trigger({ className: cn(restProps.className) })}
      />
    </AccordionPrimitive.Header>
  );
};
export namespace AccordionTrigger {
  export interface Props extends AccordionPrimitive.Trigger.Props {
    slotProps?: {
      header?: AccordionPrimitive.Header.Props;
    };
  }
}

export const AccordionContent = (props: AccordionContent.Props) => {
  const { styles } = useAccordionContext();
  const { slotProps, ...restProps } = props;
  return (
    <AccordionPrimitive.Panel
      {...slotProps?.panel}
      className={styles.panel({ className: cn(slotProps?.panel?.className) })}
    >
      <div
        {...restProps}
        className={styles.content({ className: restProps.className })}
      />
    </AccordionPrimitive.Panel>
  );
};
export namespace AccordionContent {
  export interface Props extends ComponentPropsWithRef<"div"> {
    slotProps?: {
      panel?: AccordionPrimitive.Panel.Props;
    };
  }
}

export const AccordionIndicator = (props: AccordionIndicator.Props) => {
  const { styles } = useAccordionContext();
  const { children = <PlusIcon />, className, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={styles.indicator({ className: cn(className) })}
    >
      {children}
    </div>
  );
};
export namespace AccordionIndicator {
  export interface Props extends ComponentPropsWithRef<"div"> {}
}

const PlusIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg fill="currentcolor" viewBox="0 0 12 12" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />{" "}
    </svg>
  );
};
