import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

const sum = (a: number) => a;

export const Button = (props: Props) => {
  return <div>Button</div>;
};
