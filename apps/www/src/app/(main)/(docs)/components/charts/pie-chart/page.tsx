import { VariantPage } from "@/components/docs/variant-page";
import { PieChart1 } from "./examples/pie-chart-1";
import { type Metadata } from "next";

const title = "Pie Chart";
const description = `A pie chart represents data as slices of a circular pie, 
showing proportions and percentages of a whole.`;

export const metadata: Metadata = {
  title,
  description,
};

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <PieChart1 />
    </VariantPage>
  );
};

export default Page;
