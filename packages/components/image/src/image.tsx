import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Image = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Image
    </div>
  );
};
