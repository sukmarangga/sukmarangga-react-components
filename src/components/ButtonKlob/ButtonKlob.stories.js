import React from "react";

import ButtonKlob from "./ButtonKlob";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "KLOB UI/Components/Button",
  component: ButtonKlob,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ButtonKlob {...args}>klob Button</ButtonKlob>;

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

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  disabled: false,
};

export const Disable = Template.bind({});
Disable.args = {
  disabled: true,
};
