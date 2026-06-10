import { breadcrumbStyles } from "./styles";

const styles = breadcrumbStyles();

export const BreadcrumbItem = (props: BreadcrumbItem.Props) => {
  return null;
  // const { isCurrent, className, ...rest } = props;
  // return (
  //   <BreadcrumbUI.Item
  //     {...rest}
  //     className={
  //       isCurrent ? styles.current({ className }) : styles.item({ className })
  //     }
  //   />
  // );
};

export const BreadcrumbSeparator = (props: BreadcrumbSeparator.Props) => {
  return null;
  // const { className, ...rest } = props;
  // return (
  //   <BreadcrumbUI.Separator
  //     {...rest}
  //     className={styles.separator({ className })}
  //   />
  // );
};

export const Breadcrumb = (props: Breadcrumb.Props) => {
  return null;
  // const { className, ...rest } = props;
  // return <BreadcrumbUI {...rest} className={styles.root({ className })} />;
};

// export namespace Breadcrumb {
//   export interface Props extends BreadcrumbUI.Props {}
// }

// export namespace BreadcrumbItem {
//   export interface Props extends BreadcrumbUI.Item {
//     isCurrent?: boolean;
//   }
// }

// export namespace BreadcrumbSeparator {
//   export interface Props extends BreadcrumbUI.Separator {}
// }
