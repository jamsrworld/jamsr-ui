import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Ripple = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Ripple
    </div>
  );
};
