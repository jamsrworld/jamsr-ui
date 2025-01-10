import { IconButton, Tooltip } from "@jamsr-ui/react";
import { type Route } from "next";
import { OpenLinkIcon } from "./icons";

type Props = {
  src: Route;
};

export const IFrameExample = (props: Props) => {
  const { src } = props;
  return (
    <div className="relative">
      <Tooltip title="Open In New Tab">
        <IconButton
          as="a"
          href={src}
          target="_blank"
          label="Open In New Tab"
          className="absolute right-0 top-0 text-foreground-secondary"
          variant="outlined"
        >
          <OpenLinkIcon />
        </IconButton>
      </Tooltip>
      <iframe src={src} title="Header default" className="h-[500px] w-full" />
    </div>
  );
};
