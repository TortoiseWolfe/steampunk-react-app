// @ts-nocheck
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;
const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="mb-4 px-4 py-2 bg-gold text-black rounded">
        Open Modal
      </button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {args.children}
      </Modal>
    </>
  );
};
export const Default = Template.bind({});
Default.args = { title: 'Steampunk Modal', children: 'This is the modal content with steampunk styling.' };
