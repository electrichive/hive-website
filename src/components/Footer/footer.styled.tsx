import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
    background-color: var(--black);
    color: var(--white);
`;

export const FooterColumns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const FooterContact = styled.div``;

export const Copyright = styled.div`
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const Sitemap = styled.div``;

export const SitemapItem = styled.p`
    color: var(--white);
`;

export const SocialMediaLink = styled.a`
    text-decoration: none;
    color: var(--white);
`;

export const SocialMediaLinkImg = styled.img`
    width: 50px;
    height: 50px;
    padding: 10px;
`;

export const FooterLogo = styled.img`
    margin-top: 20px;
    width: 200px;
    height: 200px;
`;

export const SitemapItemLink = styled(Link)`
    text-decoration: 'none';
`;
