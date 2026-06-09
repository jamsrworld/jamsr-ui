import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { SliderUsage } from "./examples/usage";

const title = "Slider";
const description =
  "A Slider is a UI component that allows users to adjust a value within a range by sliding a handle along a track. It's commonly used for selecting values like volume, brightness, or any other continuous range.";

export const metadata: Metadata = {
  title,
  description,
};

const sliderVariants = {
  orientation: {
    options: ["horizontal", "vertical"],
    defaultValue: "horizontal",
  },
};

const SliderPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={sliderVariants}
        component={SliderUsage}
      />
    </DocsPage>
  );
};

export default SliderPage;
