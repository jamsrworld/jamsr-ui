import { Route } from "next";

export const sidebarItems: {
  heading: string;
  tags?: string[];
  items: { heading: string; path: Route }[];
}[] = [
  {
    heading: "Getting Started",
    items: [
      {
        heading: "Introduction",
        path: "/introduction",
      },
      {
        heading: "Installation",
        path: "/installation",
      },
      {
        heading: "Theme",
        path: "/theme",
      },
    ],
  },
  {
    heading: "Installation",
    items: [
      {
        heading: "Next.js",
        path: "/installation/next",
      },
      {
        heading: "Vite",
        path: "/installation/vite",
      },
      {
        heading: "Remix",
        path: "/installation/remix",
      },
      {
        heading: "Astro",
        path: "/installation/astro",
      },
      {
        heading: "Gatsby",
        path: "/installation/gatsby",
      },
    ],
  },
  {
    heading: "Components",
    items: [
      {
        heading: "Accordion",
        path: "/components/accordion",
      },
      {
        heading: "Alert",
        path: "/components/alert",
      },
      {
        heading: "Autocomplete",
        path: "/components/autocomplete",
      },
      {
        heading: "Avatar",
        path: "/components/avatar",
      },
      {
        heading: "Button",
        path: "/components/button",
      },
      {
        heading: "Card",
        path: "/components/card",
      },
      {
        heading: "Checkbox",
        path: "/components/checkbox",
      },
      {
        heading: "Chip",
        path: "/components/chip",
      },

      {
        heading: "Circular Progress",
        path: "/components/circular-progress",
      },
      {
        heading: "Confirmation",
        path: "/components/confirmation",
      },
      {
        heading: "Copy To Clipboard",
        path: "/components/copy-to-clipboard",
      },
      {
        heading: "Collapsible",
        path: "/components/collapsible",
      },
      {
        heading: "Data Table",
        path: "/components/data-table",
      },
      {
        heading: "Dialog",
        path: "/components/dialog",
      },
      {
        heading: "Divider",
        path: "/components/divider",
      },
      {
        heading: "Drag and Drop",
        path: "/components/drag-and-drop",
      },
      {
        heading: "Drawer",
        path: "/components/drawer",
      },
      {
        heading: "Editor",
        path: "/components/editor",
      },
      {
        heading: "File Upload Multi",
        path: "/components/file-upload-multi",
      },
      {
        heading: "File Upload Single",
        path: "/components/file-upload-single",
      },
      {
        heading: "Header",
        path: "/components/header",
      },
      {
        heading: "Icon Button",
        path: "/components/icon-button",
      },
      {
        heading: "Input",
        path: "/components/input",
      },
      {
        heading: "Kbd",
        path: "/components/kbd",
      },
      {
        heading: "Linear Progress",
        path: "/components/linear-progress",
      },
      {
        heading: "Link",
        path: "/components/link",
      },
      {
        heading: "Menu",
        path: "/components/menu",
      },
      {
        heading: "Otp Input",
        path: "/components/otp-input",
      },
      {
        heading: "Popover",
        path: "/components/popover",
      },
      {
        heading: "Radio",
        path: "/components/radio",
      },
      {
        heading: "Rating",
        path: "/components/rating",
      },
      {
        heading: "React Hook Form",
        path: "/components/react-hook-form",
      },
      {
        heading: "Ripple",
        path: "/components/ripple",
      },
      {
        heading: "Select",
        path: "/components/select",
      },
      {
        heading: "Sidebar",
        path: "/components/sidebar",
      },
      {
        heading: "Skeleton",
        path: "/components/skeleton",
      },
      {
        heading: "Switch",
        path: "/components/switch",
      },
      {
        heading: "Tabs",
        path: "/components/tabs",
      },
      {
        heading: "Table",
        path: "/components/table",
      },
      {
        heading: "Tags Input",
        path: "/components/tags-input",
      },
      {
        heading: "Textarea",
        path: "/components/textarea",
      },
      {
        heading: "Toast",
        path: "/components/toast",
      },
      {
        heading: "Tooltip",
        path: "/components/tooltip",
      },
      {
        heading: "Text",
        path: "/components/text",
      },
    ],
  },
  {
    heading: "Charts",
    tags: ["Development"],
    items: [
      {
        heading: "Area Chart",
        path: "/components/charts/area-chart",
      },
      {
        heading: "Bar Chart",
        path: "/components/charts/bar-chart",
      },
      {
        heading: "Line Chart",
        path: "/components/charts/line-chart",
      },
      {
        heading: "Pie Chart",
        path: "/components/charts/pie-chart",
      },
      {
        heading: "Radial Bar Chart",
        path: "/components/charts/radial-bar-chart",
      },
    ],
  },
  {
    heading: "Helpers Components",
    items: [
      {
        heading: "Repeater",
        path: "/components/repeater",
      },
    ],
  },
  {
    heading: "Development",
    items: [
      {
        heading: "Stepper",
        path: "/components/stepper",
      },
    ],
  },
  {
    heading: "Planned",
    items: [
      {
        heading: "Pagination",
        path: "/components/pagination",
      },
      {
        heading: "Slider",
        path: "/components/slider",
      },
      {
        heading: "Breadcrumbs",
        path: "/components/breadcrumbs",
      },
      {
        heading: "Date Picker",
        path: "/components/date-picker",
      },
      {
        heading: "Number Input",
        path: "/components/number-input",
      },
      {
        heading: "Empty Content",
        path: "/components/empty-content",
      },
    ],
  },
  {
    heading: "NextJs",
    items: [
      {
        heading: "Avatar",
        path: "/components/next/avatar",
      },
      {
        heading: "Link",
        path: "/components/next/link",
      },
    ],
  },
  // {
  //   heading: "Hooks",
  //   items: [
  //     {
  //       heading: "useDisclosure",
  //       path: "/hooks/use-disclosure",
  //     },
  //     {
  //       heading: "useHover",
  //       path: "/hooks/use-hover",
  //     },
  //     {
  //       heading: "useFocus",
  //       path: "/hooks/use-focus",
  //     },
  //     {
  //       heading: "useFocusVisible",
  //       path: "/hooks/use-focus-visible",
  //     },
  //     {
  //       heading: "useKeypress",
  //       path: "/hooks/use-keypress",
  //     },
  //     {
  //       heading: "usePress",
  //       path: "/hooks/use-press",
  //     },
  //     {
  //       heading: "useEventListener",
  //       path: "/hooks/use-event-listener",
  //     },
  //   ],
  // },
];
