import { useListItem } from "@floating-ui/react";
import { useHover, useMergeRefs } from "@jamsr-ui/hooks";
import { CheckIcon } from "@jamsr-ui/shared-icons";
import { useUIConfig } from "@jamsr-ui/styles";
import type { ComponentPropsWithAs, UIProps } from "@jamsr-ui/utils";
import {
  cn,
  dataAttr,
  deepMergeProps,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import { useSelectContext } from "./use-select-context";

type Props = {
  value: string;
  label?: string;
  disabled?: boolean;
  isDisabled?: boolean;
};

export type SelectItemProps<T extends React.ElementType = "button"> =
  ComponentPropsWithAs<T, Props>;

export const SelectItem = <T extends React.ElementType = "button">(
  $props: SelectItemProps<T>,
) => {
  const { selectItem: _globalProps = {} } = useUIConfig();
  const _props = $props as UIProps<"button", Props>;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);
  const {
    children,
    className,
    value,
    as,
    label,
    disabled = false,
    isDisabled: propIsDisabled = false,
    ...restProps
  } = props;
  const isDisabled = disabled || propIsDisabled;
  const {
    activeIndex,
    getItemProps,
    handleSelect,
    value: values,
    styles,
    classNames,
    onSelectValue,
  } = useSelectContext();

  const listLabel = label ?? (typeof children === "string" ? children : value);
  if (!listLabel) {
    console.warn(`No label provided for list item with value ${value}`);
  }

  const { ref, index } = useListItem({
    label: listLabel,
  });
  const isActive = activeIndex === index;
  const isSelected = new Set(values).has(value);
  const { isHovered, ref: disableRef } = useHover({
    isDisabled,
  });
  const refs = useMergeRefs([ref, disableRef]);

  const handleClick = () => {
    onSelectValue(value);
    handleSelect(index);
  };

  const Component = as ?? "li";
  const style = styles.selectItem({
    className: cn(classNames?.selectItem, className),
  });

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Component
      ref={refs}
      data-slot="item"
      role="option"
      aria-selected={dataAttr(isSelected)}
      data-selected={dataAttr(isSelected)}
      data-active={dataAttr(isActive)}
      aria-disabled={dataAttr(isDisabled)}
      data-disabled={dataAttr(isDisabled)}
      data-hovered={dataAttr(isHovered)}
      tabIndex={isActive ? 0 : -1}
      className={style}
      {...restProps}
      {...(!isDisabled && {
        ...getItemProps({
          onClick: handleClick,
          onKeyDown: handleOnKeyDown,
        }),
      })}
    >
      {children}
      {isSelected && <CheckIcon className="absolute right-1" />}
    </Component>
  );
};
