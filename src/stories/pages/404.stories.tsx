import { Meta, Story } from '@storybook/react';
import Page404, { Page404Props } from 'pages/404';

export default {
    component: Page404,
    title: 'Components/Page404',
} as Meta;

const Template: Story<Page404Props> = args => <Page404 {...args} />;

export const Default = Template.bind({});
export const WithButton = Template.bind({});
WithButton.args = {
    button: true,
};
