import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Header = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Header
    </div>
  );
};
