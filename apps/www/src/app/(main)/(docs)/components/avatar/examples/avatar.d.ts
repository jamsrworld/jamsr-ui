import { type ImageProps } from "next/image";

export declare module "@jamsr-ui/react" {
  export interface AvatarProps extends ImageProps {
    isCustomImage?: boolean;
    src: ImageProps["src"];
  }
}
