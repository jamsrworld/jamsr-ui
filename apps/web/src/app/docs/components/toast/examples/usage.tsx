"use client";

import { toastManager } from "@/app/provider/toast";
import { Button } from "ui/button";
import React from "react";

export const ToastUsage = (props: Record<string, unknown>) => {
  const type = (props.type as any) ?? "default";
  const handleClick = () => {
    toastManager.add({
      title: "Notification",
      description: `This is a ${type} toast message.`,
      type,
    });
  };
  return <Button onClick={handleClick}>Trigger Toast</Button>;
};
