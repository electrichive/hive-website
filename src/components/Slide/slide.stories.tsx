import { Meta, Story } from '@storybook/react';
import Slide from '.';

export default {
    component: Slide,
    title: 'Components/Slide',
} as Meta;

const Template: Story<SlideProps> = args => <Slide {...args} />;

export const Default = Template.bind({});
export const WithButton = Template.bind({});
WithButton.args = {
    button: true,
};
