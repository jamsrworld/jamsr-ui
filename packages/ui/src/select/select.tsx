"use client";

import { createContext, use } from "react";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { selectStyles } from "./styles";
import { dataAttr } from "../utils/attr";
import { cn } from "../utils/cn";

import type { VariantProps } from "tailwind-variants";

type SelectVariants = VariantProps<typeof selectStyles>;

const SelectContext = createContext<{
  styles: ReturnType<typeof selectStyles>;
  isInvalid?: boolean;
} | null>(null);

const useSelectContext = () => {
  const ctx = use(SelectContext);
  if (!ctx)
    throw new Error("useSelectContext must be used within SelectContext");
  return ctx;
};

export const SelectRoot = <Value, Multiple extends boolean | undefined = false>(
  props: SelectRoot.Props<Value, Multiple>,
) => {
  const { color, radius, size, variant, className, isInvalid, ...restProps } =
    props;
  const styles = selectStyles({
    color,
    radius,
    size,
    variant,
    className,
  });

  return (
    <SelectContext.Provider value={{ styles, isInvalid }}>
      <SelectPrimitive.Root {...restProps} />
    </SelectContext.Provider>
  );
};

export namespace SelectRoot {
  export type Props<
    Value,
    Multiple extends boolean | undefined = false,
  > = SelectPrimitive.Root.Props<Value, Multiple> &
    SelectVariants & {
      className?: string;
      isInvalid?: boolean;
      inputRef?: React.Ref<HTMLButtonElement | HTMLInputElement>;
    };
}

export const SelectTrigger = (props: SelectPrimitive.Trigger.Props) => {
  const { styles, isInvalid } = useSelectContext();
  const {
    children = (
      <>
        <SelectValue />
        <SelectIcon />
      </>
    ),
    className,
    ...restProps
  } = props;
  return (
    <SelectPrimitive.Trigger
      data-invalid={dataAttr(isInvalid)}
      {...restProps}
      className={styles.trigger({ className: cn(className) })}
    >
      {children}
    </SelectPrimitive.Trigger>
  );
};

export const SelectValue = (props: SelectPrimitive.Value.Props) => {
  const { styles } = useSelectContext();
  return (
    <SelectPrimitive.Value
      placeholder="Select a value"
      {...props}
      className={styles.value({ className: cn(props.className) })}
    />
  );
};

export const SelectIcon = (props: SelectPrimitive.Icon.Props) => {
  const { styles } = useSelectContext();
  const { children = <ChevronUpDownIcon />, className, ...restProps } = props;
  return (
    <SelectPrimitive.Icon
      {...restProps}
      className={styles.icon({ className: cn(className) })}
    >
      {children}
    </SelectPrimitive.Icon>
  );
};

const ChevronUpDownIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="none"
      height="12"
      stroke="currentcolor"
      strokeWidth="1.5"
      viewBox="0 0 8 12"
      width="8"
      {...props}
    >
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />{" "}
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />{" "}
    </svg>
  );
};

const CheckIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="currentcolor"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      {...props}
    >
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />{" "}
    </svg>
  );
};

export const SelectContent = (props: SelectContent.Props) => {
  const { styles } = useSelectContext();
  const { slotProps, ...restProps } = props;
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <SelectPrimitive.Popup className={styles.popup()}>
          <SelectPrimitive.List
            {...restProps}
            className={styles.list({ className: cn(restProps.className) })}
          />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
};
export namespace SelectContent {
  export interface Props extends SelectPrimitive.List.Props {
    slotProps?: {
      positioner?: React.ComponentProps<typeof SelectPrimitive.Positioner>;
    };
  }
}

export const SelectItem = (props: SelectPrimitive.Item.Props) => {
  const { styles } = useSelectContext();
  return (
    <SelectPrimitive.Item
      {...props}
      className={styles.selectItem({ className: cn(props.className) })}
    />
  );
};

export const SelectItemIndicator = (
  props: SelectPrimitive.ItemIndicator.Props,
) => {
  const { styles } = useSelectContext();
  const { children = <CheckIcon />, className, ...restProps } = props;
  return (
    <SelectPrimitive.ItemIndicator
      keepMounted
      {...restProps}
      className={styles.itemIndicator({ className: cn(className) })}
      render={(props, { selected }) => (
        <span {...props}> {selected ? children : null} </span>
      )}
    />
  );
};

export const SelectItemText = (props: SelectPrimitive.ItemText.Props) => {
  const { styles } = useSelectContext();
  return (
    <SelectPrimitive.ItemText
      {...props}
      className={styles.itemText({ className: cn(props.className) })}
    />
  );
};
