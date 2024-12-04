import {
  Autocomplete,
  AutocompleteItem,
  type AutocompleteProps,
} from "@jamsr-ui/react";

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

export const AutocompleteUsage = (props: Partial<AutocompleteProps>) => {
  return (
    <div>
      <Autocomplete label="Animal" {...props}>
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
    </div>
  );
};
