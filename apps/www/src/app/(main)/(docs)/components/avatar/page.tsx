import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { AvatarBordered } from "./examples/bordered";
import { AvatarUsage } from "./examples/usage";
import { AvatarPlaceholders } from "./examples/placeholders";
import { AvatarRadius } from "./examples/radius";
import { AvatarSizes } from "./examples/sizes";

const title = "Avatar";
const description =
  "Avatar is used to represent a user and displays the profile picture.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["avatar"][number]>(variant: T) =>
  readVariantCode("avatar", variant);

const Avatar = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <AvatarUsage />
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
