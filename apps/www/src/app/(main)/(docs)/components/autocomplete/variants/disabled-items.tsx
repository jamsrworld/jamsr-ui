import {
  Autocomplete,
  AutocompleteItem,
  type AutocompleteItemProps,
  type AutocompleteProps,
} from "@jamsr-ui/react";

const animals: AutocompleteItemProps[] = [
  {
    label: "Cat",
    value: "cat",
    isDisabled: true,
  },
  {
    label: "Dog",
    value: "dog",
  },
  {
    label: "Elephant",
    value: "elephant",
    isDisabled: true,
  },
  {
    label: "Lion",
    value: "lion",
  },
  {
    label: "Tiger",
    value: "tiger",
    isDisabled: true,
  },
  {
    label: "Giraffe",
    value: "giraffe",
    isDisabled: true,
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

export const AutocompleteDisabledItems = (
  props: Partial<AutocompleteProps>,
) => {
  return (
    <div>
      <Autocomplete label="Animal" {...props}>
        {animals.map((animal) => (
          <AutocompleteItem
            key={animal.value}
            value={animal.value}
            label={animal.label}
            isDisabled={animal.isDisabled}
          >
            {animal.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};
