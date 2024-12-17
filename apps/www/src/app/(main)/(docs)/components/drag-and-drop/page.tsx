import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { DndGrid } from "./examples/usage";
import { DndDisabled } from "./examples/disabled";

const title = "Drag and Drop";
const description =
  "An intuitive and interactive component that enables users to easily drag and drop items within a designated area, enhancing user experience and workflow efficiency.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["drag-and-drop"][number]>(variant: T) =>
  readVariantCode("drag-and-drop", variant);

const DragDropDndKit = () => {
  return (
    <VariantPage heading={title} description={description} >
      <VariantWrapper heading="Grid" code={code("usage")}>
        <DndGrid />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <DndDisabled />
      </VariantWrapper>
    </VariantPage>
  );
};
export default DragDropDndKit;
