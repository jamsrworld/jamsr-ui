/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, type LinkProps } from "@jamsr-ui/react";

export const LinkDefault = (props: Partial<LinkProps>) => {
  const { children = "Go to homepage", ...restProps } = props;
  return (
    <Link href="#" {...restProps}>
      {children}
    </Link>
  );
};
