import { cn } from "@jamsr-ui/utils";
import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
} from "react";

export type RadioProps = ComponentPropsWithoutRef<"input"> & {
  classNames?: {
    wrapper: string;
  };
};

export const RadioInner = (
  props: RadioProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const { children, classNames, ...restProps } = props;
  const id = useId();
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex w-full cursor-pointer select-none items-center gap-2 rounded-lg py-2 pl-3",
        classNames?.wrapper,
      )}
    >
      <input
        id={id}
        ref={ref}
        type="radio"
        {...restProps}
        className="after:z-1 checked:border-primary checked:after:border-primary checked:after:bg-primary checked:focus:border-primary dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary relative float-left mr-1 mt-0.5 size-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:size-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:block after:size-4 after:rounded-full after:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:size-2.5 checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
      />
      {children}
    </label>
  );
};
export const Radio = forwardRef(RadioInner);
