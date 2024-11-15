import { Divider } from "@jamsr-ui/react";

export const DividerColors = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider color="light">Light</Divider>
      <Divider>Default</Divider>
      <Divider color="dark">Dark</Divider>
    </div>
  );
};
