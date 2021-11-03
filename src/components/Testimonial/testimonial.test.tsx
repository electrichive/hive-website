import { render, screen } from '@testing-library/react';
import Testimonial from './';

describe('Testimonial', () => {
    it('renders with everything', () => {
        const props: TestimonialProps = {
            img: '/svg/zulip.svg',
            title: 'Yet Another Title',
            content: 'I am asking you once again for your content ...',
        };
        render(<Testimonial {...props} />);

        expect(screen.getByRole('img')).toHaveAttribute('src', props.img);
        expect(screen.getByRole('heading')).toHaveTextContent(props.title);
        expect(screen.queryByText(props.content)).toBeTruthy();
    });
});
