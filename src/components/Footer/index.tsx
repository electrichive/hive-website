import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledFooter,
    FooterColumns,
    FooterContact,
    Copyright,
    Sitemap,
    SitemapItem,
    SitemapItemLink,
    SocialMediaLink,
} from './footer.styled';

/**
 * Component for a responsive footer (tabs and links along the bottom)
 * Icons may use font awesome integration
 * Sitemap to use graphql to pull in data
 */
export default function Footer({
    sitemapItems,
    contactInfo,
    socialLinks,
}: FooterProps): JSX.Element {
    // query site metadata for predefined items on the navbar
    const query = graphql`
        query {
            site {
                siteMetadata {
                    navbar {
                        items
                    }
                    contactInfo
                    honeycomb {
                        socials {
                            socialUrl
                        }
                    }
                }
            }
        }
    `;

    const {
        contactInfo: contactInfoMetadata,
        navbar: { items: sitemapMetadata },
        honeycomb: { socials: socialLinksMetadata },
    }: {
        contactInfo: ContactInfo;
        navbar: { items: NavbarItems };
        honeycomb: { socials: FooterProps['socialLinks'] };
    } = useStaticQuery(query).site.siteMetadata;

    const linksFormatted: [string, string][] = (
        socialLinks ?? socialLinksMetadata
    ).map(link => [
        link.match(/^https:\/\/(?:www\.)?(.)/).groups[1].toUpperCase(),
        link,
    ]);

    return (
        <StyledFooter>
            <FooterColumns>
                <Sitemap>
                    <p>
                        <strong>Sitemap</strong>
                    </p>
                    {(sitemapItems ?? sitemapMetadata).map(
                        ([label, link], i) => (
                            <SitemapItemLink key={i} to={link}>
                                <SitemapItem>{label}</SitemapItem>
                            </SitemapItemLink>
                        )
                    )}
                </Sitemap>
                <FooterContact>
                    <p>
                        <strong>Contact Us</strong>
                    </p>
                    {Object.entries(contactInfo ?? contactInfoMetadata).map(
                        ([key, value], i) => (
                            <p key={i}>
                                <strong>
                                    {key.at(0).toUpperCase() + key.slice(1)}:{' '}
                                </strong>
                                {value}
                            </p>
                        )
                    )}
                </FooterContact>
                <div>
                    <p>
                        <strong>Get Social</strong>
                    </p>
                    {linksFormatted.map(([label, link], i) => (
                        <SocialMediaLink key={i} href={link}>
                            <span>
                                <i>{label}</i>
                            </span>
                        </SocialMediaLink>
                    ))}
                </div>
                <img src={'/logo.svg'} />
            </FooterColumns>
            <Copyright>
                <p>
                    Copyright 2021 The Electric Hive | Developed by The Electric
                    Hive
                </p>
            </Copyright>
        </StyledFooter>
    );
}
