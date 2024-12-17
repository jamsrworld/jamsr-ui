import { VariantPage } from "@/components/docs/variant-page";
import { AreaChart1 } from "./examples/area-chart-1";
import { AreaChart2 } from "./examples/area-chart-2";

const title = "Area Chart";
export const metadata = {
  title,
};

const Page = () => {
  return (
    <VariantPage heading={title}>
      <AreaChart1 />
      <AreaChart2 />
    </VariantPage>
  );
};

export default Page;
