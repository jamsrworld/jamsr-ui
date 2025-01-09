"use client";

import { OtpInput, toast } from "@jamsr-ui/react";

export const OtpInputOnComplete = () => {
  const onComplete = (value: string) => {
    toast.success(`Value is ${value}`);
  };
  return <OtpInput onComplete={onComplete} />;
};
