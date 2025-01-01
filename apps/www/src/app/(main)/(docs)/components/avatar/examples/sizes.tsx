import { Avatar, Text, type AvatarProps } from "@jamsr-ui/react";

export const AvatarSizes = () => {
  const sizes: AvatarProps["size"][] = ["xs", "sm", "md", "lg", "xl"];
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <div key={size}>
          <Avatar
            key={size}
            alt="image"
            className="flex"
            src="https://i.pravatar.cc/300"
            width={100}
            height={100}
            size={size}
          />
          <Text as="p">{size}</Text>
        </div>
      ))}
    </div>
  );
};
