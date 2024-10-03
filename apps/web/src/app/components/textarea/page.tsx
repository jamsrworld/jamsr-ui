import { VariantPage } from "@/components/variant-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textarea",
};

const Textarea = () => {
  return <VariantPage heading="Textarea">Textarea</VariantPage>;
};
export default Textarea;
