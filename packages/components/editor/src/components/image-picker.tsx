import ToolbarItem from "./menu-item";

type Props = {
  onImage: () => void;
};

export const ImagePicker = (props: Props) => {
  const { onImage } = props;
  const handleClick = () => onImage();
  return (
    <ToolbarItem icon="image" isActive={() => false} onClick={handleClick} />
  );
};
