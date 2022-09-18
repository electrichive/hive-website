---
to: <%= absPath %>/<%= h.changeCase.lower(component_name) %>.test.tsx
---

import { render, screen } from '@testing-library/react';
import <%= component_name %> from './';

describe('<%= component_name %>', () => {
    it('renders default successfully (change this test!)', () => {
        render(<<%= component_name %> />);
        expect(screen.getByText('<%= component_name %>')).toBeTruthy();
    });

    test.todo('insert meaningful test here');
});
