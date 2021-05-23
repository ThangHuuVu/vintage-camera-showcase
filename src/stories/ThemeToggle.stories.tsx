import ThemeToggle from "@/components/ThemeToggle";
import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";

type SThemeToggle = Story<ComponentProps<typeof ThemeToggle>>;
export default {
  title: "Header/ThemeToggle",
  component: ThemeToggle,
};

const Template: SThemeToggle = args => <ThemeToggle {...args} />;

export const ThemeToggleStory = Template.bind({});
ThemeToggleStory.args = {};
