import {
    Intro,
    Slide,
    Layout,
    Button,
    Heximage,
    Testimonials,
} from 'components';
import content from './about.json';
import { InfoBlockContainer, InfoBlockDiv } from './about.styled';

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
            <Heximage
                size="large"
                direction="right"
                theme="dark"
                img="/img/developer1.jpg"
            />
            <Testimonials testimonials={content.testimonials} />
        </Layout>
    );
}
