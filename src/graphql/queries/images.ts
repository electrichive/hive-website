import { graphql, useStaticQuery } from 'gatsby';
import { stripNodes } from 'src/utils';

/**
 * React Hook to query gatsby graphql schema for image urls
 * @returns all image urls
 */
export function useImageUrls(): ImageUrlsProps[] {
    const query = useStaticQuery(
        graphql`
            query ImageQuery {
                allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                    edges {
                        node {
                            publicURL
                        }
                    }
                }
            }
        `
    ).allFile.edges;
    return stripNodes(query);
}
