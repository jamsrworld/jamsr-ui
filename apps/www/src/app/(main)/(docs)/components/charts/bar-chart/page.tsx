import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { BarChartMultiColumns } from "./examples/bar-chart-multi-columns";
import { BarChartOneColumn } from "./examples/bar-chart-one-column";
import { BarChartStack } from "./examples/bar-chart-stack";
import { BarChartVerticalMultiColumns } from "./examples/bar-chart-vertical-multi-columns";
import { BarChartVerticalOneColumn } from "./examples/bar-chart-vertical-one-column";
import { BarChartVerticalStack } from "./examples/bar-chart-vertical-stack";

const title = "Bar Chart";
const description = `A bar chart visually represents data using rectangular bars, 
where the length of each bar corresponds to its value.`;

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["bar-chart"][number]>(variant: T) =>
  readVariantCode("bar-chart", variant, "charts");

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper
        heading="Single Column"
        bg="secondary"
        code={code("bar-chart-one-column")}
      >
        <BarChartOneColumn />
      </VariantWrapper>
      <VariantWrapper
        heading="Multiple Column"
        bg="secondary"
        code={code("bar-chart-multi-columns")}
      >
        <BarChartMultiColumns />
      </VariantWrapper>
      <VariantWrapper
        heading="Stacked Column"
        bg="secondary"
        code={code("bar-chart-stack")}
      >
        <BarChartStack />
      </VariantWrapper>
      <VariantWrapper
        heading="Vertical Single Column"
        bg="secondary"
        code={code("bar-chart-vertical-one-column")}
      >
        <BarChartVerticalOneColumn />
      </VariantWrapper>
      <VariantWrapper
        heading="Vertical Multiple Columns"
        bg="secondary"
        code={code("bar-chart-vertical-multi-columns")}
      >
        <BarChartVerticalMultiColumns />
      </VariantWrapper>
      <VariantWrapper
        heading="Vertical Stacked Column"
        bg="secondary"
        code={code("bar-chart-vertical-stack")}
      >
        <BarChartVerticalStack />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
