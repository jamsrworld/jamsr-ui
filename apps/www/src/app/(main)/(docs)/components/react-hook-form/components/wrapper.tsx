import { Button } from "@jamsr-ui/react";
import { RHFProvider, RHFProviderProps } from "@jamsr-ui/rhf";
import { type FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = {
  children: React.ReactNode;
} & RHFProviderProps<T>;

export const RHFDemoWrapper = <T extends FieldValues>(props: Props<T>) => {
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
