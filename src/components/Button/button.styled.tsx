import { Link } from 'gatsby';
import styled from 'styled-components';
import { lightThemeMixin, darkThemeMixin } from 'styles/mixins.styled';

export const StyledLink = styled(Link)`
    display: block;
    max-width: 200px;
    margin: 0 auto;
    padding: 8px;
    border: 2px solid var(--black);
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;

    &:hover {
        box-shadow: 2px 2px 5px var(--black);
    }

    ${props => (props.theme === 'light' ? lightThemeMixin : darkThemeMixin)}
`;
