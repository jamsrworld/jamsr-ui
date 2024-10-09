import { Divider } from "@jamsr-ui/react";

export const DividerColors = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider
        classNames={{
          divider: "bg-divider-light",
        }}
      >
        Light
      </Divider>
      <Divider>Default</Divider>
      <Divider
        classNames={{
          divider: "bg-divider-dark",
        }}
      >
        Dark
      </Divider>
    </div>
  );
};
