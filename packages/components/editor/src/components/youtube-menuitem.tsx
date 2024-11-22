import { Input } from "@jamsr-ui/input";
import { Popover } from "@jamsr-ui/popover";
import { useState } from "react";
import type { SetYoutubeVideoOptions } from "../hooks/use-text-menu-commands";
import ToolbarItem from "./menu-item";

type Props = {
  onYoutube: (options: SetYoutubeVideoOptions) => void;
};

export const YoutubeMenuitem = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { onYoutube } = props;
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    setUrl("");
    onYoutube({ src: url });
  };

  return (
    <Popover
      trigger={
        <ToolbarItem
          icon="youtube"
          isActive={() => false}
          title="Youtube Video"
        />
      }
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <Input value={url} onValueChange={setUrl} placeholder="Enter Url" />
        <button type="submit" className="sr-only" hidden aria-label="Submit" />
      </form>
    </Popover>
  );
};
