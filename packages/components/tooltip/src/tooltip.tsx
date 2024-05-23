import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Tooltip = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Tooltip
    </div>
  );
};
