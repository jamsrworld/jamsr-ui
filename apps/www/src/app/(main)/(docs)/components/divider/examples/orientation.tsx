import { Divider, IconButton } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/shared-icons";

export const DividerOrientation = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="contents">
        <h3 className="text-base">Horizontal</h3>
        <Divider>OR</Divider>
      </div>
      <div className="contents">
        <h3 className="text-base">Vertical</h3>
        <div className="flex gap-2">
          <IconButton aria-label="Edit">
            <EmailIcon />
          </IconButton>
          <Divider orientation="vertical" />
          <IconButton aria-label="Edit">
            <EmailIcon />
          </IconButton>
          <Divider orientation="vertical" />
          <IconButton aria-label="Edit">
            <EmailIcon />
          </IconButton>
          <Divider orientation="vertical" />
          <IconButton aria-label="Edit">
            <EmailIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
