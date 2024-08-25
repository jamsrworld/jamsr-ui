import { Repeater } from "@jamsr-ui/repeater";
import { useId } from "react";
import { RatingProvider } from "./rating-context";
import { RatingItem } from "./rating-item";
import { useRating, UseRatingProps } from "./use-rating";

export type RatingProps = UseRatingProps;
export const Rating = (props: RatingProps) => {
  const {
    getBaseProps,
    getHelperProps,
    getInnerWrapperProps,
    getLabelWrapperProps,
    getLabelProps,
    setValue,
    value,
    label,
    helperText,
    maxValue,
    styles,
    isDisabled,
    isReadonly,
  } = useRating(props);
  const id = useId();
  return (
    <RatingProvider value={{ styles, isDisabled, isReadonly }}>
      <div {...getBaseProps()}>
        <div {...getLabelWrapperProps()}>
          <label {...getLabelProps()}>{label}</label>
        </div>
        <div {...getInnerWrapperProps()}>
          <Repeater count={maxValue}>
            {(idx) => {
              const index = idx + 1;
              return (
                <RatingItem
                  key={index}
                  value={value}
                  index={index}
                  setValue={setValue}
                  id={id}
                />
              );
            }}
          </Repeater>
        </div>
        <div {...getHelperProps()}>{helperText}</div>
      </div>
    </RatingProvider>
  );
};
