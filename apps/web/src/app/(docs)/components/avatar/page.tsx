import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { AvatarBordered } from "./variants/bordered";
import { AvatarDefault } from "./variants/default";
import { AvatarPlaceholders } from "./variants/placeholder";
import { AvatarRadius } from "./variants/radius";
import { AvatarSizes } from "./variants/sizes";

export const metadata: Metadata = {
  title: "Avatar",
};

const Avatar = () => {
  return (
    <VariantPage heading="Avatar">
      <VariantWrapper heading="Default">
        <AvatarDefault />
      </VariantWrapper>
      <VariantWrapper heading="Placeholders">
        <AvatarPlaceholders />
      </VariantWrapper>
      <VariantWrapper heading="Sizes">
        <AvatarSizes />
      </VariantWrapper>
      <VariantWrapper heading="Border">
        <AvatarBordered />
      </VariantWrapper>
      <VariantWrapper heading="Radius">
        <AvatarRadius />
      </VariantWrapper>
    </VariantPage>
     
  );
};
export default Avatar;
