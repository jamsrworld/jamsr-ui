import { Select, SelectItem } from "@jamsr-ui/select";
import type { Editor } from "@tiptap/react";
import { useEffect, useState } from "react";

const useIsActive = ({
  editor,
  name,
  setValue,
  value,
  attributes,
}: {
  editor: Editor;
  name: string;
  value: string;
  attributes?: Record<string, unknown>;
  setValue: React.Dispatch<React.SetStateAction<Set<string>>>;
}) => {
  const isActive = editor.isActive(name, attributes);
  useEffect(() => {
    if (isActive) {
      setValue(new Set([value]));
    }
  }, [isActive, name, setValue, value]);
};

export const HeadingMenu = ({ editor }: { editor: Editor }) => {
  const values = [
    {
      value: "h1",
      label: "Heading 1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      value: "h2",
      label: "Heading 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      value: "h3",
      label: "Heading 3",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      value: "h4",
      label: "Heading 4",
      action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
    },
    {
      value: "h5",
      label: "Heading 5",
      action: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
    },
    {
      value: "h6",
      label: "Heading 6",
      action: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
    },
    {
      value: "paragraph",
      label: "Paragraph",
      action: () => editor.chain().focus().setParagraph().run(),
    },
  ];

  const [value, setValue] = useState(new Set(["paragraph"]));
  const onValueChange = (value: Set<string>) => {
    setValue(value);
    const val = Array.from(value)[0];
    if (val) {
      values.find((item) => item.value === val)?.action();
    }
  };

  useIsActive({
    editor,
    name: "heading",
    setValue,
    value: "h1",
    attributes: { level: 1 },
  });

  useIsActive({
    editor,
    name: "heading",
    setValue,
    value: "h2",
    attributes: { level: 2 },
  });

  useIsActive({
    editor,
    name: "heading",
    setValue,
    value: "h3",
    attributes: { level: 3 },
  });

  useIsActive({
    editor,
    name: "heading",
    setValue,
    value: "h4",
    attributes: { level: 4 },
  });

  useIsActive({
    editor,
    name: "heading",
    setValue,
    value: "h5",
    attributes: { level: 5 },
  });

  useIsActive({
    editor,
    name: "heading",
    setValue,
    value: "h6",
    attributes: { level: 6 },
  });

  useIsActive({ editor, name: "paragraph", value: "paragraph", setValue });

  return (
    <Select
      value={value}
      className="max-w-[150px]"
      onValueChange={onValueChange}
    >
      {values.map(({ label, value }) => {
        return (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        );
      })}
      {/* <Repeater count={6}>
        {(idx) => {
          const level = (idx + 1) as 1 | 2 | 3 | 4 | 5 | 6;
          const isActive = editor.isActive("heading", { level });
          const onClick = () =>
            editor.chain().focus().toggleHeading({ level }).run();

          return (
            <SelectItem key={idx} value={level.toString()}>
              Heading {idx + 1}
            </SelectItem>
          );
        }}
      </Repeater> */}
    </Select>
  );
};

// (idx) => {
//   return <Fragment key={idx}>{children}</Fragment>;
// }
