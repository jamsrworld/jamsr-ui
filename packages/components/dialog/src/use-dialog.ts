import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsr-ui/hooks";
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
  hideCloseButton?: boolean;
  onClose?: () => void;
  classNames?: SlotsToClasses<DialogSlots>;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
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
    onClose,
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange,
    hideCloseButton,
    ...restProps
  } = props;
  const Component = as ?? "div";

  const [isOpen, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });

  const slots = useMemo(() => {
    return dialog(variantProps);
  }, [variantProps]);

  const getDialogProps: PropGetter<ComponentProps<"div">> = (props = {}) => {
    return {
      ...restProps,
      ...props,
      "data-slot": "content",
      className: slots.content({
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
    enabled: true,
  });
  const dismiss = useDismiss(context, {
    escapeKey: true,
    outsidePress: (event) => {
      const element = event.target as HTMLElement | null;
      return !element?.closest(".Toastify");
    },
    outsidePressEvent: "click",
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);

  return {
    Component,
    getDialogProps,
    isOpen,
    classNames,
    slots,
    hideCloseButton,
    interactions,
    context,
    setFloating,
    setIsOpen,
  };
};
