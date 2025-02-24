import { useIsDisabled } from "@jamsr-ui/hooks";
import { StarIcon } from "@jamsr-ui/shared-icons";
import { dataAttr } from "@jamsr-ui/utils";
import { useId, type ComponentProps } from "react";
import { useRatingContext } from "./rating-context";

type Props = ComponentProps<"svg"> & {
  value: number;
  index: number;
  setValue: (value: number) => void;
  id: string;
  isFormControl?: boolean;
};

export const RatingItem = (props: Props) => {
  const {
    index: itemValue,
    value,
    setValue,
    id,
    isFormControl = false,
    ...restProps
  } = props;
  const handleOnChange = () => {
    setValue(itemValue);
  };
  const isChecked = value >= itemValue;
  const {
    styles,
    isDisabled: propIsDisabled = false,
    isReadonly = false,
    classNames,
  } = useRatingContext();
  const { isDisabled, ref: disableRef } = useIsDisabled<HTMLInputElement>({
    isDisabled: propIsDisabled,
    isFormControl,
  });
  const isInteractive = !isDisabled && !isReadonly;
  const handleMouseMove = () => {
    if (!isInteractive) return;
    setValue(itemValue);
  };

  const uniqueId = useId();
  return (
    <label
      data-disabled={dataAttr(isDisabled)}
      aria-disabled={dataAttr(isDisabled)}
      htmlFor={uniqueId}
      data-checked={dataAttr(isChecked)}
      data-value={itemValue}
      onMouseEnter={handleMouseMove}
      data-interactive={dataAttr(isInteractive)}
      className={styles.starWrapper({ className: classNames?.starWrapper })}
    >
      <StarIcon {...restProps} />
      <span className="sr-only" />
      <input
        id={uniqueId}
        value={itemValue}
        aria-hidden
        type="radio"
        name={id}
        onChange={handleOnChange}
        className="sr-only"
        disabled={!isInteractive}
        ref={disableRef}
      />
    </label>
  );
};
