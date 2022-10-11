import { Intro, Slide, Layout, Button, Testimonials } from 'components';
import { pickRandomN } from 'utils';
import { mapUrlsToProps } from 'src/utils';
import { useTestimonials } from 'src/graphql/queries/testimonials';
import { InfoBlockContainer, InfoBlockDiv } from './about.styled';
import { graphql, useStaticQuery } from 'gatsby';
import * as R from 'ramda';
import { useImageUrls } from 'src/graphql/queries/images';

function InfoBlock(props: InfoBlockProps): JSX.Element {
    return (
        <InfoBlockDiv theme={props.theme}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <Button {...props.button} />
        </InfoBlockDiv>
    );
}

export default function PageAbout(): JSX.Element {
    // query site metadata for page content
    const query = useStaticQuery(graphql`
        query About {
            aboutJson {
                infoblocks {
                    text
                    title
                }
                intro {
                    content
                    title
                }
            }
        }
    `);
    const intro = query.aboutJson.intro;
    const infoblocks = query.aboutJson.infoblocks;
    const MAX_TESTIMONIALS = 3;
    const images = useImageUrls();
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
            <Intro {...intro} />
            <InfoBlockContainer>
                <InfoBlock
                    theme="light"
                    title="Mentorship"
                    text="random text"
                    button={{
                        text: 'Sign Up',
                        url: '/mentorship',
                        theme: 'dark',
                    }}
                />
                <InfoBlock
                    title="Free Open Source Software (FOSS)"
                    text="random text"
                    theme="dark"
                    button={{
                        theme: 'light',
                        text: 'Contribute',
                        url: '/foss',
                    }}
                />
            </InfoBlockContainer>
            <Testimonials testimonials={testimonials} />
        </Layout>
    );
}
