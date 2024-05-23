import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Card = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Card
    </div>
  );
};
