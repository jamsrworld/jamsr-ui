import { OtpInput, type OtpInputProps } from "@jamsr-ui/react";

export const OtpInputRadius = () => {
  const radii: OtpInputProps["radius"][] = [
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
        <OtpInput
          key={radius}
          radius={radius}
          label="Enter your OTP"
        />
      ))}
    </div>
  );
};
