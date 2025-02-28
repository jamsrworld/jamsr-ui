import {
  Avatar as BaseAvatar,
  AvatarProps as BaseAvatarProps,
} from "@jamsr-ui/avatar";
import { deepMergeProps, mergeGlobalProps } from "@jamsr-ui/utils";
import Image, { type ImageProps } from "next/image";
import { useUINextConfig } from "./provider";

export type AvatarProps = Omit<BaseAvatarProps, keyof ImageProps> & ImageProps;
export const Avatar = ($props: AvatarProps) => {
  const { avatar } = useUINextConfig();
  const _globalProps = avatar ?? {};
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const props = deepMergeProps(globalProps, _props);
  return <BaseAvatar as={Image} {...(props as BaseAvatarProps)} />;
};
