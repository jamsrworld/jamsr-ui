import { UIStyleProvider } from "@jamsr-ui/core";
import { Input } from "@jamsr-ui/react";

export const InputDefault = () => {
  return (
    <UIStyleProvider
      input={{
        classNames: {
          inputWrapper:
            "border-gray-400 hover:border-gray-500 group-data-[focus=true]:border-black",
        },
      }}
    >
      <Input label="Enter your email" type="email" />
    </UIStyleProvider>
  );
};
