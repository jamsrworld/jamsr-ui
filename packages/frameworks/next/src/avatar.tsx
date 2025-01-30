import {
  AvatarProps as BaseAvatarProps,
  Avatar as BaseAvatar,
} from "@jamsr-ui/avatar";
import Image, { type ImageProps } from "next/image";

export type AvatarProps = Omit<BaseAvatarProps, keyof ImageProps> & ImageProps;
export const Avatar = (props: AvatarProps) => {
  return <BaseAvatar as={Image} {...(props as BaseAvatarProps)} />;
};

const AFDl = () => <Avatar src="/" alt="" />;
