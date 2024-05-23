import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Typography = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Typography
    </div>
  );
};
