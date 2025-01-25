import { VariantPage } from "@/components/docs/variant-page";
import { type Metadata } from "next";
import { ThemeUsage } from "./examples/usage";

export const metadata: Metadata = {
  title: "Theme",
};

const Theme = () => {
  return (
    <VariantPage heading="Theme">
      <ThemeUsage />
    </VariantPage>
  );
};
export default Theme;
