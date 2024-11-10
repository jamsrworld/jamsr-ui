import { type LinkProps } from "@jamsr-ui/react";
import { LinkDefault } from "./default";

export const LinkUnderline = () => {
  const underlines: LinkProps["underline"][] = ["always", "hover", "never"];
  return (
    <div className="flex gap-2">
      {underlines.map((item) => {
        return (
          <LinkDefault key={item} underline={item}>
            underline="{item}"
          </LinkDefault>
        );
      })}
    </div>
  );
};
