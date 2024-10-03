import { VariantPage } from "@/components/variant-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toast",
};

const Toast = () => {
  return <VariantPage heading="Toast">Toast</VariantPage>;
};
export default Toast;
