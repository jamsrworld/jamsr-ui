import { Link as BaseLink, LinkProps as BaseLinkProps } from "@jamsr-ui/link";
import { useUIConfig } from "@jamsr-ui/styles";
import { deepMergeProps, mergeGlobalProps } from "@jamsr-ui/utils";
import NexLink, { LinkProps as NexLinkProps } from "next/link";

export type LinkProps<T = any> = NexLinkProps<T> & BaseLinkProps;

export const Link = <T,>($props: LinkProps<T>) => {
  const { next } = useUIConfig();
  const _globalProps = next?.link ?? {};
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);
  return <BaseLink as={NexLink} {...props} />;
};
