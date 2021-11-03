import { Meta, Story } from '@storybook/react';
import { Testimonials } from './';

export default {
    component: Testimonials,
    title: 'Components/Testimonials',
} as Meta;

const Template: Story<TestimonialProps[]> = args => <Testimonials {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    testimonials: [
        {
            img: '/svg/twitter.svg',
            title: 'Title',
            content: 'Some content ...',
        },
        {
            img: '/svg/github.svg',
            title: 'Another Title',
            content: 'More content ...',
        },
        {
            img: '/svg/zulip.svg',
            title: 'Yet Another Title',
            content: 'I am asking you once again for your content ...',
        },
    ],
};
