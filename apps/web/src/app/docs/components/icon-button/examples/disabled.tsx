"use client";

import { EmailIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";

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
