import { type LinkProps } from "@jamsr-ui/react";
import { LinkUsage } from "./usage";

export const LinkUnderline = () => {
  const underlines: LinkProps["underline"][] = ["always", "hover", "never"];
  return (
    <div className="flex gap-2">
      {underlines.map((item) => {
        return (
          <LinkUsage key={item} underline={item}>
            underline="{item}"
          </LinkUsage>
        );
      })}
    </div>
  );
};
