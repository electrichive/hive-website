import {
    Flipbox,
    FlipboxInner,
    FlipboxFront,
    FlipboxBack,
    Subtitle,
    Content,
} from './flipbox.styled';

/**
 * Flipbox component with content and optional subtitle
 */
export default function FlipBox(props: FlipboxProps): JSX.Element {
    const subtitle = props.subtitle ?? '';
    return (
        <Flipbox>
            <FlipboxInner>
                <FlipboxFront img={props.img}>
                    <Subtitle>{subtitle}</Subtitle>
                </FlipboxFront>
                <FlipboxBack theme={props.theme}>
                    <Subtitle>{subtitle}</Subtitle>
                    <Content>{props.content}</Content>
                </FlipboxBack>
            </FlipboxInner>
        </Flipbox>
    );
}
