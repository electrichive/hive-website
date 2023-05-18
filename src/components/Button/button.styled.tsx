import { Link } from 'gatsby';
import styled from 'styled-components';
import { lightThemeMixin, darkThemeMixin } from 'styles/mixins.styled';

export const StyledLink = styled(Link)<{
    $direction?: 'center' | 'left' | 'right';
}>`
    display: flex;
    max-width: 200px;
    min-width: 150px;
    padding: 8px;
    border: 2px solid var(--black);
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;

    &:hover {
        box-shadow: 2px 2px 5px var(--black);
    }
    justify-content: ${props => props.$direction};
    ${props => (props.theme === 'light' ? lightThemeMixin : darkThemeMixin)}
`;
