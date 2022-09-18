import { Meta, Story } from '@storybook/react';
import InfoBox from './';

export default {
    component: InfoBox,
    title: 'Components/InfoBox',
} as Meta;

const Template: Story<InfoBoxProps> = args => <InfoBox {...args} />;

const fillerArgs = {
    title: 'Title',
    description: 'Description',
    content: 'Content',
};

export const Dark = Template.bind({});
Dark.args = {
    theme: 'dark',
    ...fillerArgs,
};

export const Light = Template.bind({});
Light.args = {
    theme: 'light',
    ...fillerArgs,
};
