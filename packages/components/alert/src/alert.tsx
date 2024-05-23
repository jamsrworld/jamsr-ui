import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Alert = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Alert
    </div>
  );
};
