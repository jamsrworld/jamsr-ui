import { Tabs } from "jamsrui/tabs";

export const TabDisabled = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        defaultValue="photos"
        aria-label="Tabs variants"
        disabled
      >
        <Tabs.List>
          <Tabs.Tab value="photos">Photos</Tabs.Tab>
          <Tabs.Tab value="music">Music</Tabs.Tab>
          <Tabs.Tab value="videos">Videos</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs>
    </div>
  );
};
