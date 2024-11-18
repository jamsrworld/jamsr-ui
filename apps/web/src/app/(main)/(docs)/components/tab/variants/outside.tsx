"use client";

import { Tab, Tabs } from "@jamsr-ui/react";
import { useState } from "react";

export const TabOutside = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "music" | "videos">(
    "photos",
  );
  return (
    <>
      <div>
        {/* tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <Tab value="photos" heading="Photos" />
          <Tab value="music" heading="Music" />
          <Tab value="videos" heading="Videos" />
        </Tabs>
      </div>
      <div>
        {activeTab === "photos" && "photos content"}
        {activeTab === "music" && "music content"}
        {activeTab === "videos" && "videos content"}
        {/* content */}
      </div>
    </>
  );
};
