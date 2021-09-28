import { useMeasure } from 'react-use';
import { useStaticQuery, graphql } from 'gatsby';
import backdrop from 'static/images/backdrop.svg';
import {
    Background,
    Box,
    Backdrop,
    StyledLogoLink,
    Logo,
    NavBar,
    NavItem,
    StyledNavLink,
} from './header.styled';

/**
 * Component for a responsive header (logo & tabs along the bottom)
 * @returns JSXElement
 */

export default function Header({ navbarItems }: HeaderProps): JSX.Element {
    // query site metadata for predefined items on the navbar
    const query = graphql`
        query {
            site {
                siteMetadata {
                    navbar {
                        items
                    }
                    author
                }
            }
        }
    `;

    // Data passed as props will override the GraphQL query
    const queriedItems = useStaticQuery(query).site.siteMetadata.navbar.items;
    const items = navbarItems ?? queriedItems;

    // saves the height of the navbar for dynamic UI calculations
    const [ref, { height }] = useMeasure();

    return (
        <Background>
            <Box>
                <Backdrop>
                    <StyledLogoLink to="/">
                        <Logo src={backdrop} alt="logo" />
                    </StyledLogoLink>
                </Backdrop>
                <NavBar ref={ref}>
                    {/* Loop through `data` to generate navbar items */}
                    {items.map(([label, link], i: number) => (
                        <StyledNavLink key={i} to={link}>
                            <NavItem height={height}>{label}</NavItem>
                        </StyledNavLink>
                    ))}
                </NavBar>
            </Box>
        </Background>
    );
}
