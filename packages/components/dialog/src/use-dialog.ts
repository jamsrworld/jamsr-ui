/* eslint-disable @typescript-eslint/unbound-method */
import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsr-ui/hooks";
import { type IconButtonProps } from "@jamsr-ui/icon-button";
import {
  cn,
  dataAttr,
  mapPropsVariants,
  type PropGetter,
  type SlotsToClasses,
  type UIProps,
} from "@jamsr-ui/utils";
import { useMemo, type ComponentProps } from "react";
import { dialog, type DialogSlots, type DialogVariantProps } from "./style";

type Props = UIProps<"div"> & {
  closeButton?: React.ReactNode;
  classNames?: SlotsToClasses<DialogSlots>;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  isDismissible?: boolean;
  isKeyboardDismissible?: boolean;
  slotProps?: {
    closeButton?: Partial<IconButtonProps>;
  };
};

export type UseDialogProps = Props & DialogVariantProps;

export const UseDialog = (originalProps: UseDialogProps) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    dialog.variantKeys,
  );

  const {
    as,
    className,
    classNames,
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange,
    closeButton,
    isDismissible = true,
    isKeyboardDismissible = true,
    slotProps,
    ...restProps
  } = props;
  const Component = as ?? "div";

  const [isOpen, setIsOpen] = useControlledState(
    defaultOpen,
    isOpenProp,
    onOpenChange,
  );

  const styles = useMemo(() => {
    return dialog(variantProps);
  }, [variantProps]);

  const getDialogProps: PropGetter<ComponentProps<"div">> = (props = {}) => {
    return {
      ...restProps,
      ...props,
      "data-slot": "content",
      className: styles.content({
        className: cn(classNames?.content, className, props.className),
      }),
      "data-open": dataAttr(isOpen),
    };
  };

  const {
    context,
    refs: { setFloating },
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  const click = useClick(context, {
    enabled: isDismissible,
  });
  const dismiss = useDismiss(context, {
    escapeKey: isKeyboardDismissible,
    outsidePress:
      !!isDismissible &&
      ((event) => {
        const element = event.target as HTMLElement | null;
        return !element?.closest(".Toastify");
      }),
    outsidePressEvent: "click",
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);

  return {
    Component,
    getDialogProps,
    isOpen,
    classNames,
    styles,
    closeButton,
    interactions,
    context,
    setFloating,
    setIsOpen,
    slotProps,
  };
};
