import { Meta, Story } from '@storybook/react';
import Parallax from '.';

export default {
    component: Parallax,
    title: 'Components/Parallax',
} as Meta;

const Template: Story<ParallaxProps> = args => <Parallax {...args} />;

export const Blank = Template.bind({});
Blank.args = {
    title: 'Title',
    img: '',
    url: '',
    text: 'Text ...',
};
