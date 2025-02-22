import { Tab, Tabs } from "@jamsr-ui/react";
import { GalleryIcon, VideoIcon, MusicIcon } from "@jamsr-ui/shared-icons";

export const TabWithIcons = () => {
  const variants = ["underlined", "bordered", "solid", "light"] as const;
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Tabs key={variant} variant={variant} aria-label="Tabs variants">
          <Tab startContent={<GalleryIcon />} value="photos" heading="Photos" />
          <Tab startContent={<MusicIcon />} value="music" heading="Music" />
          <Tab startContent={<VideoIcon />} value="videos" heading="Videos" />
        </Tabs>
      ))}
    </div>
  );
};
