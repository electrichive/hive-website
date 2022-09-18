import { Container } from './intro.styled';

/**
 * Component for a introduction container module (has an title & content prop)
 */
export default function Intro(props: IntroProps): JSX.Element {
    return (
        <Container>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </Container>
    );
}
