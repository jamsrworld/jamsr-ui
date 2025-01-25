import { VariantPage } from "@/components/docs/variant-page";
import { type Metadata } from "next";

const title = "Astro Installation";
const description = "Install and Configure JamsrUI in your Astro project.";

export const metadata: Metadata = {
  title,
  description,
};

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      Coming Soon!
    </VariantPage>
  );
};

export default Page;
