import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { AvatarBordered } from "./examples/bordered";
import { AvatarColors } from "./examples/colors";
import { AvatarFallbackColor } from "./examples/fallback-color";
import { AvatarFallbacks } from "./examples/fallbacks";
import { AvatarImageFallback } from "./examples/image-fallback";
import { AvatarSizes } from "./examples/sizes";
import { AvatarUsage } from "./examples/usage";
import { AvatarRadius } from "./examples/radius";

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
      
      <VariantWrapper heading="Fallbacks" code={code("fallbacks")}>
        <AvatarFallbacks />
      </VariantWrapper>
      <VariantWrapper heading="Fallback Colors" code={code("fallback-color")}>
        <AvatarFallbackColor />
      </VariantWrapper>
      <VariantWrapper heading="Colors" code={code("colors")}>
        <AvatarColors />
      </VariantWrapper>
      <VariantWrapper heading="Image Fallback" code={code("image-fallback")}>
        <AvatarImageFallback />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <AvatarSizes />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <AvatarRadius />
      </VariantWrapper>
      <VariantWrapper heading="Bordered" code={code("bordered")}>
        <AvatarBordered />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Avatar;
