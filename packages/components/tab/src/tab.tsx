import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Tab = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Tab
    </div>
  );
};
