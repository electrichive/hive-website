import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

const Title = styled.h2``;
const Date = styled.p``;
const Credit = styled.p``;
const CreditLink = styled.a``;

export type MdxPageProps = {
    data: GatsbyTypes.PostQuery;
};
export default function MdxPage({ data }: MdxPageProps): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const heroImage = getImage(data.mdx.frontmatter.hero_image);
    return (
        <Layout>
            <Title>{data.mdx.frontmatter.title}</Title>
            <Date>{data.mdx.frontmatter.date}</Date>
            <GatsbyImage
                image={heroImage}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
            <Credit>
                <CreditLink href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </CreditLink>
            </Credit>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    );
}

export const query = graphql`
    query Post($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                hero_image {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP]
                        )
                    }
                }
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                title
                date(formatString: "MMMM D, YYYY")
            }
            body
            id
        }
    }
`;
