import { Link } from 'gatsby';
import styled from 'styled-components';

export const Background = styled.div`
    background-color: var(--white);
    height: var(--header-height);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px 0 var(--black);
    position: fixed;
    top: 0;
    z-index: 10;
`;
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;
export const Backdrop = styled.div`
    padding-top: var(--logo-padding);
    height: 63%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StyledLogoLink = styled(Link)`
    height: calc(100% - var(--logo-padding));
`;
export const Logo = styled.img`
    height: 100%;
`;
export const NavBar = styled.div`
    display: flex;
    gap: 9px;
    height: 27%;
    margin-top: auto;
`;

export const StyledNavLink = styled(Link)`
    text-decoration: none;
`;

type NavItemProps = {
    height: number;
};
export const NavItem = styled.div<NavItemProps>`
    height: 100%;
    width: 10vw;
    text-align: center;
    color: var(--black);
    font-size: calc(0.5em + 1vmin);
    line-height: 200%;
    font-weight: bold;
    border-bottom: 1px solid var(--beige);
    text-overflow: clip;
    border-bottom-width: ${props => `${props.height * 0.13}px`};

    @media all and (max-width: 750px) {
        width: 15vw;
    }
    @media all and (max-height: 630px) {
        line-height: 150%;
    }
`;
