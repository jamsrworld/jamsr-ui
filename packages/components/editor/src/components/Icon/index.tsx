import { Icons, type IconTypes } from "./icons";

type Props = {
  name: IconTypes;
};

export const EditorIcon = (props: Props) => {
  const { name } = props;
  return <div className="[&>svg]:size-4">{Icons[name]}</div>;
};
