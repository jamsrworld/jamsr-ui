import { Avatar, UIConfigProvider } from "@jamsr-ui/react";
import NextImage, { type ImageProps } from "next/image";
import Image from "~/catalyst.png";

// requires with UIConfigProvider
declare module "@jamsr-ui/react" {
  export interface AvatarProps extends ImageProps {
    src: ImageProps["src"];
  }
}

export const AvatarNextJsUsage = () => {
  return (
    <div className="flex gap-4">
      <UIConfigProvider
        avatar={{
          as: NextImage,
          isBordered: true,
        }}
      >
        <Avatar alt="" src={Image} width={100} height={100} />
      </UIConfigProvider>
      <Avatar as={NextImage} alt="" src={Image} width={100} height={100} />
    </div>
  );
};
