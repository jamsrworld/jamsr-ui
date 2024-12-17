import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { BarChartMultiColumns } from "./examples/bar-chart-multi-columns";
import { BarChartOneColumn } from "./examples/bar-chart-one-column";
import { BarChartStack } from "./examples/bar-chart-stack";
import { BarChartVerticalOneColumn } from "./examples/bar-chart-vertical-one-column";
import { BarChartVerticalMultiColumns } from "./examples/bar-chart-vertical-multi-columns";
import { BarChartVerticalStack } from "./examples/bar-chart-vertical-stack";

const title = "Bar Chart";
export const metadata = {
  title,
};

const Page = () => {
  return (
    <VariantPage heading={title}>
      <VariantWrapper heading="One Column">
        <BarChartOneColumn />
      </VariantWrapper>
      <VariantWrapper heading="Multi Columns">
        <BarChartMultiColumns />
      </VariantWrapper>
      <VariantWrapper heading="Stack">
        <BarChartStack />
      </VariantWrapper>
      <VariantWrapper heading="Vertical One Column">
        <BarChartVerticalOneColumn />
      </VariantWrapper>
      <VariantWrapper heading="Vertical Multi Columns">
        <BarChartVerticalMultiColumns />
      </VariantWrapper>
      <VariantWrapper heading="Vertical Stack">
        <BarChartVerticalStack />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
