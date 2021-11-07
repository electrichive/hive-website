import Data from './content.json';
import {
    Container,
    Content,
    ImagesContainer,
    ContentContainer,
    HexContainer,
    Image,
    ImageBg,
    Subtitle,
} from './infoimage.styled';

/**
 * Component for a standard infoimage module (has an image, subtitle and content prop)
 * is passed data from the infoimages module
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

/**
 * Component for a standard infoimage block module ()
 * retrieves data from JSON
 */
export function InfoImages(): JSX.Element {
    return (
        <ImagesContainer>
            {Data.infoimages.map((data, i) => (
                <InfoImage
                    key={i}
                    direction={i % 2 === 0 ? 'left' : 'right'}
                    {...Data.infoimages[i]}
                />
            ))}
        </ImagesContainer>
    );
}
