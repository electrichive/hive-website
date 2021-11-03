import { Meta, Story } from '@storybook/react';
import { HoneycombHex } from './';

export default {
    component: HoneycombHex,
    title: 'Components/HoneycombHex',
} as Meta;

const Template: Story<HoneycombHexProps> = args => <HoneycombHex {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    color: '#353535',
};
export const WithSocial = Template.bind({});
WithSocial.args = {
    color: '#f3f3f3',
    picUrl: '/svg/zulip.svg',
    socialUrl: 'https://electrichive.zulipchat.com',
};
