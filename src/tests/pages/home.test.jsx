import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'pages/index';

describe('home page', () => {
    it('renders accessible emoji in title', () => {
        render(<Home />);
        expect(screen.getByText(/^The Main Page/)).toHaveTextContent('😅');
        expect(screen.getByText('😅')).toHaveAttribute('role', 'img');
        expect(screen.getByText('😅')).toHaveAttribute('aria-label');
    });
});
