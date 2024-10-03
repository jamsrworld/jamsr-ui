import { Tab, Tabs } from "@jamsr-ui/react";

export const TabSizes = () => {
  const sizes = ["sm", "md", "lg"] as const;
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <Tabs
          key={size}
          size={size}
          aria-label="Tabs sizes"
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
