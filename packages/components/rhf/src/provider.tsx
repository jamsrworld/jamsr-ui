import { cn } from "@jamsr-ui/utils";
import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

export type RHFProviderProps<T extends FieldValues> = {
  children: React.ReactNode;
  methods: UseFormReturn<T>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  isPending: boolean;
} & {
  isDisabled?: boolean;
  className?: string;
};

export const RHFProvider = <T extends FieldValues>(
  props: RHFProviderProps<T>,
) => {
  const {
    children,
    onSubmit,
    methods,
    className,
    disabled,
    isPending,
    ...restProps
  } = props;
  return (
    <FormProvider {...methods}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={onSubmit}
        className="relative"
        {...restProps}
      >
        <fieldset
          disabled={isPending || disabled}
          className={cn("flex flex-col gap-4", className)}
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};
