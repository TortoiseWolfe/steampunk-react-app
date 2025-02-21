// @ts-nocheck
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';
export default {
  title: 'Components/Button',
  component: Button,
} as Meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = { label: 'Primary Button' };
export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary Button', className: 'bg-bronze hover:bg-bronze-dark' };
