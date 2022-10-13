import { Layout, Slide, Intro, Testimonials, Parallax } from 'components';
import * as R from 'ramda';
import { pickRandomN, mapUrlsToProps, findImagePath } from 'utils';
import { useTestimonials } from 'src/graphql/queries/testimonials';
import { useImageUrls } from 'src/graphql/queries/images';
import { graphql, useStaticQuery } from 'gatsby';

export default function PageFoss(): JSX.Element {
    // query site metadata for page content
    const query = useStaticQuery<GatsbyTypes.FossQueryQuery>(graphql`
        query FossQuery {
            allFossJson {
                edges {
                    node {
                        intro {
                            content
                            title
                        }
                    }
                }
            }
        }
    `);
    const images = useImageUrls();
    const MAX_TESTIMONIALS = 3;
    const testimonials = R.compose(
        mapUrlsToProps(images),
        pickRandomN(MAX_TESTIMONIALS)
    )(useTestimonials());
    const intro = query.allFossJson.edges[0].node.intro;
    return (
        <Layout>
            <Slide
                title="Free Open Source Software"
                subtitle="Subtitle Mission Statement"
                button={false}
            />
            <Intro {...intro} />
            <Testimonials testimonials={testimonials} />
            <Parallax
                url="./resources"
                text="View Our Resources"
                img={findImagePath(images, 'stock-code1.jpg')}
            />
        </Layout>
    );
}
