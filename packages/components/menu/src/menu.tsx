import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Menu = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Menu
    </div>
  );
};
