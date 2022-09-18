---
to: <%= absPath %>/<%= h.changeCase.lower(component_name) %>.stories.tsx
---

import { Meta, Story } from '@storybook/react';
import <%= component_name %> from './';

export default {
    component: <%= component_name %>,
    title: 'Components/<%= component_name %>'
} as Meta;

const Template: Story<<%= component_name %>Props> = args => <<%= component_name %> {...args} />;

export const Default = Template.bind({});
Default.args = {

};