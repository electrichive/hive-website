import { Link } from 'gatsby';
import { Slider, Container, Title, Subtitle, Button } from './slide.styled';
import styled from 'styled-components';
/**
 * Component for a top slide (Hero image with main call to action)
 */

const StyledLink = styled(Link)`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    color: inherit;
`;

//Button specific to the slide so created here
function SlideButton(): JSX.Element {
    return (
        <Button>
            <StyledLink to="/mentorship">
                Join The <br /> Hive
            </StyledLink>
        </Button>
    );
}

export default function Slide(props: SlideProps): JSX.Element {
    return (
        <Slider>
            <Container>
                <Title>{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
                {props.button && <SlideButton />}
            </Container>
        </Slider>
    );
}
