import { Link as BaseLink, LinkProps as BaseLinkProps } from "@jamsr-ui/link";
import { deepMergeProps, mergeGlobalProps } from "@jamsr-ui/utils";
import NexLink, { LinkProps as NexLinkProps } from "next/link";
import { useUINextConfig } from "./provider";

export type LinkProps<T = any> = NexLinkProps<T> & BaseLinkProps;

export const Link = <T,>($props: LinkProps<T>) => {
  const { link } = useUINextConfig();
  const _globalProps = link ?? {};
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);
  return <BaseLink as={NexLink} {...props} />;
};
