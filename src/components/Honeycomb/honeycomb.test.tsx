import { render, screen } from '@testing-library/react';
import Honeycomb from './';

describe('Honeycomb', () => {
    it('renders no links if passed empty array ', () => {
        render(<Honeycomb socialProps={[]} />);

        expect(screen.queryAllByRole('link')).toHaveLength(0);
    });

    it('renders all site metadata socials by default as SVG links', () => {
        render(<Honeycomb />);

        const defaultSiteMetadata = [
            {
                picUrl: '/svg/zulip.svg',
                socialUrl: 'https://electrichive.zulipchat.com',
            },
            {
                picUrl: '/svg/twitter.svg',
                socialUrl: 'https://twitter.com',
            },
            {
                picUrl: '/svg/facebook.svg',
                socialUrl: 'https://www.facebook.com',
            },
            {
                picUrl: '/svg/github.svg',
                socialUrl: 'https://github.com/electrichive',
            },
            {
                picUrl: '/svg/linkedin.svg',
                socialUrl: 'https://www.linkedin.com',
            },
        ];

        const honeycombLinks = screen.getAllByRole('link');
        honeycombLinks.forEach((link, i) => {
            expect(link).toHaveAttribute(
                'href',
                defaultSiteMetadata[i].socialUrl
            );
            expect(link.firstElementChild).toHaveAttribute(
                'src',
                defaultSiteMetadata[i].picUrl
            );
        });
    });
});
