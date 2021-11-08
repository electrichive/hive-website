import {
    Container,
    Content,
    ContentContainer,
    HexContainer,
    Image,
    ImageBg,
    Subtitle,
} from './infoimage.styled';

/**
 * InfoImage component with content and optional subtitle
 */
export default function InfoImage(props: InfoImageProps): JSX.Element {
    const subtitle = props.subtitle ?? '';
    return (
        <Container>
            <HexContainer direction={props.direction}>
                <Image img={props.img} />
                <ImageBg direction={props.direction} />
            </HexContainer>
            <ContentContainer>
                <Subtitle>{subtitle}</Subtitle>
                <Content>{props.content}</Content>
            </ContentContainer>
        </Container>
    );
}
