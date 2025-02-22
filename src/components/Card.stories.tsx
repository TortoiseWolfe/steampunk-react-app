// @ts-nocheck
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';
export default {
  title: 'Components/Card',
  component: Card,
} as Meta;
const Template: Story<CardProps> = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = { 
  title: 'Steampunk Card', 
  content: 'This card uses steampunk styling with copper borders and an ivory background.', 
  footer: 'Footer text' 
};
