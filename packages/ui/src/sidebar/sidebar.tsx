"use client";

import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useRender } from "@base-ui/react/use-render";

import { IconButton } from "../icon-button";
import { sidebarStyles } from "./styles";
import { useIsMobile } from "../hooks/use-mobile";

const styles = sidebarStyles();

// --- Sidebar State Context ---
type SidebarStateContextProps = {
  state: "expanded" | "collapsed";
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarStateContext = createContext<SidebarStateContextProps | null>(
  null,
);

export const useSidebarState = () => {
  const ctx = use(SidebarStateContext);
  if (!ctx) {
    throw new Error("useSidebarState must be used within a SidebarProvider");
  }
  return ctx;
};

export const SidebarStateProvider = ({
  children,
}: SidebarStateProvider.Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const isMobile = useIsMobile();
  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      setIsOpenMobile((open) => !open);
    } else {
      setIsOpen((open) => !open);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "b" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state: SidebarStateContextProps["state"] = useMemo(() => {
    if (isMobile) {
      return isOpenMobile ? "expanded" : "collapsed";
    }
    return isOpen ? "expanded" : "collapsed";
  }, [isMobile, isOpen, isOpenMobile]);

  const value: SidebarStateContextProps = useMemo(
    () => ({
      isMobile,
      isOpen,
      setIsOpen,
      state,
      toggleSidebar,
    }),
    [isMobile, isOpen, state, toggleSidebar],
  );

  return (
    <SidebarStateContext.Provider value={value}>
      {children}
    </SidebarStateContext.Provider>
  );
};

export namespace SidebarStateProvider {
  export interface Props {
    children: React.ReactNode;
  }
}

// --- Components ---
export const SidebarWrapperInner = (props: SidebarWrapper.Props) => {
  const { width = 250, render, className, style, ...rest } = props;
  const { state } = useSidebarState();
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className,
      style: {
        ...style,
        "--width": `${width}px`,
      } as React.CSSProperties,
      "data-slot": "wrapper",
      "data-state": state,
    },
    render,
  });
  return renderElement;
};

export const SidebarWrapper = (props: SidebarWrapper.Props) => {
  return (
    <SidebarStateProvider>
      <SidebarWrapperInner {...props} />
    </SidebarStateProvider>
  );
};

export namespace SidebarWrapper {
  export interface Props extends useRender.ComponentProps<"div"> {
    width?: number;
  }
}

export const Sidebar = (props: Sidebar.Props) => {
  const { state } = useSidebarState();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "aside",
    props: {
      ...rest,
      className: styles.sidebar({ className }),
      "data-slot": "root",
      "data-state": state,
    },
    render,
  });
  return renderElement;
};

export namespace Sidebar {
  export interface Props extends useRender.ComponentProps<"aside"> {}
}

