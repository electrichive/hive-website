import { StyledLink } from './button.styled';

/**
 * Component for a standard button (has url, theme and text prop)
 */
export default function Button(props: ButtonProps): JSX.Element {
    return <StyledLink to={props.url ?? '/'}>{props.text ?? ' '}</StyledLink>;
}
