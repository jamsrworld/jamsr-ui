import { ChevronDownIcon } from "@jamsr-ui/shared-icons";
import {
  TRANSITION_VARIANTS,
  type ComponentPropsWithAs,
} from "@jamsr-ui/utils";
import { AnimatePresence, m } from "motion/react";
import { useMemo } from "react";
import {
  useAccordionItem,
  type UseAccordionItemProps,
} from "./use-accordion-item";

export type AccordionItemProps = UseAccordionItemProps;

export const AccordionItem = <T extends React.ElementType = "div">(
  props: ComponentPropsWithAs<T, AccordionItemProps>,
) => {
  const {
    Component,
    children,
    startContent,
    startContentPlacement,
    endContent,
    endContentPlacement,
    hideIndicator,
    subheading,
    heading,
    indicator,
    isOpen,
    getBaseProps,
    getTriggerProps,
    getPanelProps,
    getIndicatorProps,
    getHeadingProps,
    getEndContentProps,
    getStartContentProps,
    motionProps,
    getHeaderProps,
    getMainContentProps,
    getSubheadingProps,
  } = useAccordionItem(props);
  const indicatorContent = useMemo(() => {
    if (typeof indicator === "function") {
      return indicator({
        indicator: <ChevronDownIcon />,
        isOpen,
        isDisabled: false,
      });
    }
    return (indicator ?? indicator === null) ? indicator : <ChevronDownIcon />;
  }, [indicator, isOpen]);

  return (
    <Component {...getBaseProps()}>
      <h3 {...getHeaderProps()}>
        {startContent && startContentPlacement === "outside" && (
          <div {...getStartContentProps()}>{startContent}</div>
        )}
        <button type="button" {...getTriggerProps()}>
          {startContent && startContentPlacement === "inside" && (
            <div {...getStartContentProps()}>{startContent}</div>
          )}
          <div {...getMainContentProps()}>
            {heading && <span {...getHeadingProps()}>{heading}</span>}
            {subheading && <span {...getSubheadingProps()}>{subheading}</span>}
          </div>
          {endContent && endContentPlacement === "inside" && (
            <div {...getEndContentProps()}>{endContent}</div>
          )}
          {!hideIndicator && (
            <span {...getIndicatorProps()}>{indicatorContent}</span>
          )}
        </button>
        {endContent && endContentPlacement === "outside" && (
          <div {...getEndContentProps()}>{endContent}</div>
        )}
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.section
            className="overflow-hidden"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={TRANSITION_VARIANTS.collapse}
            {...motionProps}
          >
            <div {...getPanelProps()}>{children}</div>
          </m.section>
        )}
      </AnimatePresence>
    </Component>
  );
};
