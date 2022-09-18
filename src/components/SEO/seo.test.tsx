import { render, screen } from '@testing-library/react';
import SEO from '.';

describe('SEO', () => {
    it('renders default successfully (change this test!)', () => {
        render(<SEO />);

        // Uses React Helmet which pulls everything out of body into head
        expect(screen.queryByTitle('Electric Hive')).not.toBeInTheDocument();
    });

    test.todo('insert meaningful test here');
});
