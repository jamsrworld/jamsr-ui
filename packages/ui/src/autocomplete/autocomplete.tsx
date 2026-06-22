"use client";

import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";

import { autocompleteStyles } from "./styles";
import { cn } from "../utils/cn";

const styles = autocompleteStyles();

export const AutocompleteRoot = AutocompletePrimitive.Root;

export const AutocompleteInput = (props: AutocompletePrimitive.Input.Props) => {
  return (
    <AutocompletePrimitive.Input
      {...props}
      className={styles.input({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteInputGroup = (
  props: AutocompletePrimitive.InputGroup.Props,
) => {
  return (
    <AutocompletePrimitive.InputGroup
      {...props}
      className={styles.inputGroup({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteTrigger = (
  props: AutocompletePrimitive.Trigger.Props,
) => {
  return (
    <AutocompletePrimitive.Trigger
      {...props}
      className={styles.trigger({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteClear = (props: AutocompletePrimitive.Clear.Props) => {
  return (
    <AutocompletePrimitive.Clear
      {...props}
      className={styles.clear({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteContent = (props: AutocompleteContent.Props) => {
  const { slotProps, ...restProps } = props;
  return (
    <AutocompletePrimitive.Portal {...slotProps?.portal}>
      <AutocompletePrimitive.Positioner
        sideOffset={4}
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <AutocompletePrimitive.Popup
          {...restProps}
          className={styles.popup({ className: cn(restProps.className) })}
        />
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
};
export namespace AutocompleteContent {
  export interface Props extends AutocompletePrimitive.Popup.Props {
    slotProps?: {
      portal?: AutocompletePrimitive.Portal.Props;
      positioner?: AutocompletePrimitive.Positioner.Props;
    };
  }
}

export const AutocompleteList = (props: AutocompletePrimitive.List.Props) => {
  return (
    <AutocompletePrimitive.List
      {...props}
      className={styles.list({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteItem = (props: AutocompletePrimitive.Item.Props) => {
  return (
    <AutocompletePrimitive.Item
      {...props}
      className={styles.item({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteEmpty = (props: AutocompletePrimitive.Empty.Props) => {
  return (
    <AutocompletePrimitive.Empty
      {...props}
      className={styles.empty({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteGroup = (props: AutocompletePrimitive.Group.Props) => {
  return (
    <AutocompletePrimitive.Group
      {...props}
      className={styles.group({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteGroupLabel = (
  props: AutocompletePrimitive.GroupLabel.Props,
) => {
  return (
    <AutocompletePrimitive.GroupLabel
      {...props}
      className={styles.groupLabel({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteSeparator = (
  props: AutocompletePrimitive.Separator.Props,
) => {
  return (
    <AutocompletePrimitive.Separator
      {...props}
      className={styles.separator({ className: cn(props.className) })}
    />
  );
};

export const AutocompleteValue = AutocompletePrimitive.Value;
export const AutocompleteIcon = AutocompletePrimitive.Icon;
export const AutocompleteStatus = AutocompletePrimitive.Status;
