import { Meta, Story } from '@storybook/react';
import Heximage from './';

export default {
    component: Heximage,
    title: 'Components/Heximage',
} as Meta;

const Template: Story<HeximageProps> = args => <Heximage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    img: '../../../static/img/hex-light.svg',
};
