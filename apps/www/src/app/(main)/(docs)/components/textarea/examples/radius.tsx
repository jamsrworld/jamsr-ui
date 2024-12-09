import { Textarea, type TextareaProps } from "@jamsr-ui/react";

export const TextareaRadius = () => {
  const radii: TextareaProps["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ];
  return (
    <div className="grid gap-4">
      {radii.map((radius) => (
        <Textarea
          label="Enter your message"
          placeholder={`Enter your message ${radius}`}
          key={radius}
          radius={radius}
        />
      ))}
    </div>
  );
};
