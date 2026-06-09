"use client";

import { Tabs } from "jamsrui/tabs";
import React from "react";

export const TabDisabled = (props: React.ComponentProps<typeof Tabs>) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        defaultValue="photos"
        aria-label="Tabs variants"
        {...props}
      >
        <Tabs.List>
          <Tabs.Tab
            value="photos"
            disabled
          >
            Photos
          </Tabs.Tab>
          <Tabs.Tab
            value="music"
            disabled
          >
            Music
          </Tabs.Tab>
          <Tabs.Tab
            value="videos"
            disabled
          >
            Videos
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs>
    </div>
  );
};
