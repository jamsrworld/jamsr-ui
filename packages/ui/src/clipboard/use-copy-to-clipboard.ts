"use client";
import { useRef, useState } from "react";

export const useCopyToClipboard = (props: useCopyToClipboard.Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const {
    text,
    onCopyError: onError,
    onCopySuccess: onSuccess,
    timeout = 1000,
  } = props;
  const timeoutRef = useRef<number>(null);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      onSuccess?.();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    } catch (err: unknown) {
      onError?.(err);
    }
  };

  return {
    isCopied,
    onCopy,
  };
};

export namespace useCopyToClipboard {
  export interface Props {
    text: string;
    onCopySuccess?: () => void;
    onCopyError?: (err: unknown) => void;
    timeout?: number;
  }
}
