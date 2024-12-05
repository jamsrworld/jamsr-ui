import { useListItem } from "@floating-ui/react";
import { CheckIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { dataAttr, deepMergeProps } from "@jamsr-ui/utils";
import { useAutocompleteContext } from "./use-autocomplete-context";

type Props = {
  value: string;
  label?: string;
  renderLabel?: React.ReactNode;
  isDisabled?: boolean;
};

export type AutocompleteItemProps<T extends React.ElementType = "li"> =
  ComponentPropsWithAs<T, Props>;

export const AutocompleteItem = <T extends React.ElementType = "li">(
  $props: AutocompleteItemProps<T>,
) => {
  const { autocompleteItem: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    children,
    className: $className,
    value,
    as,
    label,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderLabel,
    isDisabled,
    ...restProps
  } = props;

  const {
    activeIndex,
    getItemProps,
    handleSelect,
    value: values,
    styles,
  } = useAutocompleteContext();

  const listLabel = label ?? (typeof children === "string" ? children : "");

  if (!listLabel.length) {
    console.warn(`No label provided for list item with value ${value}`);
  }

  const { ref, index } = useListItem({
    label: listLabel,
  });
  const isActive = activeIndex === index;
  const isSelected = new Set(values).has(value);
  const Component = as ?? "li";

  const className = styles.item({
    className: $className,
  });
  return (
    <Component
      ref={ref}
      data-slot="item"
      role="option"
      aria-selected={dataAttr(isSelected)}
      data-selected={dataAttr(isSelected)}
      aria-disabled={dataAttr(isDisabled)}
      data-disabled={dataAttr(isDisabled)}
      data-active={dataAttr(isActive)}
      tabIndex={-1}
      {...restProps}
      {...(!isDisabled &&
        getItemProps({
          onClick: () => {
            handleSelect({ label: listLabel, value });
          },
        }))}
      className={className}
    >
      {children}
      {isSelected && <CheckIcon className="absolute right-1" />}
    </Component>
  );
};
