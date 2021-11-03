import { Meta, Story } from '@storybook/react';
import SEO from './';

export default {
    component: SEO,
    title: 'Components/SEO',
} as Meta;

const Template: Story = args => <SEO {...args} />;

export const Default = Template.bind({});
Default.args = {};
