import { Button, Divider } from "@jamsr-ui/react";
import { Email } from "@jamsr-ui/shared-icons";

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
          <Button isIconOnly>
            <Email />
          </Button>
          <Divider orientation="vertical" />
          <Button isIconOnly>
            <Email />
          </Button>
          <Divider orientation="vertical" />
          <Button isIconOnly>
            <Email />
          </Button>
          <Divider orientation="vertical" />
          <Button isIconOnly>
            <Email />
          </Button>
        </div>
      </div>
    </div>
  );
};
