import ToolbarItem from "./menu-item";

type Props = {
  onImage: () => void;
  isDisabled: () => boolean;
};

export const ImagePicker = (props: Props) => {
  const { onImage, isDisabled } = props;
  const handleClick = () => onImage();
  return (
    <ToolbarItem
      icon="image"
      isDisabled={isDisabled}
      isActive={() => false}
      onClick={handleClick}
    />
  );
};
