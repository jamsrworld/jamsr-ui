import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { AvatarBordered } from "./variants/bordered";
import { AvatarDefault } from "./variants/default";
import { AvatarPlaceholders } from "./variants/placeholders";
import { AvatarRadius } from "./variants/radius";
import { AvatarSizes } from "./variants/sizes";

export const metadata: Metadata = {
  title: "Avatar",
};

const code = <T extends VariantTypes["avatar"][number]>(variant: T) =>
  readVariantCode("avatar", variant);

const Avatar = () => {
  return (
    <VariantPage heading="Avatar">
      <VariantWrapper heading="Default" code={code("default")}>
        <AvatarDefault />
      </VariantWrapper>
      <VariantWrapper heading="Placeholders" code={code("placeholders")}>
        <AvatarPlaceholders />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <AvatarSizes />
      </VariantWrapper>
      <VariantWrapper heading="Bordered" code={code("bordered")}>
        <AvatarBordered />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <AvatarRadius />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Avatar;
