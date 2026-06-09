"use client";

import { EyeClosedIcon, EyeOpenIcon } from "@jamsrui/icons";
import { Field } from "ui/field";
import { IconButton } from "ui/icon-button";
import { InputGroup } from "ui/input-group";
import { useState } from "react";
import { type Input } from "ui/input";

export const InputPasswordToggle = (props: Input.Variants) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Field>
      <Field.Label>Password</Field.Label>
      <InputGroup {...props}>
        <InputGroup.Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your name"
        />
        <InputGroup.Suffix>
          <IconButton
            size="sm"
            radius="full"
            label="Toggle password"
            variant="light"
            onClick={handleTogglePassword}
          >
            {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </IconButton>
        </InputGroup.Suffix>
      </InputGroup>
    </Field>
  );
};
