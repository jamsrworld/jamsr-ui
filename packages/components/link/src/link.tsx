import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Link = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Link
    </div>
  );
};
