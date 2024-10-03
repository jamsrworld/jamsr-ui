import { Tab, Tabs } from "@jamsr-ui/react";

export const TabColors = () => {
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ] as const;

  return (
    <div className="flex flex-wrap gap-4">
      {colors.map((color) => (
        <Tabs
          key={color}
          color={color}
          aria-label="Tabs colors"
          radius="full"
        >
          <Tab
            value="photos"
            heading="Photos"
          />
          <Tab
            value="music"
            heading="Music"
          />
          <Tab
            value="videos"
            heading="Videos"
          />
        </Tabs>
      ))}
    </div>
  );
};
