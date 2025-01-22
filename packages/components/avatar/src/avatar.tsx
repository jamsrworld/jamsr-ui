import { forwardType } from "@jamsr-ui/utils";
import { useAvatar, type UseAvatarProps } from "./use-avatar";

export interface AvatarProps extends UseAvatarProps {}
export const Avatar = forwardType<"img", AvatarProps>((props: AvatarProps) => {
  const { Component, fallBack, getBaseProps, getImageProps, imgSrc } =
    useAvatar(props);
  return (
    <div {...getBaseProps()}>
      {!imgSrc ? fallBack : <Component {...getImageProps()} />}
    </div>
  );
});
