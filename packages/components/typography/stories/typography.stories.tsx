import { type Meta, type StoryObj } from "@storybook/react";
import { Typography, typographyVariants, type TypographyProps } from "../src";

const meta: Meta<TypographyProps> = {
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
    <div className="flex flex-col items-center gap-8">
      {Object.keys(typographyVariants.variants.variant).map((item) => {
        return (
          <Typography
            key={item}
            // @ts-expect-error TypeError
            variant={item}
            className="max-w-screen-md text-balance text-center"
            {...props}
          >
            I am {item} Typography Variant Create content to help spread the
            word about Framer and earn 50% of
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
