import { Link, type LinkProps } from "@jamsr-ui/next";

export const LinkUnderline = () => {
  const underlines: LinkProps["underline"][] = ["always", "hover", "never"];
  return (
    <div className="flex gap-2">
      {underlines.map((item) => {
        return (
          <Link href="/" key={item} underline={item}>
            underline="{item}"
          </Link>
        );
      })}
    </div>
  );
};
