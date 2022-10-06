import {
    Container,
    Content,
    HexContainer,
    ContentContainer,
    Author,
} from './testimonial.styled';
import { Heximage } from 'components';

/**
 * Component for a standard testimonial module (has an image name and text prop)
 * is passed data from the testimonials module
 */
export default function Testimonial(props: TestimonialProps): JSX.Element {
    return (
        <Container>
            <HexContainer direction={props.direction}>
                <Heximage
                    direction={props.direction}
                    img={props.img}
                    theme={props.theme}
                />
            </HexContainer>

            <ContentContainer>
                <Content>{props.content}</Content>
                <Author>{props.author}</Author>
            </ContentContainer>
        </Container>
    );
}
