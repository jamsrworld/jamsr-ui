import { Avatar, UINextConfigProvider } from "@jamsr-ui/next";
import { useId } from "react";

export const AvatarGlobalConfig = () => {
  const id = useId();
  return (
    <UINextConfigProvider
      avatar={{
        width: 100,
        height: 100,
        size: "lg",
      }}
    >
      <Avatar
        alt="image"
        className="flex"
        src={`https://i.pravatar.cc/300?u=${id}`}
      />
    </UINextConfigProvider>
  );
};
