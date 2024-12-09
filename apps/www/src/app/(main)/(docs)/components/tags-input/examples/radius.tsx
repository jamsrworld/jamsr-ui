import { TagsInput, type TagsInputProps } from "@jamsr-ui/react";

export const TagsInputRadius = () => {
  const radii: TagsInputProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="grid gap-4">
      {radii.map((radius) => (
        <TagsInput
          key={radius}
          radius={radius}
          label="Enter your tags"
          placeholder={`Radius:${radius}`}
        />
      ))}
    </div>
  );
};
