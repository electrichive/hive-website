import { graphql, useStaticQuery } from 'gatsby';
import { stripNodes } from 'src/utils';
/**
 * React Hook to query gatsby graphql schema for testimonial data
 * @returns all testimonial data
 */
export function useTestimonials(): TestimonialsProps['testimonials'] {
    return stripNodes(
        useStaticQuery<GatsbyTypes.TestimonialQueryQuery>(
            graphql`
                query TestimonialQuery {
                    allTestimonialsJson {
                        edges {
                            node {
                                content
                                img
                                author
                            }
                        }
                    }
                }
            `
        ).allTestimonialsJson.edges
    );
}
