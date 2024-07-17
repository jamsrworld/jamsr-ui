import { Popover } from "@jamsr-ui/popover";
import ToolbarItem from "./menu-item";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const FontHighlightPicker = (props: Props) => {
  const { value, onChange } = props;
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Popover trigger={<ToolbarItem icon="mark-pen-line" title="Font Color" />}>
      <input value={value} type="color" onChange={handleOnChange} />
    </Popover>
  );
};
