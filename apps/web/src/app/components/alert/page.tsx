import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { Metadata } from "next";
import { AlertCustomIcon } from "./variants/custom-icon";
import { AlertDefault } from "./variants/default";
import { AlertSeverity } from "./variants/severity";
import { AlertVariants } from "./variants/variants";
import { AlertWithAction } from "./variants/with-action";
import { AlertWithDescription } from "./variants/with-description";

export const metadata: Metadata = {
  title: "Alert",
};

const page = () => {
  return (
    <VariantPage heading="Alert">
      <VariantWrapper heading="Default">
        <AlertDefault />
      </VariantWrapper>
      <VariantWrapper heading="With Action">
        <AlertWithAction />
      </VariantWrapper>
      <VariantWrapper heading="With Description">
        <AlertWithDescription />
      </VariantWrapper>
      <VariantWrapper heading="Custom Icon">
        <AlertCustomIcon />
      </VariantWrapper>
      <VariantWrapper heading="Severity">
        <AlertSeverity />
      </VariantWrapper>
      <VariantWrapper heading="Variants">
        <AlertVariants />
      </VariantWrapper>
    </VariantPage>
  );
};
export default page;
