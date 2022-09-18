import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Contact from '.';

describe('updateSize', () => {
    it("is triggered by typing in textarea and calculated with the textarea's computed style", () => {
        render(<Contact />);

        const windowSpy = jest.spyOn(window, 'getComputedStyle');
        const setSize = jest.fn();
        const stateSpy = jest.spyOn(React, 'useState');

        stateSpy.mockImplementationOnce(() => [undefined, setSize]);
        const textbox = screen.getByPlaceholderText('Message');

        fireEvent.change(textbox, { target: { value: '0' } });

        expect(setSize).toBeTruthy();
        expect(windowSpy).toHaveBeenCalledWith(textbox);
    });
});
