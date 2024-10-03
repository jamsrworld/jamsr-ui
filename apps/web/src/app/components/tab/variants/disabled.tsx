import { Tab, Tabs } from "@jamsr-ui/react";
import { TabContent } from "../shared";

export const TabDisabled = () => {
  return (
    <Tabs
      defaultValue="photos"
      isDisabled
    >
      <Tab
        value="photos"
        heading="Photos"
      >
        <TabContent />
      </Tab>
      <Tab
        value="music"
        heading="Music"
      >
        <TabContent />
      </Tab>
      <Tab
        value="videos"
        heading="Videos"
      >
        <TabContent />
      </Tab>
    </Tabs>
  );
};
