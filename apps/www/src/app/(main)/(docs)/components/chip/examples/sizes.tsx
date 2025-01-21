import { Chip, type ChipProps } from "@jamsr-ui/react";

export const ChipSizes = () => {
  const sizes: ChipProps["size"][] = ["xs", "sm", "md", "lg"];
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <Chip size={size} key={size}>
          Chip {size}
        </Chip>
      ))}
    </div>
  );
};
