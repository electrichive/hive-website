import { Meta, Story } from '@storybook/react';
import Button from './';

export default {
    component: Button,
    title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
export const Light = Template.bind({});
Light.args = {
    theme: 'light',
};
