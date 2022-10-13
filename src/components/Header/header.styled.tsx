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
    top: 0;
    z-index: 10;
`;
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
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
    height: 35%;
    margin-top: auto;
    @media only screen and (max-width: 1000px) {
        justify-content: space-between;
    }
`;

export const StyledNavLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: flex-end;
`;

type NavItemProps = {
    height: number;
};
export const NavItem = styled.div<NavItemProps>`
    height: 80%;
    width: 10vw;
    text-align: center;
    color: var(--black);
    font-size: calc(0.5em + 1vmin);
    line-height: 200%;
    font-weight: bold;
    border-bottom: 1px solid var(--beige);
    text-overflow: clip;
    border-bottom-width: ${props => `${props.height * 0.13}px`};
    transition: 0.2s all linear;
    border-radius: 10px 10px 0px 0px;

    &:hover {
        color: var(--white);
        background-color: var(--darkorange);
        height: 100%;
    }

    @media all and (max-width: 1000px) {
        width: 20vw;
        font-size: calc(0.6em + 1vmin);
    }
    @media all and (max-height: 630px) {
        line-height: 150%;
    }
`;
