import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DndGrid } from "./variants/default";
import { DndDisabled } from "./variants/disabled";

export const metadata: Metadata = {
  title: "Drag and Drop (Dnd-Kit)",
};

const DragDropDndKit = () => {
  return (
    <VariantPage heading="Drag and Drop">
      <VariantWrapper heading="Grid">
        <DndGrid />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <DndDisabled />
      </VariantWrapper>
    </VariantPage>
  );
};
export default DragDropDndKit;
