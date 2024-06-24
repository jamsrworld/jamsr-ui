import {
  ComponentPropsWithAs,
  cn,
  dataAttr,
  type PropGetter,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import { useCallback, type ComponentProps } from "react";
import { useAccordionContext } from "./accordion-context";
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

type Props = AccordionItemVariantProps & {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  actionContent?: React.ReactNode;
  classNames?: SlotsToClasses<AccordionItemSlots>;
  className?: string;
  indicator?:
    | React.ReactNode
    | ((props: AccordionItemIndicatorProps) => React.ReactNode);
  isDisabled?: boolean;
} & (
    | {
        title: React.ReactNode;
        triggerContent?: undefined;
      }
    | {
        triggerContent?: React.ReactNode;
        title?: undefined;
      }
  );

export type UseAccordionItemProps = ComponentPropsWithAs<"div", Props>;

export const useAccordionItem = (props: UseAccordionItemProps) => {
  const {
    as,
    children,
    title,
    classNames,
    endContent,
    actionContent,
    startContent,
    subtitle,
    className,
    hideIndicator,
    indicator,
    triggerContent,
    isDisabled,
  } = props;

  const Component = as ?? "div";
  const { index, isOpen, onChangeIndex } = useAccordionContext();

  const styles = accordionItem({
    hideIndicator,
  });

  const onClick = useCallback(() => {
    if (!isOpen) onChangeIndex(index);
    else onChangeIndex(-1);
  }, [index, isOpen, onChangeIndex]);

  const getBaseProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "base",
        "data-disabled": dataAttr(isDisabled),
        className: styles.base({
          className: cn(classNames?.base, className),
        }),
        ...props,
      };
    },
    [className, classNames?.base, styles],
  );

  const getButtonProps: PropGetter<ComponentProps<"button">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "trigger",
        "data-disabled": dataAttr(isDisabled),
        className: styles.trigger({
          className: classNames?.trigger,
        }),
        type: "button",
        onClick,
        disabled: isDisabled,
        ...props,
      };
    },
    [classNames?.trigger, onClick, styles],
  );

  const getContentProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "content",
        className: styles.content({
          className: classNames?.content,
        }),
        ...props,
      };
    },
    [classNames?.content, styles],
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

  const getActionContentProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "action-content",
        className: styles.actionContent({
          className: classNames?.actionContent,
        }),
        ...props,
      };
    },
    [classNames?.actionContent, styles],
  );

  const getTitleProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "title",
        className: styles.title({
          className: classNames?.title,
        }),
        ...props,
      };
    },
    [classNames?.title, styles],
  );

  const getTitleWrapperProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "title-wrapper",
        className: styles.titleWrapper({
          className: classNames?.titleWrapper,
        }),
        ...props,
      };
    },
    [classNames?.titleWrapper, styles],
  );

  const getSubtitleProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "subtitle",
        className: styles.subtitle({
          className: classNames?.subtitle,
        }),
        ...props,
      };
    },
    [classNames?.subtitle, styles],
  );

  return {
    Component,
    isOpen,
    children,
    title,
    subtitle,
    startContent,
    endContent,
    actionContent,
    indicator,
    triggerContent,
    hideIndicator,
    getBaseProps,
    getStartContentProps,
    getEndContentProps,
    getActionContentProps,
    getHeadingProps,
    getButtonProps,
    getContentProps,
    getIndicatorProps,
    getTitleProps,
    getSubtitleProps,
    getTitleWrapperProps,
  };
};
