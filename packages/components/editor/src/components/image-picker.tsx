import ToolbarItem from "./menu-item";

type Props = {
  onImage: (options: { src: string }) => void;
};

const src =
  "https://jamsrworld.com/assets/images/users/Generation-mlm-software.png-55109851721120489b3f993cf-4514-42fd-92e7-20b26dfb09af.png";

export const ImagePicker = (props: Props) => {
  const { onImage } = props;
  const handleClick = () => onImage({ src });
  return (
    <div>
      <ToolbarItem icon="image" isActive={() => false} onClick={handleClick} />
    </div>
  );
};
