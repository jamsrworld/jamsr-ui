import { useRef, useState } from "react";

type Context = { message?: string; ctx?: unknown; content: string };
export type UseCopyToClipboardProps = {
  content: string;
  message?: string;
  onSuccess?: (ctx: Context) => void;
  onError?: (ctx: Context) => void;
  ctx?: unknown;
  timeout?: number;
};

export const useCopyToClipboard = (props: UseCopyToClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { content, onError, onSuccess, ctx, message, timeout = 1000 } = props;
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const context = {
    message,
    ctx,
    content,
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      onSuccess?.(context);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    } catch (err: unknown) {
      onError?.(context);
      console.log("err:->", err);
    }
  };

  return {
    isCopied,
    onCopy,
  };
};
