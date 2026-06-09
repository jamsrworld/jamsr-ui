"use client";

import { Card } from "ui/card";
import { Tabs } from "ui/tabs";
import React from "react";

export const TabsUsage = (props: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs
      defaultValue="photos"
      {...props}
    >
      <Tabs.List>
        <Tabs.Tab value="photos">Photos</Tabs.Tab>
        <Tabs.Tab value="music">Music</Tabs.Tab>
        <Tabs.Tab value="videos">Videos</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="photos">
        <Card>
          <Card.Content>
            📸 <strong>12 new photos</strong> from your weekend trip to Yosemite
            have been uploaded. Don&apos;t forget to tag your friends and add
            them to the shared album!
          </Card.Content>
        </Card>
      </Tabs.Panel>
      <Tabs.Panel value="music">
        <Card>
          <Card.Content>
            🎵 You’ve got a new playlist: <em>“Lo-Fi Evenings”</em>. Featuring
            artists like Jinsang, Eevee, and Idealism. Perfect for focusing or
            unwinding.
          </Card.Content>
        </Card>
      </Tabs.Panel>
      <Tabs.Panel value="videos">
        <Card>
          <Card.Content>
            🎬 Your recent video, <em>“How I Built a Web App in 7 Days”</em>,
            just hit <strong>10k views</strong> on YouTube! Check your channel
            insights for more stats.
          </Card.Content>
        </Card>
      </Tabs.Panel>
    </Tabs>
  );
};
