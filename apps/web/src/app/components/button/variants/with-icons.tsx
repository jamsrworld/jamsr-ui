import { Button } from "@jamsr-ui/react";
import { Info } from "@jamsr-ui/shared-icons";

export const ButtonWithIcons = () => {
  return (
    <Button
      startContent={<Info />}
      endContent={<Info />}
    >
      Button
    </Button>
  );
};
