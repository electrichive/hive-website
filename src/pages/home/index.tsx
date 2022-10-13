import {
    Infoimage,
    Infobox,
    Layout,
    Parallax,
    Slide,
    Flipbox,
} from 'components';
import { ImagesContainer, FlipContainer } from './home.styled';
import { graphql, useStaticQuery } from 'gatsby';
import { mapUrlsToProps, findImagePath } from 'src/utils';
import { useImageUrls } from 'src/graphql/queries/images';

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

/**
 * Local component for displaying Flipboxes components
 */
function Flipboxes(props: FlipboxesProps): JSX.Element {
    return (
        <FlipContainer>
            {props.flipboxes.map((flipbox, i) => (
                <Flipbox
                    key={i}
                    {...flipbox}
                    theme={i % 2 === 0 ? 'light' : 'dark'}
                />
            ))}
        </FlipContainer>
    );
}

export default function PageHome(): JSX.Element {
    // query site metadata for page content
    const query = useStaticQuery<GatsbyTypes.HomeQueryQuery>(graphql`
        query HomeQuery {
            allHomeJson {
                edges {
                    node {
                        infobox {
                            description
                        }
                        infoimages {
                            content
                            img
                            subtitle
                        }
                    }
                }
            }
        }
    `);

    const images = useImageUrls();
    const infobox = query.allHomeJson.edges[0].node.infobox;
    const infoimages: InfoImage[] = query.allHomeJson.edges[0].node.infoimages;
    const flipboxes: typeof Flipbox[] =
        query.allHomeJson.edges[0].node.infoimages;

    const formattedInfoimages = mapUrlsToProps(images, infoimages);
    const formattedFlipboxes = mapUrlsToProps(images, flipboxes);

    return (
        <Layout>
            <Slide
                title="The Electric Hive"
                subtitle="Subtitle Mission Statement"
                button={true}
            />
            {/* <InfoImages infoimages={formattedInfoimages} /> */}
            <Flipboxes flipboxes={formattedFlipboxes} />
            <Parallax
                url="./mentorship"
                text="Sign Up"
                img={findImagePath(images, 'stock-code1.jpg')}
                title="Join Our Mentorship Program Now"
            />
            <Infobox
                title="Contribute To Our FOSS"
                description={infobox.description}
                content="..."
                theme="dark"
            />
        </Layout>
    );
}
