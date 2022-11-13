import {
    Intro,
    Slide,
    Layout,
    Button,
    Testimonials,
    FadeInSection,
} from 'components';
import { pickRandomN } from 'utils';
import { mapUrlsToProps } from 'src/utils';
import { useTestimonials } from 'src/graphql/queries/testimonials';
import {
    InfoBlockDiv,
    InfoContent,
    InfoImage,
    InfoTitle,
    InfoDescription,
} from '../../styles/page-styles/about/about.styled';
import { graphql, useStaticQuery } from 'gatsby';
import * as R from 'ramda';
import { useImageUrls } from 'src/graphql/queries/images';

function InfoBlock(props: InfoBlockProps): JSX.Element {
    return (
        <InfoBlockDiv>
            <InfoContent theme={props.theme}>
                <InfoTitle theme={props.theme}>{props.title}</InfoTitle>
                <InfoDescription theme={props.theme}>
                    {props.text}
                </InfoDescription>
                <Button {...props.button} />
            </InfoContent>
            <InfoImage src={props.img}></InfoImage>
        </InfoBlockDiv>
    );
}

export default function PageAbout(): JSX.Element {
    // query site metadata for page content
    const query = useStaticQuery(graphql`
        query AboutQuery {
            allAboutJson {
                edges {
                    node {
                        infoblocks {
                            text
                            title
                            img
                        }
                        intro {
                            content
                            title
                        }
                    }
                }
            }
        }
    `);
    const intro = query.allAboutJson.edges[0].node.intro;
    const infoblocks = query.allAboutJson.edges[0].node.infoblocks;
    const MAX_TESTIMONIALS = 3;
    const images = useImageUrls();
    const updatedInfoblocks = mapUrlsToProps(images, infoblocks);
    const testimonials = R.compose(
        mapUrlsToProps(images),
        pickRandomN(MAX_TESTIMONIALS)
    )(useTestimonials());
    return (
        <Layout>
            <Slide
                title="About Us"
                subtitle="Subtitle Mission Statement"
                button={true}
            />
            <FadeInSection>
                <Intro {...intro} />
            </FadeInSection>
            <FadeInSection>
                <InfoBlock
                    theme="light"
                    title={updatedInfoblocks[0].title}
                    text={updatedInfoblocks[0].text}
                    img={updatedInfoblocks[0].img}
                    button={{
                        text: 'Sign Up',
                        url: '/mentorship',
                        theme: 'light',
                    }}
                />
            </FadeInSection>
            <FadeInSection>
                <InfoBlock
                    title={updatedInfoblocks[1].title}
                    text={updatedInfoblocks[1].text}
                    img={updatedInfoblocks[1].img}
                    theme="dark"
                    button={{
                        theme: 'dark',
                        text: 'Contribute',
                        url: '/foss',
                    }}
                />
            </FadeInSection>
            <FadeInSection>
                <Testimonials testimonials={testimonials} />
            </FadeInSection>
        </Layout>
    );
}
