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

export const SitemapItemLink = styled(Link)`
    text-decoration: 'none';
`;
