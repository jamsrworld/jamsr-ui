import { Icon } from "@iconify/react";
import { Tabs } from "jamsrui/tabs";

export const TabWithIcons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        defaultValue="photos"
        aria-label="Tabs variants"
      >
        <Tabs.List>
          <Tabs.Tab value="photos">
            <Icon icon="ic:round-photo" />
            Photos
          </Tabs.Tab>
          <Tabs.Tab value="music">
            <Icon icon="mynaui:music-solid" />
            Music
          </Tabs.Tab>
          <Tabs.Tab value="videos">
            <Icon icon="tabler:video-filled" />
            Videos
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs>
    </div>
  );
};
