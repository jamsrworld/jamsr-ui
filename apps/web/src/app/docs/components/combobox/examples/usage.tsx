"use client";

import { Combobox } from "ui/combobox";
import { ChevronDown, X } from "lucide-react";
import React from "react";

interface Fruit {
  label: string;
  value: string;
}

const fruits: Fruit[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Grape", value: "grape" },
  { label: "Mango", value: "mango" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Cherry", value: "cherry" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Pomegranate", value: "pomegranate" },
];

export const ComboboxUsage = (props: Partial<Combobox.Props>) => {
  return (
    <div className="w-full max-w-xs">
      <Combobox
        items={fruits}
        {...props}
      >
        <label className="mb-1.5 block text-sm font-medium">
          Choose a fruit
        </label>
        <Combobox.InputGroup>
          <Combobox.Input placeholder="e.g. Apple" />
          <div className="flex items-center">
            <Combobox.Clear aria-label="Clear selection">
              <X className="size-4" />
            </Combobox.Clear>
            <Combobox.Trigger aria-label="Open popup">
              <ChevronDown className="size-4" />
            </Combobox.Trigger>
          </div>
        </Combobox.InputGroup>
        <Combobox.Content>
          <Combobox.Empty>No fruits found.</Combobox.Empty>
          <Combobox.List>
            {(item: Fruit) => (
              <Combobox.Item
                key={item.value}
                value={item}
              >
                <Combobox.ItemIndicator />
                <span>{item.label}</span>
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox>
    </div>
  );
};
