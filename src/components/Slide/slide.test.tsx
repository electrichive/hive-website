import { render, screen } from '@testing-library/react';
import Slide from './';

describe('Slide', () => {
    it('renders default successfully (change this test!)', () => {
        render(<Slide />);

        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('renders with a button', () => {
        render(<Slide button={true} />);

        expect(screen.queryByRole('link')).toBeInTheDocument();
        expect(screen.queryByRole('link')).toHaveAttribute(
            'href',
            '/mentorship'
        );
    });

    it('renders title and subtitle', () => {
        render(<Slide title="My Title" subtitle="My Subtitle" />);

        expect(screen.getByText('My Title')).toBeTruthy();
        expect(screen.getByText('My Subtitle')).toBeTruthy();
    });
});
