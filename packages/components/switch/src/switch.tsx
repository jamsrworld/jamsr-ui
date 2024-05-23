import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Switch = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Switch
    </div>
  );
};
