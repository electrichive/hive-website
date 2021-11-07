import { render } from '@testing-library/react';
import gatsby from 'gatsby';
import Footer from '.';

describe('updateSize', () => {
    it('renders default site metadata through single graphql query call', () => {
        render(<Footer />);

        const querySpy = jest.spyOn(gatsby, 'useStaticQuery');
        expect(querySpy).toHaveBeenCalledTimes(1);
    });
});
