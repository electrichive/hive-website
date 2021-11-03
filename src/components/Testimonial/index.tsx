import { Container, Image, Title, Content } from './testimonial.styled';

/**
 * Component for a standard testimonial module (has an image name and text prop)
 * is passed data from the testimonials module
 */
export default function Testimonial({
    img,
    title,
    content,
}: TestimonialProps): JSX.Element {
    return (
        <Container>
            <Image src={img} alt="Testimonial" />
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Container>
    );
}

/**
 * @param testimonials - list of props for a testimonial component (img, title,
 * content attributes)
 */
export function Testimonials(testimonials: TestimonialProps[]): JSX.Element {
    return (
        <Container>
            {testimonials.map((testimonial, i) => {
                <Testimonial key={i} {...testimonial} />;
            })}
        </Container>
    );
}
