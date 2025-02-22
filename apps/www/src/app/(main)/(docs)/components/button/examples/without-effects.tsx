import { Button } from "@jamsr-ui/react";

export const ButtonWithoutEffects = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button variant="text" disableRipple>
        Click Me!
      </Button>
      <Button disableRipple disableAnimation>
        Click Me!
      </Button>
    </div>
  );
};
