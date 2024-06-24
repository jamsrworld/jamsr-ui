import { JamsrUIProvider } from "@jamsr-ui/react";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/style.css";

const decorators: Preview["decorators"] = [
  (Story) => (
    <div className="text-foreground">
      <JamsrUIProvider>
        <Story />
      </JamsrUIProvider>
    </div>
  ),
];

const preview: Preview = {
  parameters: {
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
    // docs: {
    //   source: {
    //     type: "code",
    //   },
    // },
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
