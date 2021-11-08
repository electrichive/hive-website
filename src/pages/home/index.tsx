import { Infoimage } from 'components';
import { Infobox, Layout, Parallax, Slide } from 'components';
import { ImagesContainer } from './home.styled';
import content from './home.json';

/**
 * Local component for displaying InfoImage components
 */
function InfoImages(props: InfoImagesProps): JSX.Element {
    return (
        <ImagesContainer>
            {props.infoimages.map((infoimage, i) => (
                <Infoimage
                    key={i}
                    direction={i % 2 === 0 ? 'left' : 'right'}
                    {...infoimage}
                />
            ))}
        </ImagesContainer>
    );
}

export default function PageHome(): JSX.Element {
    return (
        <Layout>
            <Slide
                title="The Electric Hive"
                subtitle="Subtitle Mission Statement"
                button={true}
            />
            <InfoImages infoimages={content.infoimages} />
            <Parallax
                url="./mentorship"
                text="Sign Up"
                img="./img/stock-code1.jpg"
                title="Join Our Mentorship Program Now"
            />
            <Infobox
                title="Contribute To Our FOSS"
                description={content.infobox.description}
                content="..."
                theme="dark"
            />
        </Layout>
    );
}
