import { Button } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const ButtonWithIcons = () => {
  return (
    <Button
      startContent={<InfoIcon />}
      endContent={<InfoIcon />}
    >
      Button
    </Button>
  );
};
