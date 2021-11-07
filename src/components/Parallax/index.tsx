import Button from 'components/Button/';
import { Container, Title } from './parallax.styled';

/**
 * Parallax view
 * Has an optional Title element
 */
export default function Parallax(props: ParallaxProps): JSX.Element {
    return (
        <Container img={props.img}>
            {!!props.title && <Title>{props.title}</Title>}
            <Button url={props.url} text={props.text} theme="light" />
        </Container>
    );
}
