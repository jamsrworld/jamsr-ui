import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Select = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Select
    </div>
  );
};
