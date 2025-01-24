"use client";

import { Autocomplete, AutocompleteItem } from "@jamsr-ui/react";
import { useState } from "react";

const animals = [
  {
    label: "Cat",
    value: "cat",
  },
  {
    label: "Dog",
    value: "dog",
  },
  {
    label: "Elephant",
    value: "elephant",
  },
  {
    label: "Lion",
    value: "lion",
  },
  {
    label: "Tiger",
    value: "tiger",
  },
  {
    label: "Giraffe",
    value: "giraffe",
  },
  {
    label: "Dolphin",
    value: "dolphin",
  },
  {
    label: "Penguin",
    value: "penguin",
  },
  {
    label: "Zebra",
    value: "zebra",
  },
  {
    label: "Shark",
    value: "shark",
  },
  {
    label: "Whale",
    value: "whale",
  },
  {
    label: "Otter",
    value: "otter",
  },
  {
    label: "Crocodile",
    value: "crocodile",
  },
];
export const AutocompleteControlled = () => {
  const [value, setValue] = useState<string[]>(["cat"]);
  return (
    <Autocomplete
      label="Animal"
      onValueChange={setValue}
      helperText={`Selected Value is ${Array.from(value).join("")}`}
    >
      {animals.map((animal) => (
        <AutocompleteItem
          key={animal.value}
          value={animal.value}
          label={animal.label}
        >
          {animal.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};
