import { useStaticQuery, graphql } from 'gatsby';
import { useImageUrls } from 'src/graphql/queries/images';
import { mapUrlsToProps } from 'src/utils';
import {
    StyledFooter,
    FooterColumns,
    FooterContact,
    Copyright,
    Sitemap,
    SitemapItem,
    SitemapItemLink,
    SocialMediaLink,
    SocialMediaLinkImg,
    FooterLogo,
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
                    contactInfo {
                        telephone
                        address
                    }
                    honeycomb {
                        socials {
                            socialUrl
                            img
                        }
                    }
                }
            }
        }
    `;

    const images = useImageUrls();
    const {
        contactInfo: contactInfoMetadata,
        navbar: { items: sitemapMetadata },
        honeycomb: { socials: socialLinksMetadata },
    }: {
        contactInfo: ContactInfo;
        navbar: { items: NavbarItems };
        honeycomb: { socials: FooterProps['socialLinks'] };
    } = useStaticQuery(query).site.siteMetadata;

    const formattedSocials = mapUrlsToProps(images, socialLinksMetadata);
    const logo = mapUrlsToProps(images, { img: 'favicon.svg' });
    const linksFormatted: [string, string][] = (
        socialLinks ?? formattedSocials
    ).map(link => [link.socialUrl, link.img]);

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
                    {linksFormatted.map(([link, img], i) => (
                        <SocialMediaLink key={i} href={link}>
                            <span>
                                <SocialMediaLinkImg
                                    src={img}
                                ></SocialMediaLinkImg>
                            </span>
                        </SocialMediaLink>
                    ))}
                </div>
                <FooterLogo src={logo.img}></FooterLogo>
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
