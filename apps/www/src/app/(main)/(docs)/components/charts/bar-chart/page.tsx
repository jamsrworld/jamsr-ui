import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { BarChartMultiColumns } from "./examples/bar-chart-multi-columns";
import { BarChartOneColumn } from "./examples/bar-chart-one-column";
import { BarChartStack } from "./examples/bar-chart-stack";
import { BarChartVerticalOneColumn } from "./examples/bar-chart-vertical-one-column";
import { BarChartVerticalMultiColumns } from "./examples/bar-chart-vertical-multi-columns";
import { BarChartVerticalStack } from "./examples/bar-chart-vertical-stack";

const title = "Bar Chart";
const description = `A bar chart visually represents data using rectangular bars, 
where the length of each bar corresponds to its value.`;

export const metadata: Metadata = {
  title,
  description,
};

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Single Column">
        <BarChartOneColumn />
      </VariantWrapper>
      <VariantWrapper heading="Multiple Column">
        <BarChartMultiColumns />
      </VariantWrapper>
      <VariantWrapper heading="Stacked Column">
        <BarChartStack />
      </VariantWrapper>
      <VariantWrapper heading="Vertical Single Column">
        <BarChartVerticalOneColumn />
      </VariantWrapper>
      <VariantWrapper heading="Vertical Multiple Columns">
        <BarChartVerticalMultiColumns />
      </VariantWrapper>
      <VariantWrapper heading="Vertical Stacked Column">
        <BarChartVerticalStack />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
