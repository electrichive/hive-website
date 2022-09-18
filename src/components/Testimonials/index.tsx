import Testimonial from 'components/Testimonial';
import { Container } from './testimonials.styled';

export default function Testimonials(props: TestimonialsProps): JSX.Element {
    return (
        <Container>
            <h2>What do others think?</h2>
            {props.testimonials.map((testimonial, i) => {
                <Testimonial
                    key={i}
                    direction={i % 2 === 0 ? 'left' : 'right'}
                    {...testimonial}
                />;
            })}
        </Container>
    );
}
