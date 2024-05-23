import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Progress = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Progress
    </div>
  );
};
