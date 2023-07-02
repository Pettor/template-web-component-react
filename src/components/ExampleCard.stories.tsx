import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { ExampleCard } from "./ExampleCard";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

const meta = {
  component: ExampleCard,
  title: "Library/ExampleCard",
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof ExampleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel = {
  args: {
    label: "Hello, World!",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Hello, World!")).toBeInTheDocument();

    await userEvent.click(canvas.getByTestId("example-card__share-button"));
  },
} satisfies Story;
