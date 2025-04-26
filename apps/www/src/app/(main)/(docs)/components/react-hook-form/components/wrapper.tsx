import { Button } from "@jamsr-ui/react";
import { RHFProvider, RHFProviderProps } from "@jamsr-ui/rhf";
import { type FieldValues } from "react-hook-form";

type Props<
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
> = {
  children: React.ReactNode;
} & RHFProviderProps<TFieldValues, TContext, TTransformedValues>;

export const RHFDemoWrapper = <
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
>(
  props: Props<TFieldValues, TContext, TTransformedValues>,
) => {
  const { children, ...restProps } = props;
  return (
    <RHFProvider {...restProps}>
      {children}
      <div className="flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </RHFProvider>
  );
};
