import React from "react";

import ButtonKklob from "./ButtonKlob";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "KLOB UI/Components/Button",
  component: ButtonKklob,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ButtonKklob {...args}>klob Button</ButtonKklob>;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "medium",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "medium",
};
