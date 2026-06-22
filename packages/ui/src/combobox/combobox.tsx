"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";

import { comboboxStyles } from "./styles";
import { cn } from "../utils/cn";

const styles = comboboxStyles();

export const ComboboxRoot = ComboboxPrimitive.Root;

export const ComboboxLabel = (props: ComboboxPrimitive.Label.Props) => {
  return (
    <ComboboxPrimitive.Label
      {...props}
      className={styles.label({ className: cn(props.className) })}
    />
  );
};

export const ComboboxInputGroup = (
  props: ComboboxPrimitive.InputGroup.Props,
) => {
  return (
    <ComboboxPrimitive.InputGroup
      {...props}
      className={styles.inputGroup({ className: cn(props.className) })}
    />
  );
};

export const ComboboxInput = (props: ComboboxPrimitive.Input.Props) => {
  return (
    <ComboboxPrimitive.Input
      {...props}
      className={styles.input({ className: cn(props.className) })}
    />
  );
};

export const ComboboxTrigger = (props: ComboboxPrimitive.Trigger.Props) => {
  return (
    <ComboboxPrimitive.Trigger
      {...props}
      className={styles.trigger({ className: cn(props.className) })}
    />
  );
};

export const ComboboxClear = (props: ComboboxPrimitive.Clear.Props) => {
  return (
    <ComboboxPrimitive.Clear
      {...props}
      className={styles.clear({ className: cn(props.className) })}
    />
  );
};

export const ComboboxContent = (props: ComboboxContent.Props) => {
  const { slotProps, ...restProps } = props;
  return (
    <ComboboxPrimitive.Portal {...slotProps?.portal}>
      <ComboboxPrimitive.Positioner
        sideOffset={4}
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <ComboboxPrimitive.Popup
          {...restProps}
          className={styles.popup({ className: cn(restProps.className) })}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
};
export namespace ComboboxContent {
  export interface Props extends ComboboxPrimitive.Popup.Props {
    slotProps?: {
      portal?: ComboboxPrimitive.Portal.Props;
      positioner?: ComboboxPrimitive.Positioner.Props;
    };
  }
}

export const ComboboxList = (props: ComboboxPrimitive.List.Props) => {
  return (
    <ComboboxPrimitive.List
      {...props}
      className={styles.list({ className: cn(props.className) })}
    />
  );
};

export const ComboboxItem = (props: ComboboxPrimitive.Item.Props) => {
  return (
    <ComboboxPrimitive.Item
      {...props}
      className={styles.item({ className: cn(props.className) })}
    />
  );
};

export const ComboboxItemIndicator = (
  props: ComboboxPrimitive.ItemIndicator.Props,
) => {
  const { children = <CheckIcon />, className, ...restProps } = props;
  return (
    <ComboboxPrimitive.ItemIndicator
      {...restProps}
      keepMounted
      className={styles.itemIndicator({ className: cn(className) })}
      render={(props, { selected }) => (
        <span {...props}>{selected ? children : null}</span>
      )}
    />
  );
};

export const ComboboxEmpty = (props: ComboboxPrimitive.Empty.Props) => {
  return (
    <ComboboxPrimitive.Empty
      {...props}
      className={styles.empty({ className: cn(props.className) })}
    />
  );
};

export const ComboboxGroup = (props: ComboboxPrimitive.Group.Props) => {
  return (
    <ComboboxPrimitive.Group
      {...props}
      className={styles.group({ className: cn(props.className) })}
    />
  );
};

export const ComboboxGroupLabel = (
  props: ComboboxPrimitive.GroupLabel.Props,
) => {
  return (
    <ComboboxPrimitive.GroupLabel
      {...props}
      className={styles.groupLabel({ className: cn(props.className) })}
    />
  );
};

export const ComboboxSeparator = (props: ComboboxPrimitive.Separator.Props) => {
  return (
    <ComboboxPrimitive.Separator
      {...props}
      className={styles.separator({ className: cn(props.className) })}
    />
  );
};

export const ComboboxChips = (props: ComboboxPrimitive.Chips.Props) => {
  return (
    <ComboboxPrimitive.Chips
      {...props}
      className={styles.chips({ className: cn(props.className) })}
    />
  );
};

export const ComboboxChip = (props: ComboboxPrimitive.Chip.Props) => {
  return (
    <ComboboxPrimitive.Chip
      {...props}
      className={styles.chip({ className: cn(props.className) })}
    />
  );
};

export const ComboboxChipRemove = (
  props: ComboboxPrimitive.ChipRemove.Props,
) => {
  return (
    <ComboboxPrimitive.ChipRemove
      {...props}
      className={styles.chipRemove({ className: cn(props.className) })}
    />
  );
};

export const ComboboxValue = ComboboxPrimitive.Value;
export const ComboboxIcon = ComboboxPrimitive.Icon;
export const ComboboxStatus = ComboboxPrimitive.Status;

const CheckIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      fill="currentcolor"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      {...props}
    >
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
};
