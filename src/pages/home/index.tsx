import { Infoimage, Infobox, Layout, Parallax, Slide } from 'components';
import { ImagesContainer } from './home.styled';
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

    const formatted = mapUrlsToProps(images, infoimages);
    return (
        <Layout>
            <Slide
                title="The Electric Hive"
                subtitle="Subtitle Mission Statement"
                button={true}
            />
            <InfoImages infoimages={formatted} />
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
