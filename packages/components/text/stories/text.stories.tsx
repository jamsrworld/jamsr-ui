import { type Meta, type StoryObj } from "@storybook/react";
import { Text, textVariants, type TextProps } from "../src";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (props: TextProps) => (
  <Text {...props}>I'm a typography</Text>
);

export const Default: Story = {
  args: {},
  render: Template,
};

const TemplateAll = (props: TextProps) => {
  return (
    <div className="flex flex-col items-center gap-8">
      {Object.keys(textVariants.variants.variant).map((item) => {
        return (
          <Text
            key={item}
            // @ts-expect-error TypeError
            variant={item}
            className="max-w-screen-md text-balance text-center"
            {...props}
          >
            I am {item} Text Variant Create content to help spread the
            word about Framer and earn 50% of
          </Text>
        );
      })}
    </div>
  );
};

export const All: Story = {
  args: {},
  render: TemplateAll,
};
