import {
    Intro,
    Slide,
    Layout,
    Button,
    Heximage,
    Testimonials,
} from 'components';
import content from './about.json';
import { pickRandomN } from 'utils';
import { mapUrlsToProps } from 'src/utils';
import { useTestimonials } from 'src/graphql/queries/testimonials';
import { InfoBlockContainer, InfoBlockDiv } from './about.styled';
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
            <Intro {...content.intro} />
            <InfoBlockContainer>
                <InfoBlock
                    theme="light"
                    title="Mentorship"
                    text="random text"
                    button={{
                        text: 'Sign Up',
                        url: '/mentorship',
                    }}
                />
                <InfoBlock
                    title="Free Open Source Software (FOSS)"
                    text="random text"
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
