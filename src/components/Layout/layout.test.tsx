import { render, screen } from '@testing-library/react';
import Layout from './';

describe('Layout', () => {
    it('renders default successfully (change this test!)', () => {
        render(
            <Layout>
                <p>TEST</p>
            </Layout>
        );

        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test.todo('insert meaningful test here');
});
