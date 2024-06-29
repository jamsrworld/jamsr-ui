import { type Meta, type StoryObj } from "@storybook/react";
import { Email, EyeOpen } from "@jamsr-ui/shared-icons";
import { Autocomplete } from "../src/autocomplete";
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
    <DefaultAutocomplete startContent={<Email />} endContent={<EyeOpen />} />
  ),
};

export const ChooseCountry: Story = {
  render: ChooseCountryAutocompleteStory,
};

export const Multiple: Story = {
  render: () => <DefaultAutocomplete isMultiple />,
};

export const MultipleCustomRender: Story = {
  render: () => {
    const value = new Set(countries.map((item) => item.code).slice(0, 20));
    return <ChooseCountryAutocompleteStory defaultValue={value} isMultiple />;
  },
};
