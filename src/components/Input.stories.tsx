// @ts-nocheck
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';
export default {
  title: 'Components/Input',
  component: Input,
} as Meta;
const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = { label: 'Steampunk Input', placeholder: 'Enter your name' };
