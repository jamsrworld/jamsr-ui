import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const ImageUpload = (props: Props) => {
  return (
    <div
      className="bg-blue-50"
      {...props}
    >
      ImageUpload
    </div>
  );
};
