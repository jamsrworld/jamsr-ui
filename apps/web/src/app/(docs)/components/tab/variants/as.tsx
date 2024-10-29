import { Tab, Tabs } from "@jamsr-ui/react";

export const TabAs = () => {
  return (
    <Tabs
      as="nav"
      aria-label="Tabs as nav"
    >
      <Tab
        value="photos"
        heading="Photos"
        as="a"
        href="https://jamsrworld.com"
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
  );
};
