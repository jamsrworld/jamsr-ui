import { cn } from "@jamsr-ui/utils";
import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";
import { useUIRHFConfig } from "./context-provider";

export type RHFProviderProps<
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
> = {
  children: React.ReactNode;
  methods: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  isPending: boolean;
} & {
  isDisabled?: boolean;
  className?: string;
};

export const RHFProvider = <
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
>(
  props: RHFProviderProps<TFieldValues, TContext, TTransformedValues>,
) => {
  const {
    children,
    onSubmit,
    methods,
    className,
    isDisabled,
    isPending,
    ...restProps
  } = props;
  const { provider } = useUIRHFConfig();
  return (
    <FormProvider {...methods}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={onSubmit}
        className={cn("relative", provider?.classNames?.form)}
        data-component="rhfForm"
        {...restProps}
      >
        <fieldset
          disabled={isPending || isDisabled}
          className={cn(
            "flex flex-col gap-4",
            provider?.classNames?.fieldset,
            className,
          )}
          data-slot="fieldset"
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};
