import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Chip = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Chip
    </div>
  );
};
