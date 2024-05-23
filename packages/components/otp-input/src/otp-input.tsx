import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const OTPInput = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      OTPInput
    </div>
  );
};
