import { ChevronIcons } from "@jamsr-ui/shared-icons";
import { TRANSITION_VARIANTS, forwardRefUI } from "@jamsr-ui/utils";
import { AnimatePresence, m } from "framer-motion";
import { useMemo } from "react";
import { useAccordionItem, type UseAccordionItemProps } from "./use-accordion-item";

export type AccordionItemProps = UseAccordionItemProps;

export const AccordionItem = forwardRefUI<"button", AccordionItemProps>((props, ref) => {
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
        indicator: <ChevronIcons.Down />,
        isOpen,
        isDisabled: false,
      });
    }
    return indicator ?? <ChevronIcons.Down />;
  }, [indicator, isOpen]);

  return (
    <Component
      ref={ref}
      {...getBaseProps()}
    >
      <div {...getHeadingProps()}>
        <button
          type="button"
          {...getButtonProps()}
        >
          {triggerContent || (
            <>
              {startContent && <div {...getStartContentProps()}>{startContent}</div>}
              <div {...getTitleWrapperProps()}>
                {title && <span {...getTitleProps()}>{title}</span>}
                {subtitle && <span {...getSubtitleProps()}>{subtitle}</span>}
              </div>
              {endContent && <div {...getEndContentProps()}>{endContent}</div>}
              {!hideIndicator && <span {...getIndicatorProps()}>{indicatorContent}</span>}
            </>
          )}
        </button>
        {actionContent && <div {...getActionContentProps()}>{actionContent}</div>}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
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
});
AccordionItem.displayName = "UI.AccordionItem";
