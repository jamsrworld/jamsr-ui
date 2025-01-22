import { useAvatar, type UseAvatarProps } from "./use-avatar";

export interface AvatarProps extends UseAvatarProps {}
export const Avatar = (props: AvatarProps) => {
  const { Component, fallBack, getBaseProps, getImageProps, imgSrc } =
    useAvatar(props);
  return (
    <div {...getBaseProps()}>
      {!imgSrc ? fallBack : <Component {...getImageProps()} />}
    </div>
  );
};
