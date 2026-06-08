import { Link } from "jamsrui/link";

export const LinkUnderline = () => {
  const underlines: Link.Props["underline"][] = ["always", "hover", "never"];
  return (
    <div className="flex gap-2">
      {underlines.map((item) => {
        return (
          <Link
            href="/"
            key={item}
            underline={item}
          >
            underline="{item}"
          </Link>
        );
      })}
    </div>
  );
};
