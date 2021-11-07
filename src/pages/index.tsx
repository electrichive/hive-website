import { InfoImages } from 'components/Infoimage';
import { Infobox, Layout, Parallax, Slide } from 'components';

export default function PageHome(): JSX.Element {
    return (
        <Layout>
            <Slide
                title="The Electric Hive"
                subtitle="Subtitle Mission Statement"
                button={true}
            />
            <InfoImages />
            <Parallax
                url="./mentorship"
                text="Sign Up"
                img="./img/stock-code1.jpg"
                title="Join Our Mentorship Program Now"
            />
            <Infobox
                title="Contribute To Our FOSS"
                description={Content.infobox.description}
                content="..."
                theme="dark"
            />
        </Layout>
    );
}
