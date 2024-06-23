import {
  cn,
  dataAttr,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
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

export type UseAccordionItemProps = UIProps<"div"> & Props;
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
  } = props;

  const Component = as ?? "div";
  const slots = accordionItem({
    hideIndicator,
  });

  const { index, isOpen, onChangeIndex } = useAccordionContext();

  const onClick = useCallback(() => {
    if (!isOpen) onChangeIndex(index);
    else onChangeIndex(-1);
  }, [index, isOpen, onChangeIndex]);

  const getBaseProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "base",
        className: slots.base({
          className: cn(classNames?.base, className),
        }),
        ...props,
      };
    },
    [className, classNames?.base, slots],
  );

  const getButtonProps: PropGetter<ComponentProps<"button">> = useCallback(
    (props = {}) => {
      return {
        "data-slot": "trigger",
        className: slots.trigger({
          className: classNames?.trigger,
        }),
        type: "button",
        onClick,
        ...props,
      };
    },
    [classNames?.trigger, onClick, slots],
  );

  const getContentProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "content",
        className: slots.content({
          className: classNames?.content,
        }),
        ...props,
      };
    },
    [classNames?.content, slots],
  );

  const getIndicatorProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "indicator",
        className: slots.indicator({
          className: classNames?.indicator,
        }),
        "data-open": dataAttr(isOpen),
        ...props,
      };
    },
    [classNames?.indicator, isOpen, slots],
  );

  const getHeadingProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "heading",
        className: slots.heading({
          className: classNames?.heading,
        }),
        ...props,
      };
    },
    [classNames?.heading, slots],
  );

  const getStartContentProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "start-content",
        className: slots.startContent({
          className: classNames?.startContent,
        }),
        ...props,
      };
    },
    [classNames?.startContent, slots],
  );

  const getEndContentProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "end-content",
        className: slots.endContent({
          className: classNames?.endContent,
        }),
        ...props,
      };
    },
    [classNames?.endContent, slots],
  );

  const getActionContentProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "action-content",
        className: slots.actionContent({
          className: classNames?.actionContent,
        }),
        ...props,
      };
    },
    [classNames?.actionContent, slots],
  );

  const getTitleProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "title",
        className: slots.title({
          className: classNames?.title,
        }),
        ...props,
      };
    },
    [classNames?.title, slots],
  );

  const getTitleWrapperProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "title-wrapper",
        className: slots.titleWrapper({
          className: classNames?.titleWrapper,
        }),
        ...props,
      };
    },
    [classNames?.titleWrapper, slots],
  );

  const getSubtitleProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        "data-slot": "subtitle",
        className: slots.subtitle({
          className: classNames?.subtitle,
        }),
        ...props,
      };
    },
    [classNames?.subtitle, slots],
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
