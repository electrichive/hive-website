import { Meta, Story } from '@storybook/react';
import Footer from './';

export default {
    component: Footer,
    title: 'Components/Footer',
} as Meta;

const Template: Story<FooterProps> = args => <Footer {...args} />;

export const DefaultWithMetadata = Template.bind({});
export const Override = Template.bind({});
Override.args = {
    sitemapItems: [
        ['Random', '/random'],
        ['Test', '/test'],
    ],
    contactInfo: {
        email: 'test@123.org',
        telephone: '012 345 1234',
        address: '456 Main St, Ytic, TS 53278',
    },
    socialLinks: ['https://test.com', 'https://www.anothertest.com'],
};
