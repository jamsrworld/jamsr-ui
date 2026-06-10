"use client";

import { createContext, use, useMemo } from "react";

import { useRender } from "@base-ui/react/use-render";

import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../icons";
import { alertStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type AlertVariants = VariantProps<typeof alertStyles>;

export type AlertStatus = "success" | "warning" | "info" | "error" | "neutral";

const iconMappingDefault: Record<AlertStatus, React.ReactNode> = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  neutral: <InfoIcon />,
};

interface AlertContextProps {
  styles: ReturnType<typeof alertStyles>;
  icon: React.ReactNode;
}

const AlertContext = createContext<AlertContextProps | null>(null);

const useAlertContext = () => {
  const ctx = use(AlertContext);
  if (!ctx) {
    throw new Error("useAlertContext must be used within an Alert");
  }
  return ctx;
};

export const Alert = (props: Alert.Props) => {
  const {
    variant,
    status = "neutral",
    className,
    render,
    ...restProps
  } = props;
  const styles = alertStyles({ variant, status });
  const icon = iconMappingDefault[status];
  const value = useMemo(() => ({ styles, icon }), [styles, icon]);

  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...restProps,
      "data-slot": "root",
      role: "alert",
      className: styles.root({ className }),
    },
    render,
  });

  return <AlertContext value={value}>{renderElement}</AlertContext>;
};

export namespace Alert {
  export interface Props
    extends useRender.ComponentProps<"div">, AlertVariants {
    status?: AlertStatus;
  }
}

export const AlertContent = (props: AlertContent.Props) => {
  const { styles } = useAlertContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      "data-slot": "content",
      className: styles.content({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace AlertContent {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const AlertIcon = (props: AlertIcon.Props) => {
  const { styles, icon } = useAlertContext();
  const { className, children = icon, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "span",
    props: {
      ...rest,
      "data-slot": "icon",
      className: styles.icon({ className }),
      children,
    },
    render,
  });
  return renderElement;
};

export namespace AlertIcon {
  export interface Props extends useRender.ComponentProps<"span"> {}
}

export const AlertTitle = (props: AlertTitle.Props) => {
  const { styles } = useAlertContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      "data-slot": "title",
      className: styles.title({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace AlertTitle {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const AlertDescription = (props: AlertDescription.Props) => {
  const { styles } = useAlertContext();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      "data-slot": "description",
      className: styles.description({ className }),
    },
    render,
  });
  return renderElement;
};

export namespace AlertDescription {
  export interface Props extends useRender.ComponentProps<"div"> {}
}
