import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Radio = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Radio
    </div>
  );
};
