import { Intro, Slide, Layout, Button, Heximage } from 'components';
import { Testimonials } from 'src/components/Testimonial';
import { lightThemeMixin, darkThemeMixin } from 'styles/mixins.styled';
import styled from 'styled-components';

function InfoBlock(props: InfoBlockProps): JSX.Element {
    return (
        <InfoBlockDiv theme={props.theme}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <Button {...props.button} />
        </InfoBlockDiv>
    );
}

const InfoBlockDiv = styled.div<Partial<InfoBlockProps>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-height: 400px;
    padding: 20px;
    text-align: center;

    @media (max-width: 640px) {
        width: 100%;
    }

    ${props => (props.theme ? lightThemeMixin : darkThemeMixin)}
`;

const introHeading = 'Who Are The Electric Hive?';
const introDescription = `
    Nullam laoreet pulvinar gravida. Aliquam auctor dolor urna,
    at mattis tortor dignissim vel. Proin eu velit ultrices arcu
    mattis consequat sit amet sed diam. Fusce odio leo,
    tristique quis lobortis vel, commodo id turpis. Phasellus
    dapibus massa in auctor venenatis. Donec erat erat,
    scelerisque sit amet mauris eu, euismod mattis mi. Nulla
    facilisi. Mauris eleifend ultrices velit ac sodales. Etiam
    accumsan finibus leo id hendrerit.
`;

const InfoBlockContainer = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 640px) {
        display: block;
    }
`;

export default function PageAbout(): JSX.Element {
    return (
        <Layout>
            <Slide
                title="About Us"
                subtitle="Subtitle Mission Statement"
                button={true}
            />
            <Intro title={introHeading} content={introDescription} />
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
            <Testimonials />
        </Layout>
    );
}
