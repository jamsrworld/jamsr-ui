import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { RadialSimpleChart } from "./examples/radial-simple";
import { RadialGaugeChart } from "./examples/radial-gauge";
import { RadialSemiCircleGaugeChart } from "./examples/radial-semi-circle-gauge";
import { RadialMultiBarChart } from "./examples/radial-multi-bar";

const title = "Radial Bar Chart";
const description = `A radial bar chart represents data using circular bars 
arranged around a central point, showcasing proportions or comparisons in a radial layout.`;

export const metadata: Metadata = {
  title,
  description,
};

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Radial Bar">
        <RadialSimpleChart />
      </VariantWrapper>
      <VariantWrapper heading="Circular Gauge">
        <RadialGaugeChart />
      </VariantWrapper>
      <VariantWrapper heading="Semi Circular Gauge">
        <RadialSemiCircleGaugeChart />
      </VariantWrapper>
      <VariantWrapper heading="Multi Bars">
        <RadialMultiBarChart />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
