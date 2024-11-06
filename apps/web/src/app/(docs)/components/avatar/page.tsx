import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { AvatarDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Avatar",
};

const Avatar = () => {
  return (
    <VariantPage heading="Avatar">
      <VariantWrapper heading="Default">
        <AvatarDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Avatar;
