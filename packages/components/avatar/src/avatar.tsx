import { AvatarIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import { deepMergeProps } from "@jamsr-ui/utils";
import NextImage, { type ImageProps } from "next/image";
import { useState } from "react";
import { type AvatarVariants, avatarVariants } from "./style";
import { getColorByName, getFirstChar } from "./utils";

type Props = {
  name?: string;
  fallback?: string | ((_: { alt: string; name?: string }) => string);
  src?: null | ImageProps["src"];
};

export type AvatarProps = Omit<ImageProps, "src"> & AvatarVariants & Props;
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
    color: propColor,
    children,
    ...restProps
  } = props;

  const fallBackString =
    (typeof children === "string" && getFirstChar(children)) ||
    (alt.length > 0 && getFirstChar(alt)) ||
    "";
  const fallBack = fallBackString || <AvatarIcon />;
  const [imgSrc, setImgSrc] = useState(src);

  const color: AvatarProps["color"] = imgSrc
    ? (propColor ?? "default")
    : (propColor ?? getColorByName(fallBackString));
  const styles = avatarVariants({
    size,
    isBordered,
    className,
    color,
  });

  const handleOnError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    onError?.(e);
    const url =
      typeof fallback === "function" ? fallback({ alt, name }) : fallback;
    if (url) setImgSrc(url);
    else setImgSrc(null);
  };

  return (
    <div data-component="avatar" className={styles}>
      {!imgSrc ? (
        fallBack
      ) : (
        <NextImage
          alt={alt}
          src={imgSrc}
          onError={handleOnError}
          {...restProps}
        />
      )}
    </div>
  );
};
