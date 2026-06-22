"use client";

import { EmailIcon } from "@/icons";
import { IconButton } from "ui/icon-button";

export const IconButtonDisabled = (props: IconButton.Props) => {
  const { label = "Disabled Icon Button", ...rest } = props;
  return (
    <IconButton
      label={label}
      disabled
      {...rest}
    >
      <EmailIcon />
    </IconButton>
  );
};
