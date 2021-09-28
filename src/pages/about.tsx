import Slide from 'components/Slide';
import Layout from 'components/Layout';
import Button from 'components/Button';
import styled from 'styled-components';
import { lightThemeMixin, darkThemeMixin } from 'styles/mixins.styled';

// type ButtonProps = Parameters<typeof Button>;

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

const IntroContainer = styled.div`
    margin-bottom: 80px;
    width: 70%;
    text-align: center;
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
    width: 100%auto;

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
            <IntroContainer>
                <h2>{introHeading}</h2>
                <p>{introDescription}</p>
            </IntroContainer>
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
        </Layout>
    );
}
