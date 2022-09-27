import { graphql, useStaticQuery } from 'gatsby';

/**
 * Shuffles an array of items unique to the application. Uses a random
 * switching alorithm in O(n) time.
 * @param {(string || number)[]} items_ - Array of strings or numbers to be
 * shuffled (esp. 'proportionedOranges' for color names and 'viable...
 * Indices')
 * @returns a correctly pseudo-randomized array from the same array
 */
export function shuffleItems<T>(items_: T[]): T[] {
    const items = items_.slice();
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}

/**
 * React Hook to query gatsby graphql schema for testimonial data
 * @returns all testimonial data
 */
export function useTestimonials(): TestimonialsProps['testimonials'] {
    const testimonials: TestimonialsProps['testimonials'] = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        testimonials {
                            items {
                                img
                                author
                                content
                            }
                        }
                    }
                }
            }
        `
    ).site.siteMetadata.testimonials.items;

    return testimonials;
}

/**
 *
 */
export function pickRandomN<T>(items: T[], limit?: number): T[] {
    return shuffleItems(items).slice(0, limit ?? items.length);
}
