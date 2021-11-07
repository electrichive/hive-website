import { Meta, Story } from '@storybook/react';
import InfoImage from './';

export default {
    component: InfoImage,
    title: 'Components/InfoImage',
} as Meta;

const defaultArgs: InfoImageProps = {
    img: '/img/hex-light.svg',
    direction: 'left',
    content: 'Content',
};

const Template: Story<InfoImageProps> = args => (
    <InfoImage {...defaultArgs} {...args} />
);

export const Left = Template.bind({});
export const Right = Template.bind({});
Right.args = {
    direction: 'right',
};
export const Subtitle = Template.bind({});
Subtitle.args = {
    subtitle: 'Subtitle',
};
