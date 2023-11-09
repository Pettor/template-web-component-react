import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/main.css";

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Library", "Design System"],
    },
  },
};

export const globalTypes = {
  locale: {
    title: "Locale",
    description: "Formatjs locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      dynamicTitle: true,
      items: [
        // Add locales here
        { value: "en", title: "English" },
      ],
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];
