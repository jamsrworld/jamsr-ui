import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { DndDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Drag and Drop (Dnd-Kit)",
};

const DragDropDndKit = () => {
  return (
    <VariantPage heading="Drag and Drop">
      <VariantWrapper heading="Default">
        <DndDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default DragDropDndKit;
