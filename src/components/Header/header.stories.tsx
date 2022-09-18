import { Meta, Story } from '@storybook/react';
import Header from './';

export default {
    component: Header,
    title: 'Components/Header',
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Default = Template.bind({});
export const Custom = Template.bind({});
Custom.args = {
    navbarItems: [['Shrekt', '/404']],
};
