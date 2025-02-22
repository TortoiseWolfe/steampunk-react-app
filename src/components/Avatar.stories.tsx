// @ts-nocheck
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;
const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
export const Default = Template.bind({});
Default.args = { src: 'https://via.placeholder.com/150', alt: 'User Avatar', size: 80 };
