import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { DndGrid } from "./variants/usage";
import { DndDisabled } from "./variants/disabled";

export const metadata: Metadata = {
  title: "Drag and Drop (Dnd-Kit)",
};

const code = <T extends VariantTypes["drag-and-drop"][number]>(variant: T) =>
  readVariantCode("drag-and-drop", variant);

const DragDropDndKit = () => {
  return (
    <VariantPage heading="Drag and Drop">
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
