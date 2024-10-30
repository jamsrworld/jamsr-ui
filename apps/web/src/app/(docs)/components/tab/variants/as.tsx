import { Tab, Tabs } from "@jamsr-ui/react";

export const TabAs = () => {
  return (
    <Tabs as="nav" id="tabAs" aria-label="Tabs as nav">
      <Tab value="photos" heading="Photos" as="a" href="#tabAs" />
      <Tab value="music" heading="Music" as="a" href="#tabAs" />
      <Tab value="videos" heading="Videos" as="a" href="#tabAs" />
    </Tabs>
  );
};
