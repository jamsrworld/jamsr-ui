"use client";

import { Tabs } from "ui/tabs";
import React from "react";

export const TabDisabledItem = (props: Tabs.Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        defaultValue="photos"
        aria-label="Tabs variants"
        {...props}
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
