import { IconButton } from "jamsrui/icon-button";
import { Tooltip } from "jamsrui/tooltip";
import { type Route } from "next";

type Props = {
  src: Route;
};

export const IFrameExample = (props: Props) => {
  const { src } = props;
  return (
    <div className="relative">
      <Tooltip>
        <Tooltip.Trigger>
          <IconButton
            render={
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
              />
            }
            label="Open In New Tab"
            className="absolute right-0 top-0 text-foreground-secondary"
            variant="bordered"
          >
            0
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content>Open In New Tab</Tooltip.Content>
      </Tooltip>
      <iframe
        src={src}
        title="Header default"
        className="h-125 w-full"
      />
    </div>
  );
};
