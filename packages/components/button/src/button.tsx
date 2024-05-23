import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Button = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Button
    </div>
  );
};
