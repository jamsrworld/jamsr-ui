import { forwardRefUI } from "@jamsr-ui/utils";
import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Alert = forwardRefUI<"div", Props>((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-blue-50"
      {...props}
    >
      Alert
    </div>
  );
});
Alert.displayName = "UI.Alert";
