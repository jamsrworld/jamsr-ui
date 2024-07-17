import { Button } from "@jamsr-ui/button";
import { Menu, MenuItem } from "@jamsr-ui/menu";
import { ChevronDown } from "@jamsr-ui/shared-icons";

const FONT_FAMILY_GROUPS = [
  {
    label: "Sans Serif",
    options: [
      { label: "Inter", value: "" },
      { label: "Arial", value: "Arial" },
      { label: "Helvetica", value: "Helvetica" },
    ],
  },
  {
    label: "Serif",
    options: [
      { label: "Times New Roman", value: "Times" },
      { label: "Garamond", value: "Garamond" },
      { label: "Georgia", value: "Georgia" },
    ],
  },
  {
    label: "Monospace",
    options: [
      { label: "Courier", value: "Courier" },
      { label: "Courier New", value: "Courier New" },
    ],
  },
];

const FONT_FAMILIES = FONT_FAMILY_GROUPS.flatMap((group) => [
  group.options,
]).flat();

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const FontFamilyPicker = (props: Props) => {
  const { value, onChange } = props;
  const currentValue = FONT_FAMILIES.find((item) => item.value === value);
  const currentFontLabel = currentValue?.label.split(" ")[0] ?? "Inter";

  return (
    <Menu
      trigger={
        <Button variant="light" size="sm">
          {currentFontLabel}
          <ChevronDown className="size-2 shrink-0 text-white" />
        </Button>
      }
    >
      {FONT_FAMILY_GROUPS.map((group) => (
        <div
          className="mt-2.5 flex flex-col gap-0.5 first:mt-0"
          key={group.label}
        >
          <p>{group.label}</p>
          {group.options.map((font) => (
            <MenuItem
              // isActive={value === font.value}
              onClick={() => onChange(font.value)}
              key={`${font.label}_${font.value}`}
            >
              <span style={{ fontFamily: font.value }}>{font.label}</span>
            </MenuItem>
          ))}
        </div>
      ))}
    </Menu>
  );
};
