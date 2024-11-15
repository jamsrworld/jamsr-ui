import { Chip, Divider } from "@jamsr-ui/react";

export const DividerCustomization = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider
        className="h-1 rounded"
        classNames={{
          base: "gap-4",
        }}
      >
        OR
      </Divider>
      <Divider
        classNames={{
          divider: "h-1 rounded bg-primary",
        }}
      >
        OR
      </Divider>
      <Divider
        classNames={{
          divider: "bg-transparent border-primary border-dashed border-t-2",
        }}
      >
        OR
      </Divider>
      <Divider
        classNames={{
          base: "h-[200px]",
          divider: "rounded w-1 bg-primary",
        }}
        orientation="vertical"
      >
        <Chip>OR</Chip>
      </Divider>
      <Divider
        classNames={{
          base: "h-[200px]",
          divider: "rounded w-1.5",
        }}
        orientation="vertical"
        variant="gradient"
      >
        <Chip>OR</Chip>
      </Divider>
    </div>
  );
};
