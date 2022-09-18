import { Meta, Story } from '@storybook/react';
import Contact from './';

export default {
    component: Contact,
    title: 'Components/Contact',
} as Meta;

const Template: Story<ContactProps> = args => <Contact {...args} />;

export const Default = Template.bind({});
export const Succinct = Template.bind({});
Succinct.args = {
    heading: 'Contact',
};
