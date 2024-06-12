import { isEmpty, type UIProps } from "@jamsr-ui/utils";
import { avatarVariants, type AvatarVariants } from "./style";

export type AvatarProps = {
  alt: string;
  placeholderType?: "avatar" | "name";
} & AvatarVariants &
  UIProps<"img">;

export const Avatar = (props: AvatarProps) => {
  const {
    size,
    alt,
    src,
    bordered,
    className,
    placeholderType = "avatar",
    ...restProps
  } = props;
  const source = !isEmpty(src)
    ? src
    : `https://avatar.iran.liara.run/${placeholderType === "avatar" ? "public" : "username"}?username=${alt}`;
  return (
    <img
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
