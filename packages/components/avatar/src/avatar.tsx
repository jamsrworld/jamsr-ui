import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Avatar = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Avatar
    </div>
  );
};
