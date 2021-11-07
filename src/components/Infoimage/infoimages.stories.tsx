import { Meta, Story } from '@storybook/react';
import { InfoImages } from './';

export default {
    component: InfoImages,
    title: 'Components/InfoImages',
} as Meta;

const Template: Story = args => <InfoImages {...args} />;

export const Default = Template.bind({});
