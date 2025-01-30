import { Link, UIConfigProvider } from "@jamsr-ui/react";
import { type Route } from "next";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

// requires with UIConfigProvider
/* declare module "@jamsr-ui/react" {
  export interface LinkProps extends NextLinkProps<Route> {
    href: NextLinkProps<Route>["href"];
  }
}
 */

export const LinkNextJsUsage = () => {
  return (
    <div className="flex gap-2">
      <UIConfigProvider link={{ as: NextLink }}>
        <Link href="/">Go to homepage</Link>
      </UIConfigProvider>
      <Link as={NextLink} href="/">
        Go to homepage
      </Link>
    </div>
  );
};
