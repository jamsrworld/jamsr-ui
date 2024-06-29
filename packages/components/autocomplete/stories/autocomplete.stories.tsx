import { type Meta, type StoryObj } from "@storybook/react";
import { Autocomplete, AutocompleteProps } from "../src/autocomplete";
import { AutocompleteItem } from "../src/autocomplete-item";
import { ComplexAutocompleteStory } from "./templates/complex";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  {
    label: "Lion",
    value: "lion",
    description: "The king of the jungle",
  },
  {
    label: "Tiger",
    value: "tiger",
    description: "The largest cat species",
  },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

const Template = (props: Partial<AutocompleteProps>) => {
  return (
    <Autocomplete label="User" {...props}>
      {Animals.map((animal) => (
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

export const Default: Story = {
  render: Template,
};

export const Complex: Story = {
  render: ComplexAutocompleteStory,
};

export const Multiple: Story = {
  render: () => <Template isMultiple />,
};
