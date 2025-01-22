import { Avatar, UIStylesProvider } from "@jamsr-ui/react";
import NextImage from "next/image";
import Image from "~/catalyst.png";

export const AvatarNextJsUsage = () => {
  return (
    <UIStylesProvider
      avatar={{
        as: NextImage,
        isBordered: true,
      }}
    >
      <Avatar
        alt="image"
        className="flex"
        src={Image}
        width={100}
        height={100}
      />
    </UIStylesProvider>
  );
};
