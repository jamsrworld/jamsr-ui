import { Popover } from "@jamsr-ui/popover";
import ToolbarItem from "./menu-item";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const FontColorPicker = (props: Props) => {
  const { value, onChange } = props;
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Popover trigger={<ToolbarItem icon="text-color" title="Font Color" />}>
      <input value={value} type="color" onChange={handleOnChange} />
    </Popover>
  );
};
