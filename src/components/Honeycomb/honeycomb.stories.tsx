import { Meta, Story } from '@storybook/react';
import Honeycomb from './';

export default {
    component: Honeycomb,
    title: 'Components/Honeycomb',
} as Meta;

const Template: Story<HoneycombProps> = args => <Honeycomb {...args} />;

export const DefaultWithAllSiteMetadataSocials = Template.bind({});
export const CustomSocials = Template.bind({});
CustomSocials.args = {
    socialProps: [
        {
            picUrl: '/svg/zulip.svg',
            socialUrl: 'https://electrichive.zulipchat.com',
        },
    ],
};
