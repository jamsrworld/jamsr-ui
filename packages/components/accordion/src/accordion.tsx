import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Accordion = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Accordion
    </div>
  );
};
