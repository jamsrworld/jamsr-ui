import type { Preview } from "@storybook/react";
import "../src/style.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // docs: {
    //   source: {
    //     type: "code",
    //   },
    // },
  },
  tags: ["autodocs"],
};

export default preview;
