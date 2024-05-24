import { JamsrUIProvider } from "@jamsr-ui/react";
import type { Preview } from "@storybook/react";
import "../src/style.css";

const decorators: Preview["decorators"] = [
  (Story) => (
    <JamsrUIProvider>
      <Story />
    </JamsrUIProvider>
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
        appBg: "#000000",
        barBg: "#000000",
        background: "#000000",
        appContentBg: "#000000",
      },
      light: {},
    },
  },
  tags: ["autodocs"],
  decorators,
};

export default preview;
