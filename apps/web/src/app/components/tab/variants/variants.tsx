import { Tab, Tabs } from "@jamsr-ui/react";

export const TabVariants = () => {
  const variants = ["solid", "underlined", "bordered", "light"] as const;
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Tabs
          key={variant}
          variant={variant}
          aria-label="Tabs variants"
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
