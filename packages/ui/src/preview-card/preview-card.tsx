"use client";

import { createContext, use, useMemo } from "react";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

import { previewCardStyles } from "./styles";
import { cn } from "../utils/cn";

import type { PreviewCardVariants } from "./styles";

const PreviewCardStylesContext = createContext<{
  styles: ReturnType<typeof previewCardStyles>;
  backdrop?: PreviewCardVariants["backdrop"];
  showArrow?: boolean;
} | null>(null);

const usePreviewCardContext = () => {
  const ctx = use(PreviewCardStylesContext);
  if (!ctx) {
    throw new Error("usePreviewCardContext must be used within a PreviewCard");
  }
  return ctx;
};

export const PreviewCard = (props: PreviewCard.Props) => {
  const { radius, backdrop, showArrow, ...restProps } = props;
  const styles = previewCardStyles({ radius, backdrop });
  const value = useMemo(
    () => ({ styles, backdrop, showArrow }),
    [styles, backdrop, showArrow],
  );
  return (
    <PreviewCardStylesContext.Provider value={value}>
      <PreviewCardPrimitive.Root {...restProps} />
    </PreviewCardStylesContext.Provider>
  );
};

export namespace PreviewCard {
  export interface Props
    extends PreviewCardPrimitive.Root.Props, PreviewCardVariants {
    showArrow?: boolean;
  }
}

export const PreviewCardTrigger = (
  props: PreviewCardPrimitive.Trigger.Props,
) => {
  return <PreviewCardPrimitive.Trigger {...props} />;
};

export const PreviewCardContent = (props: PreviewCardContent.Props) => {
  const { styles, showArrow } = usePreviewCardContext();
  const { slotProps, ...restProps } = props;
  return (
    <PreviewCardPrimitive.Portal {...slotProps?.portal}>
      <PreviewCardPrimitive.Backdrop
        {...slotProps?.backdrop}
        className={styles.backdrop({
          className: cn(slotProps?.backdrop?.className),
        })}
      />
      <PreviewCardPrimitive.Positioner
        sideOffset={showArrow ? 8 : 4}
        {...slotProps?.positioner}
        className={styles.positioner({
          className: cn(slotProps?.positioner?.className),
        })}
      >
        <PreviewCardPrimitive.Popup
          {...restProps}
          className={styles.popup({ className: cn(restProps.className) })}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
};
export namespace PreviewCardContent {
  export interface Props extends PreviewCardPrimitive.Popup.Props {
    slotProps?: {
      portal?: PreviewCardPrimitive.Portal.Props;
      backdrop?: PreviewCardPrimitive.Backdrop.Props;
      positioner?: PreviewCardPrimitive.Positioner.Props;
    };
  }
}

export const PreviewCardArrow = (props: PreviewCardPrimitive.Arrow.Props) => {
  const { styles } = usePreviewCardContext();
  const { children = <ArrowSvg />, className, ...restProps } = props;
  return (
    <PreviewCardPrimitive.Arrow
      {...restProps}
      className={styles.arrow({ className: cn(className) })}
    >
      {children}
    </PreviewCardPrimitive.Arrow>
  );
};

const ArrowSvg = (props: React.ComponentProps<"svg">) => {
  return (
    <svg fill="none" height="10" viewBox="0 0 20 10" width="20" {...props}>
      <path
        className="fill-current"
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
      />
      <path d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z" />
      <path d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z" />
    </svg>
  );
};
