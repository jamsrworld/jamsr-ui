import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Input = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Input
    </div>
  );
};
