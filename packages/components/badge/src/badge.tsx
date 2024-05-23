import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Badge = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Badge
    </div>
  );
};
