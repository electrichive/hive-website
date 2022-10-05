import {
    Container,
    Image,
    // Title,
    Content,
    HexContainer,
    ContentContainer,
    ImageBg,
    Author,
} from './testimonial.styled';

/**
 * Component for a standard testimonial module (has an image name and text prop)
 * is passed data from the testimonials module
 */
export default function Testimonial(props: TestimonialProps): JSX.Element {
    return (
        <Container>
            <HexContainer direction={props.direction}>
                <Image img={props.img} alt="Testimonial" />
                <ImageBg direction={props.direction} />
                {/* <Title>{props.title}</Title> */}
            </HexContainer>
            <ContentContainer>
                <Content>{props.content}</Content>
                <Author>{props.author}</Author>
            </ContentContainer>
        </Container>
    );
}
