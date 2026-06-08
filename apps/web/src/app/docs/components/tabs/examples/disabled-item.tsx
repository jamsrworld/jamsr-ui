import { Tabs } from "jamsrui/tabs";

export const TabDisabledItem = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        defaultValue="photos"
        aria-label="Tabs variants"
      >
        <Tabs.List>
          <Tabs.Tab value="photos">Photos</Tabs.Tab>
          <Tabs.Tab
            value="music"
            disabled
          >
            Music
          </Tabs.Tab>
          <Tabs.Tab value="videos">Videos</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs>
    </div>
  );
};
