import { createContext, use, useMemo } from "react";

import { Button } from "@base-ui/react/button";
import { mergeProps } from "react-aria/mergeProps";
import { useFocusRing } from "react-aria/useFocusRing";
import { useHover } from "react-aria/useHover";
import { usePress } from "react-aria/usePress";

import { CheckIcon, CopyIcon } from "../icons";
import { clipboardStyles } from "./styles";
import { useCopyToClipboard } from "./use-copy-to-clipboard";
import { dataAttr } from "../utils/attr";
import { cn } from "../utils/cn";

export const ClipboardContext = createContext<ClipboardContext.Props | null>(
  null,
);

export const useClipboardContext = () => {
  const ctx = use(ClipboardContext);
  if (!ctx) {
    throw new Error("useClipboardContext must be with with a ClipboardContext");
  }
  return ctx;
};

export namespace ClipboardContext {
  export interface Props {
    isCopied: boolean;
  }
}

const styles = clipboardStyles();

export const Clipboard = (props: Clipboard.Props) => {
  const {
    text,
    onCopyError,
    onCopySuccess,
    timeout,
    className,
    disabled,
    ...restProps
  } = props;
  const { isCopied, onCopy } = useCopyToClipboard({
    text,
    onCopyError,
    onCopySuccess,
    timeout,
  });

  const value: ClipboardContext.Props = useMemo(
    () => ({ isCopied }),
    [isCopied],
  );

  const isDisabled = disabled;

  const { isPressed, pressProps } = usePress({
    isDisabled,
    onClick(e) {
      onCopy?.();
    },
  });
  const { isHovered, hoverProps } = useHover({ isDisabled });
  const { isFocusVisible, focusProps, isFocused } = useFocusRing({});
  return (
    <ClipboardContext value={value}>
      <Button
        className={styles.root({ className: cn(className) })}
        data-component="clipboard"
        data-copied={dataAttr(isCopied)}
        data-focus-visible={dataAttr(isFocusVisible)}
        data-focused={dataAttr(isFocused)}
        data-hovered={dataAttr(isHovered)}
        data-pressed={dataAttr(isPressed)}
        data-slot="root"
        {...mergeProps(restProps, pressProps, hoverProps, focusProps)}
      />
    </ClipboardContext>
  );
};

export const ClipboardIcon = (props: ClipboardIcon.Props) => {
  const { className, ...rest } = props;
  const { isCopied } = useClipboardContext();
  return isCopied ? (
    <CheckIcon className={styles.icon({ className })} {...rest} />
  ) : (
    <CopyIcon className={styles.icon({ className })} {...rest} />
  );
};

export namespace ClipboardIcon {
  export interface Props extends React.SVGProps<SVGSVGElement> {}
}

export namespace Clipboard {
  export interface Props extends useCopyToClipboard.Props, Button.Props {}
}
