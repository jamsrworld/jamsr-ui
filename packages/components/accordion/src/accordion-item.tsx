import { ChevronDown } from "@jamsr-ui/shared-icons";
import { ComponentPropsWithAs, TRANSITION_VARIANTS } from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
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
    endContent,
    hideIndicator,
    subtitle,
    title,
    indicator,
    isOpen,
    actionContent,
    triggerContent,
    getBaseProps,
    getButtonProps,
    getContentProps,
    getIndicatorProps,
    getSubtitleProps,
    getTitleProps,
    getHeadingProps,
    getEndContentProps,
    getStartContentProps,
    getTitleWrapperProps,
    getActionContentProps,
  } = useAccordionItem(props);

  const indicatorContent = useMemo(() => {
    if (typeof indicator === "function") {
      return indicator({
        indicator: <ChevronDown />,
        isOpen,
        isDisabled: false,
      });
    }
    return indicator ?? <ChevronDown />;
  }, [indicator, isOpen]);

  return (
    <Component {...getBaseProps()}>
      <div {...getHeadingProps()}>
        <button
          type="button"
          {...getButtonProps()}
        >
          {triggerContent || (
            <>
              {startContent && (
                <div {...getStartContentProps()}>{startContent}</div>
              )}
              <div {...getTitleWrapperProps()}>
                {title && <span {...getTitleProps()}>{title}</span>}
                {subtitle && <span {...getSubtitleProps()}>{subtitle}</span>}
              </div>
              {endContent && <div {...getEndContentProps()}>{endContent}</div>}
              {!hideIndicator && (
                <span {...getIndicatorProps()}>{indicatorContent}</span>
              )}
            </>
          )}
        </button>
        {actionContent && (
          <div {...getActionContentProps()}>{actionContent}</div>
        )}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          // @ts-ignore
          <m.div
            className="overflow-hidden"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={TRANSITION_VARIANTS.collapse}
          >
            <div {...getContentProps()}>{children}</div>
          </m.div>
        )}
      </AnimatePresence>
    </Component>
  );
};
