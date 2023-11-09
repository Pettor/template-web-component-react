import type { ReactElement } from "react";
import React from "react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { StoryFn, StoryContext } from "@storybook/react";
import { IntlProvider } from "react-intl";
import { reactIntl } from "./plugins/reactIntl";
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
  withLocaleProvider,
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

function withLocaleProvider(Story: StoryFn, context: StoryContext): ReactElement {
  const { locale } = context.globals;
  const { messages } = reactIntl;

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Story {...context} />
    </IntlProvider>
  );
}
