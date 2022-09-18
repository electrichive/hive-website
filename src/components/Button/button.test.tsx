import { render, screen } from '@testing-library/react';
import Button from './';
describe('button', () => {
    it('renders successfully', () => {
        render(<Button />);
        expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    });
    test.todo("has only two possible color themes ('light' = default)");

    test.todo('acts like a link when clicked');
});
