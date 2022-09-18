import Layout from 'components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const Article = styled.article``;
const Title = styled.h2``;
const Date = styled.p``;

export type SandboxPageProps = {
    data: GatsbyTypes.Query;
};
export default function SandboxPage({ data }: SandboxPageProps): JSX.Element {
    return (
        <Layout>
            {data.allMdx.nodes.map(node => (
                <Article key={node.id}>
                    <Title>
                        <Link to={`/sandbox/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </Title>
                    <Date>Posted: {node.frontmatter.date}</Date>
                </Article>
            ))}
        </Layout>
    );
}

export const query = graphql`
    query Sandbox {
        allMdx(sort: { fields: frontmatter___date, order: ASC }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                parent {
                    ... on File {
                        modifiedTime
                    }
                }
                id
                slug
            }
        }
    }
`;
