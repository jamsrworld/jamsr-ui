import { IconButton, type IconButtonProps } from "@jamsr-ui/icon-button";
import { CheckIcon, CopyIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  formLabelProps,
  mergeGlobalProps,
  type SlotsToClasses,
} from "@jamsr-ui/utils";
import { cloneElement, type ComponentProps, useId, useMemo } from "react";
import { copyToClipboard, type CopyToClipboardSlots } from "./styles";
import {
  useCopyToClipboard,
  type UseCopyToClipboardProps,
} from "./use-copy-to-clipboard";

export type CopyToClipboardProps = UseCopyToClipboardProps & {
  className?: string;
  children?: React.ReactNode;
  hideCopyButton?: boolean;
  classNames?: SlotsToClasses<CopyToClipboardSlots>;
  icon?: (props: {
    isCopied: boolean;
  }) => React.ReactElement<ComponentProps<"svg">>;
  iconBtnProps?: Partial<IconButtonProps>;
};

export const CopyToClipboard = ($props: CopyToClipboardProps) => {
  const { copyToClipboard: _globalProps = {} } = useUIStyle();
  const globalProps = mergeGlobalProps(_globalProps, $props);
  const props = deepMergeProps(globalProps, $props);

  const {
    content,
    children,
    className,
    classNames,
    hideCopyButton,
    icon,
    onError,
    onSuccess,
    ctx,
    message,
    timeout,
    iconBtnProps,
  } = props;

  const { isCopied, onCopy } = useCopyToClipboard({
    content,
    onError,
    onSuccess,
    ctx,
    message,
    timeout,
  });

  const styles = copyToClipboard();
  const id = useId();
  const iconClassName = styles.icon({ className: classNames?.icon });

  const Icon = useMemo(() => {
    if (icon) {
      const content = icon({ isCopied });
      cloneElement(content, {
        className: cn(content.props.className, iconClassName),
      });
    }
    return isCopied ? (
      <CheckIcon className={iconClassName} />
    ) : (
      <CopyIcon className={iconClassName} />
    );
  }, [icon, iconClassName, isCopied]);
  return (
    <label
      htmlFor={id}
      className={styles.base({ className: cn(classNames?.base, className) })}
      {...formLabelProps()}
    >
      {children}
      <IconButton
        id={id}
        aria-hidden={hideCopyButton}
        label="Copy to clipboard"
        type="button"
        className={styles.button({ className: classNames?.button })}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={onCopy}
        variant="light"
        size="xs"
        {...iconBtnProps}
      >
        {Icon}
      </IconButton>
    </label>
  );
};
