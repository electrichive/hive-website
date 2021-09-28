import React from 'react';
import Contact from './contact';

export default {
    component: Contact,
    title: 'Components/Contact',
};

const Template = args => <Contact {...args} />;

export const Default = Template.bind({});
export const OtherTitle = Template.bind({});
OtherTitle.args = {
    heading: 'Contact',
};
