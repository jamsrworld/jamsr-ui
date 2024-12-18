import { VariantPage } from "@/components/docs/variant-page";
import { LineChart1 } from "./examples/line-chart-1";
import { LineChart2 } from "./examples/line-chart-2";

import { type Metadata } from "next";

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
      <LineChart1 />
      <LineChart2 />
    </VariantPage>
  );
};

export default Page;
