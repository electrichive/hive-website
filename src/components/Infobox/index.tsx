/**
 * Component for a standard info box module (has a title, desc and content(optional))
 */

import { Content, Description, InfoBlock, Title } from './infobox.styled';

export default function InfoBox(props: InfoBoxProps): JSX.Element {
    return (
        <InfoBlock theme={props.theme}>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Content>{props.content}</Content>
        </InfoBlock>
    );
}
