import { Link as BaseLink, LinkProps as BaseLinkProps } from "@jamsr-ui/link";
import NexLink, { LinkProps as NexLinkProps } from "next/link";

export type LinkProps<T = any> = NexLinkProps<T> & BaseLinkProps;

export const Link = <T,>(props: LinkProps<T>) => {
  return <BaseLink as={NexLink} {...props} />;
};
