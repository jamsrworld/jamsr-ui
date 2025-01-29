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

export const TabUsage = () => {
  return (
    <Tabs defaultValue="photos">
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
