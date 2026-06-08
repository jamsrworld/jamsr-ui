"use client";

import { Input } from "jamsrui/input";
import { InputVariantProvider } from "../components/variant-provider";

export const InputUsage = () => {
  return (
    <InputVariantProvider>
      {(props) => <Input {...props} placeholder="Enter your name" />}
    </InputVariantProvider>
  );
};
