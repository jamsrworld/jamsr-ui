import { Card, CardContent, Tab, Tabs } from "@jamsr-ui/react";

const TabContent = () => (
  <Card>
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </CardContent>
  </Card>
);
export const TabCustomized = () => {
  return (
    <Tabs
      classNames={{
        base: "bg-content2 rounded",
        cursor: "rounded-full !bg-content-4",
        panel: "bg-content3",
        tab: "border border-gray-900",
        // tabContent:"bg-content4"
        // tabList:"bg-content4"
      }}
      defaultValue="photos"
    >
      <Tab value="photos" heading="Photos">
        <TabContent />
      </Tab>
      <Tab value="music" heading="Music">
        <TabContent />
      </Tab>
      <Tab value="videos" heading="Videos">
        <TabContent />
      </Tab>
    </Tabs>
  );
};
