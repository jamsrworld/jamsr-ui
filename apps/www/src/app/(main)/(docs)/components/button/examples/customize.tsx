import { Button } from "@jamsr-ui/react";

export const ButtonCustomized = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button className="bg-gradient-to-r from-cyan-500 to-blue-500">
        Click Me!
      </Button>
      <Button className="bg-red-500 hover:text-red-900 ui-hover:bg-red-600 dark:ui-hover:bg-red-600">
        Click Me!
      </Button>
      <Button variant="text" disableRipple className="ui-hover:text-primary">
        Click Me!
      </Button>
    </div>
  );
};
