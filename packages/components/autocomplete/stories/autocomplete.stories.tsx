import { EmailIcon, EyeOpenIcon } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";
import { Autocomplete } from "../src/autocomplete";
import type { SelectionSet } from "../src/use-autocomplete";
import {
  ComplexAutocompleteStory as ChooseCountryAutocompleteStory,
  countries,
} from "./templates/complex";
import { DefaultAutocomplete } from "./templates/default";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: DefaultAutocomplete,
};

const ControlledStory = () => {
  const [value, setValue] = useState<SelectionSet>(new Set(["cat"]));
  return (
    <DefaultAutocomplete
      value={value}
      onValueChange={setValue}
      helperText={`Selected Value is ${Array.from(value).join("")}`}
    />
  );
};

export const Controlled: Story = {
  render: ControlledStory,
};

export const HelperText: Story = {
  render: () => (
    <DefaultAutocomplete helperText="Please choose one of the options" />
  ),
};

export const ErrorState: Story = {
  render: () => (
    <DefaultAutocomplete
      helperText="Please choose one of the options"
      isInvalid
    />
  ),
};

export const StartEndContent: Story = {
  render: () => (
    <DefaultAutocomplete startContent={<EmailIcon />} endContent={<EyeOpenIcon />} />
  ),
};

export const ChooseCountry: Story = {
  render: ChooseCountryAutocompleteStory,
};

export const Multiple: Story = {
  render: () => <DefaultAutocomplete isMultiple />,
};

const MultipleControlledStory = () => {
  const [value, setValue] = useState<SelectionSet>(new Set(["cat"]));
  return (
    <DefaultAutocomplete
      value={value}
      onValueChange={setValue}
      isMultiple
      helperText={`Selected Value is: ${Array.from(value).join(",")}`}
    />
  );
};

export const MultipleControlled: Story = {
  render: MultipleControlledStory,
};

export const MultipleCustomRender: Story = {
  render: () => {
    const value = new Set(countries.map((item) => item.code).slice(0, 20));
    return <ChooseCountryAutocompleteStory defaultValue={value} isMultiple />;
  },
};
