import { Menu, MenuItem } from "@jamsr-ui/menu";
import ToolbarItem from "./menu-item";

type Props = {
  onClick: (language?: string) => void;
  isActive: () => boolean;
  isDisabled: () => boolean;
};

const items: { label: string; value: string }[] = [
  {
    label: "Html",
    value: "html",
  },
  {
    label: "Javascript",
    value: "javascript",
  },
  {
    label: "Typescript",
    value: "typescript",
  },
  {
    label: "Css",
    value: "css",
  },
  {
    label: "Rust",
    value: "rust",
  },
  {
    label: "Python",
    value: "python",
  },
  { label: "Bash", value: "bash" },
  {
    label: "Shell",
    value: "shell",
  },
  {
    label: "cURL",
    value: "curl",
  },
  {
    label: "Dockerfile",
    value: "dockerfile",
  },
  {
    label: "JSON",
    value: "json",
  },
  {
    label: "Nginx",
    value: "nginx",
  },
  {
    label: "PHP",
    value: "php",
  },
  {
    label: "Plaintext",
    value: "plaintext",
  },
];

export const CodeBlockPicker = (props: Props) => {
  const { onClick, isActive, isDisabled } = props;
  if (isActive()) {
    return (
      <ToolbarItem
        icon="code-box-line"
        isActive={isActive}
        title="Code Block"
        onClick={() => onClick()}
        isDisabled={isDisabled}
      />
    );
  }
  return (
    <Menu
      trigger={
        <ToolbarItem
          icon="code-box-line"
          isActive={isActive}
          title="Code Block"
          isDisabled={isDisabled}
        />
      }
    >
      {items.map((item) => (
        <MenuItem key={item.value} onClick={() => onClick(item.value)}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};
