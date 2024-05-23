import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Popover = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Popover
    </div>
  );
};
