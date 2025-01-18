import { AvatarIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
} from "@jamsr-ui/utils";
import NextImage, { type ImageProps } from "next/image";
import { useState } from "react";
import { type AvatarVariants, avatarVariants } from "./styles";
import { getColorByName, getFirstChar } from "./utils";

export interface AvatarCustomProps {}
type Props = AvatarCustomProps & {
  name?: string;
  fallback?: string | ((_: { alt: string; name?: string }) => string);
  src?: null | ImageProps["src"];
  classNames?: {
    base?: string;
    image?: string;
    fallbackIcon?: string;
  };
};

export type AvatarProps = Omit<ImageProps, "src"> & AvatarVariants & Props;

export const Avatar = ($props: AvatarProps) => {
  const { avatar: _globalProps = {}, globalConfig } = useUIStyle();
  const _props = $props;
  const globalProps = mergeGlobalProps(_globalProps, _props);
  const mergedProps = deepMergeProps(globalProps, _props, globalConfig);
  const [props, variantProps] = mapPropsVariants(
    mergedProps,
    avatarVariants.variantKeys,
  );
  const {
    alt,
    src,
    className,
    fallback,
    name,
    onError,
    children,
    classNames,
    ...restProps
  } = props;

  const fallBackString =
    (typeof children === "string" && getFirstChar(children)) ||
    (alt.length > 0 && getFirstChar(alt)) ||
    "";
  const fallBack = fallBackString || (
    <AvatarIcon className={classNames?.fallbackIcon} />
  );
  const [imgSrc, setImgSrc] = useState(src);

  const { color: propColor } = variantProps;
  const color: AvatarProps["color"] = imgSrc
    ? (propColor ?? "default")
    : (propColor ?? getColorByName(fallBackString));

  const styles = avatarVariants({
    ...variantProps,
    className: cn(classNames?.base, className),
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
          width={120}
          height={120}
          className={classNames?.image}
          {...restProps}
        />
      )}
    </div>
  );
};
