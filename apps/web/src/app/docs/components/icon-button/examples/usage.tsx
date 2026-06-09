"use client";

import { EmailIcon } from "@jamsrui/icons";
import { IconButton } from "ui/icon-button";

export const IconButtonUsage = (props: IconButton.Props) => {
  const { label = "Icon Button Usage", ...rest } = props;
  return (
    <IconButton
      label={label}
      {...rest}
    >
      <EmailIcon />
    </IconButton>
  );
};
