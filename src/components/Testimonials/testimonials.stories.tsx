import { Meta, Story } from '@storybook/react';
import Testimonials from 'components/Testimonials';

export default {
    component: Testimonials,
    title: 'Components/Testimonials',
} as Meta;

const Template: Story<TestimonialsProps> = args => <Testimonials {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    testimonials: [
        {
            img: '/img/svg/hex-light.svg',
            content: 'Content ...',
            author: 'Tristan',
        },
    ],
};
