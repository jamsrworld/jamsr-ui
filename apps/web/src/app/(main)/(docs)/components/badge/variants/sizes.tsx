import { Badge, type BadgeProps } from "@jamsr-ui/react";

export const BadgeSizes = () => {
  const sizes: BadgeProps["size"][] = ["sm", "md", "lg"];
  return (
    <div className="flex items-center gap-4">
      {sizes.map((size) => (
        <Badge size={size} key={size} color="primary">
          {size} Sized
        </Badge>
      ))}
    </div>
  );
};
