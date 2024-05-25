import { type Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Typography, type TypographyProps, typographyVariants } from "../src";

const meta = {
  title: "Components/Typography",
  component: Typography,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Typography>;

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
