import {
    Container,
    Content,
    ContentContainer,
    HexContainer,
    Image,
    ImageBg,
    Subtitle,
} from './infoimage.styled';
import { Heximage } from 'components';

/**
 * InfoImage component with content and optional subtitle
 */
export default function InfoImage(props: InfoImageProps): JSX.Element {
    const subtitle = props.subtitle ?? '';
    return (
        <Container>
            <HexContainer direction={props.direction}>
                <Heximage
                    direction={props.direction}
                    img={props.img}
                    theme={props.direction == 'left' ? 'light' : 'dark'}
                    size="large"
                />
            </HexContainer>
            <ContentContainer>
                <Subtitle>{subtitle}</Subtitle>
                <Content>{props.content}</Content>
            </ContentContainer>
        </Container>
    );
}
