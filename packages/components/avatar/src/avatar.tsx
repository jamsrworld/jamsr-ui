import type { ComponentPropsWithAs } from "@jamsr-ui/utils";
import { isEmpty } from "@jamsr-ui/utils";
import { avatarVariants, type AvatarVariants } from "./style";

export type AvatarProps<T extends React.ElementType = "img"> =
  ComponentPropsWithAs<T, AvatarVariants> & {
    alt: string;
    placeholderType?: "avatar" | "name";
  };

export const Avatar = <T extends React.ElementType = "img">(
  props: AvatarProps<T>,
) => {
  const {
    size,
    alt,
    src,
    bordered,
    className,
    placeholderType = "avatar",
    as,
    ...restProps
  } = props;
  const source = !isEmpty(src)
    ? src
    : `https://avatar.iran.liara.run/${placeholderType === "avatar" ? "public" : "username"}?username=${alt}`;

  const Component = as ?? "img";
  return (
    <Component
      data-component="avatar"
      src={source}
      alt={alt}
      className={avatarVariants({
        size,
        bordered,
        className,
      })}
      sizes="100vw"
      {...restProps}
    />
  );
};
