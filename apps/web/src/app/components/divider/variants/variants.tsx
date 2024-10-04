import { Divider } from "@jamsr-ui/react";

export const DividerVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider variant="default">Default</Divider>
      <Divider variant="gradient">Gradient</Divider>
    </div>
  );
};
