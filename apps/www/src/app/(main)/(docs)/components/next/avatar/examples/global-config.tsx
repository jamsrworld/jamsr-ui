import { Avatar } from "@jamsr-ui/next";
import { UIConfigProvider } from "@jamsr-ui/config";
import { useId } from "react";

export const AvatarGlobalConfig = () => {
  const id = useId();
  return (
    <UIConfigProvider
      next={{
        avatar: {
          width: 100,
          height: 100,
          size: "lg",
        },
      }}
    >
      <Avatar
        alt="image"
        className="flex"
        src={`https://i.pravatar.cc/300?u=${id}`}
      />
    </UIConfigProvider>
  );
};
