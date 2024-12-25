import { VariantPage } from "@/components/docs/variant-page";
import { type Metadata } from "next";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { AreaChartGradient } from "./examples/area-chart-gradient";
import { AreaChartMultiSeries } from "./examples/area-chart-multi-series";
import { AreaChartMultiSeriesGradient } from "./examples/area-chart-multi-series-gradient";
import { AreaChartMultiSeriesStackGradient } from "./examples/area-chart-multi-series-stack-gradient";
import { AreaChartMultiSeriesStack } from "./examples/area-chart-multi-series-stack";
import { AreaChartSolid } from "./examples/area-chart-solid";

const title = "Area Chart";
const description = `An area chart displays quantitative data graphically, 
emphasizing trends over time by filling the area beneath a line.`;

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["area-chart"][number]>(variant: T) =>
  readVariantCode("area-chart", variant, "charts");

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper
        heading="Solid"
        bg="secondary"
        code={code("area-chart-solid")}
      >
        <AreaChartSolid />
      </VariantWrapper>
      <VariantWrapper
        heading="Gradient"
        bg="secondary"
        code={code("area-chart-gradient")}
      >
        <AreaChartGradient />
      </VariantWrapper>
      <VariantWrapper
        heading="Multi Series"
        bg="secondary"
        code={code("area-chart-multi-series")}
      >
        <AreaChartMultiSeries />
      </VariantWrapper>
      <VariantWrapper
        heading="Multi Series Gradient"
        bg="secondary"
        code={code("area-chart-multi-series-gradient")}
      >
        <AreaChartMultiSeriesGradient />
      </VariantWrapper>
      <VariantWrapper
        heading="Multi Series Stack"
        bg="secondary"
        code={code("area-chart-multi-series-stack")}
      >
        <AreaChartMultiSeriesStack />
      </VariantWrapper>
      <VariantWrapper
        heading="Multi Series Stack Gradient"
        bg="secondary"
        code={code("area-chart-multi-series-stack-gradient")}
      >
        <AreaChartMultiSeriesStackGradient />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