export const SidebarContainer = (props: SidebarContainer.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.container({ className }),
      "data-slot": "container",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarContainer {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const SidebarContent = (props: SidebarContent.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.content({ className }),
      "data-slot": "content",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarContent {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const SidebarHeader = (props: SidebarHeader.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.header({ className }),
      "data-slot": "header",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarHeader {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const SidebarBody = (props: SidebarBody.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.body({ className }),
      "data-slot": "body",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarBody {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const SidebarFooter = (props: SidebarFooter.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.footer({ className }),
      "data-slot": "footer",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarFooter {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const SidebarGroup = (props: SidebarGroup.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.group({ className }),
      "data-slot": "group",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarGroup {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const SidebarGroupLabel = (props: SidebarGroupLabel.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.groupLabel({ className }),
      "data-slot": "group-label",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarGroupLabel {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const SidebarMenu = (props: SidebarMenu.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "ul",
    props: {
      ...rest,
      className: styles.menu({ className }),
      "data-slot": "menu",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarMenu {
  export interface Props extends useRender.ComponentProps<"ul"> {}
}

export const SidebarMenuItem = (props: SidebarMenuItem.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "li",
    props: {
      ...rest,
      className: styles.menuItem({ className }),
      "data-slot": "menu-item",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarMenuItem {
  export interface Props extends useRender.ComponentProps<"li"> {}
}

export const SidebarMenuItemButton = (props: SidebarMenuItemButton.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "button",
    props: {
      ...rest,
      className: styles.menuItemButton({ className }),
      "data-slot": "menu-item-button",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarMenuItemButton {
  export interface Props extends useRender.ComponentProps<"button"> {}
}

export const SidebarInset = (props: SidebarInset.Props) => {
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      className: styles.inset({ className }),
      "data-slot": "inset",
    },
    render,
  });
  return renderElement;
};

export namespace SidebarInset {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

export const SidebarBackdrop = (props: SidebarBackdrop.Props) => {
  const { isMobile, isOpen, toggleSidebar } = useSidebarState();
  const { className, render, ...rest } = props;
  const renderElement = useRender({
    defaultTagName: "div",
    props: {
      ...rest,
      onClick: () => toggleSidebar(),
      className: styles.backdrop({ className }),
      "data-slot": "backdrop",
    },
    render,
  });
  if (!isMobile || !isOpen) return null;
  return renderElement;
};

export namespace SidebarBackdrop {
  export interface Props extends useRender.ComponentProps<"div"> {}
}

// Toggle Icon SVG
const ToggleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M7.74415 21.7348C7.12171 21.7194 6.56896 21.6895 6.07727 21.6312C5.03896 21.5081 4.18587 21.2504 3.4548 20.6745C2.95374 20.2798 2.5222 19.7929 2.17708 19.2384C1.68205 18.4431 1.46162 17.5225 1.355 16.3846C1.24999 15.2638 1.24999 13.8515 1.25 12.0403V11.9615C1.24999 10.1503 1.24999 8.73795 1.355 7.61721C1.46162 6.47926 1.68205 5.55869 2.17708 4.76335C2.5222 4.20885 2.95374 3.72197 3.4548 3.32727C4.18587 2.75139 5.03896 2.49367 6.07727 2.37055C6.56896 2.31224 7.12171 2.28234 7.74415 2.26701C8.21361 2.25545 8.44835 2.24967 8.59917 2.39683C8.75 2.54398 8.75 2.78232 8.75 3.25899V20.7428C8.75 21.2195 8.75 21.4578 8.59917 21.6049C8.44835 21.7521 8.21361 21.7463 7.74415 21.7348ZM6.25 6.96484C6.25 6.55063 5.91421 6.21484 5.5 6.21484H4.5C4.08579 6.21484 3.75 6.55063 3.75 6.96484C3.75 7.37906 4.08579 7.71484 4.5 7.71484H5.5C5.91421 7.71484 6.25 7.37906 6.25 6.96484ZM6.25 9.96484C6.25 9.55063 5.91421 9.21484 5.5 9.21484H4.5C4.08579 9.21484 3.75 9.55063 3.75 9.96484C3.75 10.3791 4.08579 10.7148 4.5 10.7148H5.5C5.91421 10.7148 6.25 10.3791 6.25 9.96484Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M11.25 2.25H14.0485C15.647 2.24999 16.9135 2.24998 17.9227 2.36966C18.961 2.49279 19.8141 2.7505 20.5452 3.32638C21.0463 3.72109 21.4778 4.20797 21.8229 4.76246C22.3179 5.5578 22.5384 6.47837 22.645 7.61632C22.75 8.73705 22.75 10.1494 22.75 11.9605V12.0395C22.75 13.8506 22.75 15.2629 22.645 16.3837C22.5384 17.5216 22.3179 18.4422 21.8229 19.2375C21.4778 19.792 21.0463 20.2789 20.5452 20.6736C19.8141 21.2495 18.961 21.5072 17.9227 21.6303C16.9135 21.75 15.647 21.75 14.0486 21.75H11.25C10.7786 21.75 10.5429 21.75 10.3964 21.6036C10.25 21.4571 10.25 21.2214 10.25 20.75L10.25 3.25C10.25 2.7786 10.25 2.54289 10.3964 2.39645C10.5429 2.25 10.7786 2.25 11.25 2.25Z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
};

export const SidebarToggle = (props: SidebarToggle.Props) => {
  const { children = <ToggleIcon className="size-5" />, ...restProps } = props;
  const { toggleSidebar } = useSidebarState();
  return (
    <IconButton label="Toggle Sidebar" onClick={toggleSidebar} {...restProps}>
      {children}
    </IconButton>
  );
};

export namespace SidebarToggle {
  export interface Props extends Partial<IconButton.Props> {}
}
