import { Tab, Tabs, type TabsProps } from "@jamsr-ui/react";

export const TabRadius = () => {
  const radiusList: TabsProps<never>["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "full",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {radiusList.map((radius) => (
        <Tabs key={radius} radius={radius} aria-label="Tabs radius">
          <Tab value="photos" heading="Photos" />
          <Tab value="music" heading="Music" />
          <Tab value="videos" heading="Videos" />
        </Tabs>
      ))}
    </div>
  );
};
