import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  dataAttr,
  deepMergeProps,
  includes,
  type ComponentPropsWithAs,
  type PropGetter,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import { type m } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  type ComponentProps,
} from "react";
import { useAccordionItemContext } from "./accordion-context";
import {
  accordionItem,
  type AccordionItemSlots,
  type AccordionItemVariantProps,
} from "./style";

export type AccordionItemIndicatorProps = {
  indicator?: React.ReactNode;
  isOpen?: boolean;
  isDisabled?: boolean;
};

type ContentPlacement = "inside" | "outside";

type Props = AccordionItemVariantProps & {
  children: React.ReactNode;
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  startContent?: React.ReactNode;
  startContentPlacement?: ContentPlacement;
  endContent?: React.ReactNode;
  endContentPlacement?: ContentPlacement;
  classNames?: SlotsToClasses<AccordionItemSlots>;
  className?: string;
  indicator?:
    | React.ReactNode
    | ((props: AccordionItemIndicatorProps) => React.ReactNode);
  isDisabled?: boolean;
  // @ts-expect-error framer-motion type error
  motionProps?: ComponentProps<typeof m.div>;
};

export type UseAccordionItemProps = ComponentPropsWithAs<"div", Props>;

const accessKeys = ["Home", "End", "ArrowUp", "ArrowDown"] as const;

export const useAccordionItem = ($props: UseAccordionItemProps) => {
  const { accordionItem: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  //
  const id = useId();
  const panelId = `panel-${id}`;
  const headerId = `header-${id}`;

  const {
    as,
    children,
    heading,
    classNames,
    endContent,
    startContent,
    subheading,
    className,
    hideIndicator: $hideIndicator,
    indicator,
    isDisabled = false,
    startContentPlacement = "inside",
    endContentPlacement = "inside",
    motionProps,
    color: $color,
    ...restProps
  } = props;

  const Component = as ?? "div";
  const {
    isOpen,
    onToggle,
    onFocusFirst,
    onFocusLast,
    onFocusNext,
    onFocusPrevious,
    ref,
    color: $$color,
    hideIndicator: $$hideIndicator,
  } = useAccordionItemContext();

  const color = $color ?? $$color;
  const hideIndicator = $hideIndicator ?? $$hideIndicator;

  const styles = accordionItem({
    hideIndicator,
    color,
  });

  useImperativeHandle(
    ref,
    () => ({
      isDisabled,
      focus: () => {
        buttonRef.current?.focus();
      },
    }),
    [isDisabled],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;
      if (includes(accessKeys, key)) {
        switch (key) {
          case "ArrowDown":
            e.preventDefault();
            onFocusNext();
            return;
          case "ArrowUp":
            e.preventDefault();
            onFocusPrevious();
            return;
          case "Home":
            e.preventDefault();
            onFocusFirst();
            return;
          case "End":
            e.preventDefault();
            onFocusLast();
            return;
          default:
            null;
        }
      }
    },
    [onFocusFirst, onFocusLast, onFocusNext, onFocusPrevious],
  );

  useEffect(() => {
    const buttonDOM = buttonRef.current;
    buttonDOM?.addEventListener("keydown", handleKeyDown);
    return () => buttonDOM?.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const getBaseProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-component": "accordion-item",
        "data-slot": "base",
        className: styles.base({
          className: cn(classNames?.base, className),
        }),
        ...props,
        ...restProps,
      };
    },
    [className, classNames?.base, restProps, styles],
  );

  const getTriggerProps: PropGetter<ComponentProps<"button">> = useCallback(
    (props = {}) => {
      return {
        id: headerId,
        "data-slot": "trigger",
        "data-disabled": dataAttr(isDisabled),
        "data-open": dataAttr(isOpen),
        "aria-disabled": dataAttr(isDisabled),
        "aria-controls": panelId,
        "aria-expanded": dataAttr(isOpen),
        className: styles.trigger({
          className: classNames?.trigger,
        }),
        type: "button",
        onClick: onToggle,
        disabled: isDisabled,
        ref: buttonRef,
        ...props,
      };
    },
    [
      classNames?.trigger,
      headerId,
      isDisabled,
      isOpen,
      onToggle,
      panelId,
      styles,
    ],
  );

  const getPanelProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "panel",
        id: panelId,
        "data-open": dataAttr(isOpen),
        "aria-labelledby": headerId,
        role: "region",
        "data-disabled": dataAttr(isDisabled),
        className: styles.panel({
          className: classNames?.panel,
        }),
        ...props,
      };
    },
    [classNames?.panel, headerId, isDisabled, isOpen, panelId, styles],
  );

  const getIndicatorProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "indicator",
        className: styles.indicator({
          className: classNames?.indicator,
        }),
        "data-open": dataAttr(isOpen),
        ...props,
      };
    },
    [classNames?.indicator, isOpen, styles],
  );

  const getHeaderProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "header",
        className: styles.header({
          className: classNames?.header,
        }),
        ...props,
      };
    },
    [classNames?.header, styles],
  );

  const getStartContentProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "start-content",
        className: styles.startContent({
          className: classNames?.startContent,
        }),
        ...props,
      };
    },
    [classNames?.startContent, styles],
  );

  const getEndContentProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "end-content",
        className: styles.endContent({
          className: classNames?.endContent,
        }),
        ...props,
      };
    },
    [classNames?.endContent, styles],
  );

  const getHeadingProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "heading",
        className: styles.heading({
          className: classNames?.heading,
        }),
        ...props,
      };
    },
    [classNames?.heading, styles],
  );

  const getMainContentProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "main-content",
        className: styles.mainContent({
          className: classNames?.mainContent,
        }),
        ...props,
      };
    },
    [classNames?.mainContent, styles],
  );

  const getSubheadingProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "subheading",
        className: styles.subheading({
          className: classNames?.subheading,
        }),
        ...props,
      };
    },
    [classNames?.subheading, styles],
  );

  return {
    Component,
    isOpen,
    children,
    heading,
    subheading,
    startContent,
    startContentPlacement,
    endContent,
    endContentPlacement,
    indicator,
    hideIndicator,
    motionProps,
    getBaseProps,
    getStartContentProps,
    getEndContentProps,
    getHeaderProps,
    getTriggerProps,
    getPanelProps,
    getIndicatorProps,
    getHeadingProps,
    getSubheadingProps,
    getMainContentProps,
  };
};
