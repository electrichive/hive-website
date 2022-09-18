import { render, screen } from '@testing-library/react';
import Header from './';

describe('Header', () => {
    it('renders default successfully (change this test!)', () => {
        render(<Header />);

        const linkMap = {
            '': '/',
            'About Us': '/about',
            FOSS: '/foss',
            Mentorship: '/mentorship',
            Contact: '/contact',
        };

        expect(screen.getAllByRole('link')).toHaveLength(5);
        screen
            .getAllByRole('link')
            .splice(1)
            .forEach((a: HTMLElement) => {
                expect(a).toHaveAttribute('href', linkMap[a.textContent]);
            });
    });

    test.todo('insert meaningful test here');
});
