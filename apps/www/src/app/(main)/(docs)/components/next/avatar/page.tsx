import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { AvatarUsage } from "./examples/usage";

const title = "Avatar";
const description =
  "Avatar is used to represent a user and displays the profile picture.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["avatar"][number]>(variant: T) =>
  readVariantCode("avatar", variant, "next");

const Avatar = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <AvatarUsage />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Avatar;
