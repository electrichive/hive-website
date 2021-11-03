import { Meta, Story } from '@storybook/react';
import Testimonial from './';

export default {
    component: Testimonial,
    title: 'Components/Testimonial',
} as Meta;

const Template: Story<TestimonialProps> = args => <Testimonial {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    img: '/svg/zulip.svg',
    title: 'Yet Another Title',
    content: 'I am asking you once again for your content ...',
};
