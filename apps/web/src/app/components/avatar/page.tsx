import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { Metadata } from "next";
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
