import { Repeater } from "@jamsr-ui/repeater";
import { useId } from "react";
import { RatingProvider } from "./rating-context";
import { RatingItem } from "./rating-item";
import type { UseRatingProps } from "./use-rating";
import { useRating } from "./use-rating";

export type RatingProps = UseRatingProps;
export const Rating = (props: RatingProps) => {
  const {
    getBaseProps,
    getHelperProps,
    getInnerWrapperProps,
    getLabelWrapperProps,
    getLabelProps,
    setValue,
    getStarProps,
    value,
    label,
    helperText,
    maxValue,
    styles,
    isDisabled,
    isReadonly,
    classNames,
  } = useRating(props);
  const id = useId();

  return (
    <RatingProvider value={{ styles, isDisabled, isReadonly, classNames }}>
      <div {...getBaseProps()}>
        <div {...getLabelWrapperProps()}>
          {/*  eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
                  {...getStarProps()}
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
