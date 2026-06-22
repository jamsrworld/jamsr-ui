import { Field as FieldPrimitive } from "@base-ui/react/field";

import { cn } from "../utils/cn";

export const FieldRoot = (props: FieldRoot.Props) => {
  const { className, orientation = "vertical", ...restProps } = props;
  return (
    <FieldPrimitive.Root
      className={cn(
        "flex group gap-1",
        orientation === "vertical" ? "flex-col" : "flex-row",
        className,
      )}
      {...restProps}
    />
  );
};
export namespace FieldRoot {
  export interface Props extends FieldPrimitive.Root.Props {
    orientation?: "vertical" | "horizontal";
  }
}

export const FieldControl = (props: FieldPrimitive.Control.Props) => {
  const { className, ...restProps } = props;
  return (
    <FieldPrimitive.Control className={cn("", className)} {...restProps} />
  );
};

export const FieldError = (props: FieldPrimitive.Error.Props) => {
  const { className, ...restProps } = props;
  return (
    <FieldPrimitive.Error
      className={cn("text-sm text-danger", className)}
      {...restProps}
    />
  );
};

export const FieldDescription = (props: FieldPrimitive.Description.Props) => {
  const { className, ...restProps } = props;
  return (
    <FieldPrimitive.Description
      className={cn("text-sm text-foreground-secondary", className)}
      {...restProps}
    />
  );
};

export const FieldLabel = (props: FieldPrimitive.Label.Props) => {
  const { className, ...restProps } = props;
  return (
    <FieldPrimitive.Label
      className={cn(
        "text-sm font-medium text-foreground group-data-disabled:status-disabled",
        className,
      )}
      {...restProps}
    />
  );
};

export const FieldContent = (props: FieldContent.Props) => {
  const { className, ...restProps } = props;
  return (
    <div className={cn("flex flex-col gap-0.5", className)} {...restProps} />
  );
};

export namespace FieldContent {
  export interface Props extends React.ComponentProps<"div"> {}
}
