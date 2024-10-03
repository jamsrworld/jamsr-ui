import { UIProvider } from "@jamsr-ui/react";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/style.css";

const decorators: Preview["decorators"] = [
  (Story) => (
    <div className="text-foreground">
      <UIProvider>
        <Story />
      </UIProvider>
    </div>
  ),
];

const preview: Preview = {
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      toc: {
        title: "Table of Contents",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Foundations", "Components"],
      },
    },
    darkMode: {
      current: "dark",
      stylePreview: true,
      darkClass: "dark",
      lightClass: "light",
      classTarget: "html",
      dark: {
        ...themes.dark,
        appBg: "#000000",
        barBg: "#000000",
        base: "red",
        appContentBg: "#000000",
      },
      light: {
        ...themes.normal,
      },
    },
  },
  tags: ["autodocs"],
  decorators,
};

export default preview;
