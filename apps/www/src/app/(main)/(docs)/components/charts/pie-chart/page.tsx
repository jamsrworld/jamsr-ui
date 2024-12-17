import { VariantPage } from "@/components/docs/variant-page";
import { PieChart1 } from "./examples/pie-chart-1";

const title = "Pie Chart";
export const metadata = {
  title,
};

const Page = () => {
  return (
    <VariantPage heading={title}>
      <PieChart1 />
    </VariantPage>
  );
};

export default Page;
