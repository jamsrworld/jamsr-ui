"use client";

import { Autocomplete } from "ui/autocomplete";

const tags = [
  { id: "t1", value: "feature" },
  { id: "t2", value: "fix" },
  { id: "t3", value: "bug" },
  { id: "t4", value: "docs" },
  { id: "t5", value: "internal" },
  { id: "t6", value: "mobile" },
  { id: "t7", value: "performance" },
  { id: "t8", value: "accessibility" },
  { id: "t9", value: "security" },
  { id: "t10", value: "design" },
  { id: "t11", value: "testing" },
  { id: "t12", value: "refactor" },
];

type Tag = (typeof tags)[number];

export const AutocompleteUsage = (props: Record<string, unknown>) => {
  return (
    <div className="w-full max-w-xs">
      <Autocomplete
        items={tags}
        {...props}
      >
        <label className="mb-1.5 block text-sm font-medium">
          Search tags
          <Autocomplete.Input placeholder="e.g. feature" />
        </label>
        <Autocomplete.Content>
          <Autocomplete.Empty>No tags found.</Autocomplete.Empty>
          <Autocomplete.List>
            {(tag: Tag) => (
              <Autocomplete.Item
                key={tag.id}
                value={tag}
              >
                {tag.value}
              </Autocomplete.Item>
            )}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete>
    </div>
  );
};
