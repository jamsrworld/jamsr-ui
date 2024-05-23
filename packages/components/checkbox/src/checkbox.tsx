import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Checkbox = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Checkbox
    </div>
  );
};
