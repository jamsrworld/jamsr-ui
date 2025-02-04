import { Link as BaseLink, LinkProps as BaseLinkProps } from "@jamsr-ui/link";
import NexLink, { LinkProps } from "next/link";

export const Link = <T,>(props: LinkProps<T>) => {
  return <BaseLink as={NexLink} {...props} />;
};
