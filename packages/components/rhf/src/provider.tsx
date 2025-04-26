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
  slotProps?: {
    form?: React.ComponentProps<"form">;
    fieldset?: React.ComponentProps<"fieldset">;
  };
  classNames?: {
    form?: string;
    fieldset: string;
  };
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
    classNames: _classNames,
    slotProps: _slotProps,
    ...restProps
  } = props;
  const { provider } = useUIRHFConfig();

  const slotProps = {
    form: {
      ...provider?.slotProps?.form,
      ..._slotProps?.form,
    },
    fieldset: {
      ...provider?.slotProps?.fieldset,
      ..._slotProps?.fieldset,
    },
  };

  const classNames = {
    form: cn(provider?.classNames?.form, _classNames?.form),
    fieldset: cn(provider?.classNames?.fieldset, _classNames?.fieldset),
  };

  return (
    <FormProvider {...methods} {...restProps}>
      <form
        onSubmit={onSubmit}
        className={cn("relative", classNames?.form)}
        data-component="rhfForm"
        data-slot="form"
        {...slotProps.form}
      >
        <fieldset
          disabled={isPending || isDisabled}
          className={cn("flex flex-col gap-4", classNames?.fieldset, className)}
          data-slot="fieldset"
          {...slotProps.fieldset}
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};
