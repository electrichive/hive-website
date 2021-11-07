import { Meta, Story } from '@storybook/react';
import { Testimonials } from './';

export default {
    component: Testimonials,
    title: 'Components/Testimonials',
} as Meta;

const Template: Story = args => <Testimonials {...args} />;

export const Basic = Template.bind({});
