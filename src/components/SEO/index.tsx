import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { memo, VFC } from 'react';

const SchemaOrg: VFC<SchemaOrgProps> = memo(
    ({
        url,
        title,
        description,
        image,
        organization,
        author,
        lastUpdated,
    }: SchemaOrgProps) => {
        const schema = [
            {
                '@context': 'http://schema.org',
                '@type': 'WebSite',
                url,
                name: title,
                alternateName: title,
            },
            {
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        item: {
                            '@id': url,
                            name: title,
                            image,
                        },
                    },
                ],
            },
            {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                url,
                name: title,
                alternateName: title,
                headline: title,
                image: {
                    '@type': 'ImageObject',
                    url: image,
                },
                description,
                author: {
                    '@type': 'Person',
                    name: author,
                },
                publisher: {
                    '@type': 'Organization',
                    url: organization.url,
                    logo: organization.logo,
                    name: organization.name,
                },
                mainEntityOfPage: {
                    '@type': 'WebSite',
                    '@id': url,
                },
                datePublished: lastUpdated,
            },
        ];
        return (
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Helmet>
        );
    }
);

/**
 * Maintains HTML <head> for purposes of Search Engine Optimization using
 * react-helmet
 */
export default function SEO(): JSX.Element {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    url
                    image
                    author
                    lastUpdated
                    organization {
                        name
                        url
                        logo
                    }
                    social {
                        twitter
                    }
                    stylesheets
                }
            }
        }
    `).site.siteMetadata;

    return (
        <>
            <Helmet>
                {/* General tags */}
                <title>{data.title}</title>
                <meta charSet="UTF-8" />
                <meta name="description" content={data.description} />
                <meta name="image" content={data.image} />
                <link rel="canonical" href={data.url} />

                {/* OpenGraph tags */}
                <meta property="og:url" content={data.url} />
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content={data.image} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={data.social.twitter} />
                <meta name="twitter:title" content={data.title} />
                <meta name="twitter:description" content={data.description} />
                <meta name="twitter:image" content={data.image} />

                {/* Stylesheets */}
                {data.stylesheets.map((url: string, i: number) => (
                    <link rel="stylesheet" href={url} key={i} />
                ))}
            </Helmet>
            <SchemaOrg
                url={data.url}
                title={data.title}
                image={data.image}
                author={data.author}
                lastUpdated={data.lastUpdated}
                description={data.description}
                organization={data.organization}
            />
        </>
    );
}
