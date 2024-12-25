import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { LineChartMultiSeries } from "./examples/line-chart-multi-series";
import { LineChartSimple } from "./examples/line-chart-simple";

const title = "Line Chart";
const description = `A line chart displays data points connected by a continuous line, 
showing trends and changes over time or categories.`;

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["line-chart"][number]>(variant: T) =>
  readVariantCode("line-chart", variant, "charts");

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper
        heading="Simple"
        bg="secondary"
        code={code("line-chart-simple")}
      >
        <LineChartSimple />
      </VariantWrapper>
      <VariantWrapper
        heading="Multi Series"
        bg="secondary"
        code={code("line-chart-multi-series")}
      >
        <LineChartMultiSeries />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
