import { Infoimage, Infobox, Layout, Parallax, Slide } from 'components';
import { ImagesContainer } from './home.styled';
import { graphql, useStaticQuery } from 'gatsby';
import dev1 from 'static/img/jpg/developer1.jpg';
import dev2 from 'static/img/jpg/developer2.jpg';
import stockCode from 'static/img/jpg/stock-code1.jpg';
import * as R from 'ramda';

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
    const query = graphql`
        query HomePageQuery {
            site {
                siteMetadata {
                    homeContent {
                        infobox {
                            description
                        }
                        infoimages {
                            content
                            subtitle
                        }
                    }
                }
            }
        }
    `;
    const { infobox, infoimages } =
        useStaticQuery(query).site.siteMetadata.homeContent;

    const imgList = [{ img: dev1 }, { img: dev2 }, { img: dev1 }];
    const formatted = infoimages.map((image, idx) =>
        R.mergeRight(image, imgList[idx])
    );
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
                img={stockCode}
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
