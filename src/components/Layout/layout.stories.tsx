import { Meta, Story } from '@storybook/react';
import Layout, { LayoutProps } from '.';
import Button from 'components/Button';

export default {
    component: Layout,
    title: 'Components/Layout',
} as Meta;

const Template: Story<LayoutProps> = args => <Layout {...args} />;

export const Blank = Template.bind({});
export const SingleItem = Template.bind({});
SingleItem.args = {
    children: <Button />,
};
