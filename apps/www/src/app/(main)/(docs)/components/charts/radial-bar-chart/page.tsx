import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { RadialSimpleChart } from "./examples/radial-simple";
import { RadialGaugeChart } from "./examples/radial-gauge";
import { RadialSemiCircleGaugeChart } from "./examples/radial-semi-circle-gauge";
import { RadialMultiBarChart } from "./examples/radial-multi-bar";

const title = "Radial Bar Chart";
export const metadata = {
  title,
};

const Page = () => {
  return (
    <VariantPage heading={title}>
      <VariantWrapper heading="Radial 1">
        <RadialSimpleChart />
      </VariantWrapper>
      <VariantWrapper heading="Gauge">
        <RadialGaugeChart />
      </VariantWrapper>
      <VariantWrapper heading="Semi Circle Gauge">
        <RadialSemiCircleGaugeChart />
      </VariantWrapper>
      <VariantWrapper heading="Multi Bars">
        <RadialMultiBarChart />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
