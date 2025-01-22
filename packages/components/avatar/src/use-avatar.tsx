import { AvatarIcon } from "@jamsr-ui/shared-icons";
import { useUIStyle } from "@jamsr-ui/styles";
import {
  cn,
  deepMergeProps,
  mapPropsVariants,
  mergeGlobalProps,
  type UIProps,
  type PropGetter,
} from "@jamsr-ui/utils";
import { useState } from "react";
import { type AvatarProps } from "./avatar";
import { type AvatarVariants, avatarVariants } from "./styles";
import { getColorByName, getFirstChar } from "./utils";

interface Props {
  name?: string;
  fallback?: string | ((_: { alt: string; name?: string }) => string);
  src?: null | string;
  alt: string;
  classNames?: {
    base?: string;
    image?: string;
    fallbackIcon?: string;
  };
}
export type UseAvatarProps = UIProps<"img", Props> & AvatarVariants;

export const useAvatar = ($props: UseAvatarProps) => {
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
    as,
    ...restProps
  } = props;
  const Component = as ?? "img";

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

  const getBaseProps: PropGetter = (props) => ({
    ...props,
    className: styles,
    "data-component": "avatar",
  });

  const getImageProps: PropGetter = (props) => ({
    ...props,
    className: classNames?.image,
    alt,
    src: imgSrc,
    onError: handleOnError,
    ...restProps,
  });

  return {
    Component,
    imgSrc,
    fallBack,
    getBaseProps,
    getImageProps,
  };
};
