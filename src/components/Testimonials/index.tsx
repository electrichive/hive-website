import Testimonial from 'components/Testimonial';
import { Container } from './testimonials.styled';

export default function Testimonials(props: TestimonialsProps): JSX.Element {
    console.log('WHYHELLOTHERE', props.testimonials);
    return (
        <Container>
            <h2>What do others think?</h2>
            {props.testimonials.map((testimonial, i) => {
                return (
                    <Testimonial
                        key={i}
                        direction={i % 2 === 0 ? 'left' : 'right'}
                        {...testimonial}
                    />
                );
            })}
        </Container>
    );
}
