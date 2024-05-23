import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Autocomplete = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      Autocomplete
    </div>
  );
};
