import { type ComponentPropsWithoutRef } from "react";
import { forwardRefUI } from "@jamsr-ui/utils";

type Props = ComponentPropsWithoutRef<"div">;

export const Alert = forwardRefUI<"div", Props>((props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Alert
    </div>
  );
});
Alert.displayName = "UI.Alert";
