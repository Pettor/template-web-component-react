import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Component } from "./Component";
import CommonDecorator from "./stories/decorators/CommonDecorator";

const meta = {
  component: Component,
  title: "Library/Component",
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const WithLabel = {
  args: {
    label: "Hello, World!",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Hello, World!")).toBeInTheDocument();
  },
} satisfies Story;
