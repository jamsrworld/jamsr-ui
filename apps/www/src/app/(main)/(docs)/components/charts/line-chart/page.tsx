import { VariantPage } from "@/components/docs/variant-page";
import { type Metadata } from "next";
import { LineChartSimple } from "./examples/line-chart-simple";
import { LineChart2 } from "./examples/line-chart-2";
import { LineChartCustom } from "./examples/line-chart-custom";

const title = "Line Chart";
const description = `A line chart displays data points connected by a continuous line, 
showing trends and changes over time or categories.`;

export const metadata: Metadata = {
  title,
  description,
};

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <LineChartCustom />
      <LineChartSimple />
      <LineChart2 />
    </VariantPage>
  );
};

export default Page;
