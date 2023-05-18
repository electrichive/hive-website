import { render, screen } from '@testing-library/react';
import Testimonial from './';

describe('Testimonial', () => {
    it('renders with everything', () => {
        const props: TestimonialProps = {
            img: '/svg/zulip.svg',
            content: 'I am asking you once again for your content ...',
            direction: 'left',
            author: 'Me',
            theme: 'light',
        };
        render(<Testimonial {...props} />);

        expect(screen.queryByText(props.content)).toBeTruthy();
    });
});
