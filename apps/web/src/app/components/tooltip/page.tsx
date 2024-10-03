import { VariantPage } from "@/components/variant-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tooltip",
};

const Tooltip = () => {
  return <VariantPage heading="Tooltip">Tooltip</VariantPage>;
};
export default Tooltip;
