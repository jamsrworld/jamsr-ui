import { Tab, Tabs } from "@jamsr-ui/react";
import { TabContent } from "../shared";

export const TabDisabledItem = () => {
  return (
    <Tabs defaultValue="photos">
      <Tab
        value="photos"
        heading="Photos"
      >
        <TabContent />
      </Tab>
      <Tab
        value="music"
        heading="Music"
        disabled
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
