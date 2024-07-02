import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { cn } from "@jamsr-ui/utils";
import { useId } from "react";

export type RadioProps<T extends React.ElementType = "input"> =
  ComponentPropsWithAs<T> & {
    classNames?: {
      wrapper: string;
    };
    children: React.ReactNode;
  };

export const Radio = <T extends React.ElementType = "input">(
  props: RadioProps<T>,
) => {
  const { children, classNames, className, as, ...restProps } = props;
  const id = useId();
  const Component = as ?? "div";
  return (
    <Component
      data-component="radio"
      className={cn(
        "flex w-full cursor-pointer select-none items-center gap-2 rounded-lg py-2 pl-3",
        classNames?.wrapper,
      )}
    >
      <input
        id={id}
        type="radio"
        {...restProps}
        className={cn(
          "relative float-left mr-1 mt-0.5 size-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:size-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-1 after:block after:size-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:size-2.5 checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
          classNames?.wrapper,
          className,
        )}
      />
      <label className="grow" htmlFor={id}>
        {children}
      </label>
    </Component>
  );
};
