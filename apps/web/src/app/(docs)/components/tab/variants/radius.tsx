import { Tab, Tabs } from "@jamsr-ui/react";

export const TabRadius = () => {
  const radiusList = ["full", "lg", "md", "sm", "none"] as const;
  return (
    <div className="flex flex-wrap gap-4">
      {radiusList.map((radius) => (
        <Tabs
          key={radius}
          radius={radius}
          aria-label="Tabs radius"
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
