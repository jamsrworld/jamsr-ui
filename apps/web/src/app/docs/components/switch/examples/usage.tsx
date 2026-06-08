import { Label } from "jamsrui/label";
import { Switch } from "jamsrui/switch";
import { useId } from "react";

export const SwitchUsage = () => {
  return (
    <div className="flex flex-col gap-2">
      <SwitchUsage1 />
      <SwitchUsage2 />
      <SwitchUsage3 />
    </div>
  );
};

const SwitchUsage1 = () => {
  return <Switch />;
};

const SwitchUsage2 = () => {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <Switch id={id} />
      <div className="flex flex-col">
        <Label
          htmlFor={id}
          className="text-sm font-medium"
        >
          Press Me!
        </Label>
        <div className="text-xs text-foreground-secondary">
          This is a description
        </div>
      </div>
    </div>
  );
};

const SwitchUsage3 = () => {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <Switch id={id} />
      <Label
        htmlFor={id}
        className="flex flex-col"
      >
        <span className="text-sm font-medium">Press Me!</span>
        <span className="text-xs text-foreground-secondary">
          This is a description
        </span>
      </Label>
    </div>
  );
};
