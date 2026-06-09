import {
  Sidebar as SidebarUI,
  useSidebarContext,
  useSidebarState,
} from "@jamsrui/react";

import { sidebarStyles } from "./styles";

const styles = sidebarStyles();

export const SidebarWrapper = (props: SidebarWrapper.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Wrapper {...rest} className={styles.wrapper({ className })} />
  );
};

export const Sidebar = (props: SidebarUI.Props) => {
  const { className, ...rest } = props;
  return <SidebarUI {...rest} className={styles.sidebar({ className })} />;
};

export const SidebarContainer = (props: SidebarContainer.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Container
      {...rest}
      className={styles.container({ className })}
    />
  );
};

export const SidebarContent = (props: SidebarContent.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Content {...rest} className={styles.content({ className })} />
  );
};

export const SidebarHeader = (props: SidebarHeader.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Header {...rest} className={styles.header({ className })} />
  );
};

export const SidebarBody = (props: SidebarBody.Props) => {
  const { className, ...rest } = props;
  return <SidebarUI.Body {...rest} className={styles.body({ className })} />;
};

export const SidebarFooter = (props: SidebarFooter.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Footer {...rest} className={styles.footer({ className })} />
  );
};

export const SidebarGroup = (props: SidebarGroup.Props) => {
  const { className, ...rest } = props;
  return <SidebarUI.Group {...rest} className={styles.group({ className })} />;
};

export const SidebarGroupLabel = (props: SidebarGroupLabel.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.GroupLabel
      {...rest}
      className={styles.groupLabel({ className })}
    />
  );
};

export const SidebarMenu = (props: SidebarMenu.Props) => {
  const { className, ...rest } = props;
  return <SidebarUI.Menu {...rest} className={styles.menu({ className })} />;
};

export const SidebarMenuItem = (props: SidebarMenuItem.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.MenuItem {...rest} className={styles.menuItem({ className })} />
  );
};

export const SidebarMenuItemButton = (props: SidebarMenuItemButton.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.MenuItemButton
      {...rest}
      className={styles.menuItemButton({ className })}
    />
  );
};

export const SidebarInset = (props: SidebarInset.Props) => {
  const { className, ...rest } = props;
  return <SidebarUI.Inset {...rest} className={styles.inset({ className })} />;
};

export const SidebarBackdrop = (props: SidebarBackdrop.Props) => {
  const { className, ...rest } = props;
  return (
    <SidebarUI.Backdrop {...rest} className={styles.backdrop({ className })} />
  );
};

export const SidebarToggle = (props: SidebarToggle.Props) => {
  return <SidebarUI.Toggle {...props} />;
};

export { useSidebarContext, useSidebarState };
export const SidebarStateProvider: typeof SidebarUI.StateProvider =
  SidebarUI.StateProvider;

export namespace SidebarWrapper {
  export interface Props extends SidebarUI.Wrapper {}
}

export namespace SidebarContainer {
  export interface Props extends SidebarUI.Container {}
}

export namespace SidebarContent {
  export interface Props extends SidebarUI.Content {}
}

export namespace SidebarHeader {
  export interface Props extends SidebarUI.Header {}
}

export namespace SidebarBody {
  export interface Props extends SidebarUI.Body {}
}

export namespace SidebarFooter {
  export interface Props extends SidebarUI.Footer {}
}

export namespace SidebarGroup {
  export interface Props extends SidebarUI.Group {}
}

export namespace SidebarGroupLabel {
  export interface Props extends SidebarUI.GroupLabel {}
}

export namespace SidebarMenu {
  export interface Props extends SidebarUI.Menu {}
}

export namespace SidebarMenuItem {
  export interface Props extends SidebarUI.MenuItem {}
}

export namespace SidebarMenuItemButton {
  export interface Props extends SidebarUI.MenuItemButton {}
}

export namespace SidebarInset {
  export interface Props extends SidebarUI.Inset {}
}

export namespace SidebarBackdrop {
  export interface Props extends SidebarUI.Backdrop {}
}

export namespace SidebarToggle {
  export interface Props extends SidebarUI.Toggle {}
}

export namespace SidebarStateProvider {
  export interface Props extends React.ComponentProps<
    typeof SidebarUI.StateProvider
  > {}
}
