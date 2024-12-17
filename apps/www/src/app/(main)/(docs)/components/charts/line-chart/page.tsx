import { VariantPage } from "@/components/docs/variant-page";
import { LineChart1 } from "./examples/line-chart-1";
import { LineChart2 } from "./examples/line-chart-2";

const title = "Line Chart";
export const metadata = {
  title,
};

const Page = () => {
  return (
    <VariantPage heading={title}>
      <LineChart1 />
      <LineChart2 />
    </VariantPage>
  );
};

export default Page;
