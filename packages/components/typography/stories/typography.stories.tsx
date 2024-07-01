import { type Meta, type StoryObj } from "@storybook/react";
import { Typography, typographyVariants, type TypographyProps } from "../src";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof meta>;
const Template = (props: TypographyProps) => (
  <Typography {...props}>I'm a typography</Typography>
);

export const Default: Story = {
  args: {},
  render: Template,
};

const TemplateAll = (props: TypographyProps) => {
  return (
    <div className="grid gap-4">
      {Object.keys(typographyVariants.variants.variant).map((item) => {
        return (
          <Typography
            key={item}
            // @ts-expect-error TypeError
            variant={item}
            {...props}
          >
            I am {item} Typography Variant
          </Typography>
        );
      })}
    </div>
  );
};

export const All: Story = {
  args: {},
  render: TemplateAll,
};
