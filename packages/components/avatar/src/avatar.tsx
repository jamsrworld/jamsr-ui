import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps } from "@jamsr-ui/utils";
import NextImage, { type ImageProps } from "next/image";
import { useState } from "react";
import { type AvatarVariants, avatarVariants } from "./style";

type Props = {
  name?: string;
  fallback?: string | ((_: { alt: string; name?: string }) => string);
};

export type AvatarProps = ImageProps & AvatarVariants & Props;
export const Avatar = ($props: AvatarProps) => {
  const { avatar: Props = {} } = useUIStyle();
  const props = deepMergeProps(Props, $props);

  const {
    size,
    alt,
    src,
    isBordered,
    className,
    fallback,
    name,
    onError,
    radius = "full",
    ...restProps
  } = props;

  const [imgSrc, setImgSrc] = useState<ImageProps["src"]>(src);
  const styles = avatarVariants({
    size,
    isBordered,
    className,
    radius,
  });

  const handleOnError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    onError?.(e);
    const url =
      typeof fallback === "function" ? fallback({ alt, name }) : fallback;
    if (url) setImgSrc(url);
  };

  return (
    <NextImage
      data-component="avatar"
      src={imgSrc}
      alt={alt}
      className={styles}
      onError={handleOnError}
      {...restProps}
    />
  );
};
