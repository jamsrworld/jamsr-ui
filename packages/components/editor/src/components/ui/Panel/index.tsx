import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { Surface } from "../Surface";

export type PanelProps = {
  spacing?: "medium" | "small";
  noShadow?: boolean;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Panel = ({
  asChild,
  className,
  children,
  spacing,
  noShadow,
  ...rest
}: PanelProps) => {
  const panelClass = cn("p-2", spacing === "small" && "p-[0.2rem]", className);

  const Comp = asChild ? Slot : "div";

  return (
    <Comp {...rest}>
      <Surface className={panelClass} withShadow={!noShadow}>
        {children}
      </Surface>
    </Comp>
  );
};

export const PanelDivider = ({
  asChild,
  className,
  children,
  ...rest
}: { asChild?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
  const dividerClass = cn("mb-2 border-b border-b-black/10 pb-2", className);

  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={dividerClass} {...rest}>
      {children}
    </Comp>
  );
};

export const PanelHeader = ({
  asChild,
  className,
  children,
  ...rest
}: { asChild?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
  const headerClass = cn(
    "mb-2 border-b border-b-black/10 pb-2 text-sm",
    className,
  );

  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={headerClass} {...rest}>
      {children}
    </Comp>
  );
};

export const PanelSection = ({
  asChild,
  className,
  children,
  ...rest
}: { asChild?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
  const sectionClass = cn("mt-4 first:mt-1", className);

  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={sectionClass} {...rest}>
      {children}
    </Comp>
  );
};

export const PanelHeadline = ({
  asChild,
  className,
  children,
  ...rest
}: { asChild?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
  const headlineClass = cn(
    "mb-2 ml-1.5 text-xs font-medium text-black/80 dark:text-white/80",
    className,
  );

  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={headlineClass} {...rest}>
      {children}
    </Comp>
  );
};

export const PanelFooter = ({
  asChild,
  className,
  children,
  ...rest
}: { asChild?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
  const footerClass = cn(
    "mt-2 border-t border-black/10 pt-2 text-sm",
    className,
  );

  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={footerClass} {...rest}>
      {children}
    </Comp>
  );
};
