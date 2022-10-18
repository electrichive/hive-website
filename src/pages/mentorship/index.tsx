import {
    Button,
    Infoimage,
    Intro,
    Layout,
    Parallax,
    Slide,
    Testimonials,
} from 'components';
import * as R from 'ramda';
import { pickRandomN, mapUrlsToProps, findImagePath } from 'utils';
import { useTestimonials } from 'src/graphql/queries/testimonials';
import { useImageUrls } from 'src/graphql/queries/images';
import { graphql, useStaticQuery } from 'gatsby';
import { Bullet, MentorContent, StyledMentorBlock } from './mentorship.styled';

/**
 *
 */
function MentorBlock(props: MentorBlockProps): JSX.Element {
    const themeContrast = props.theme === 'light' ? 'dark' : 'light';
    return (
        <StyledMentorBlock theme={props.theme}>
            <h2>{props.firsttitle}</h2>
            <MentorContent>
                <Infoimage
                    img={props.img}
                    content={props.content}
                    direction={props.direction}
                />
            </MentorContent>
            <h2>{props.secondtitle}</h2>
            <div>
                <ul>
                    {props.bullets.map((bullet, i) => {
                        return <Bullet key={i}>{bullet}</Bullet>;
                    })}
                </ul>
            </div>
            <h2>Why not start now?</h2>
            <Button
                url={props.url}
                theme={themeContrast}
                text={props.buttontext}
            />
        </StyledMentorBlock>
    );
}

/**
 * Content for testimonials is pulled from data JSON
 */
export default function Mentorship(): JSX.Element {
    // query site metadata for page content
    const query = useStaticQuery(graphql`
        query MentorshipQuery {
            allMentorshipJson {
                edges {
                    node {
                        mentorblocks {
                            url
                            firsttitle
                            secondtitle
                            content
                            img
                            bullets
                            buttontext
                        }
                        intro {
                            content
                            title
                        }
                    }
                }
            }
        }
    `);
    const images = useImageUrls();
    const intro = query.allMentorshipJson.edges[0].node.intro;
    const mentorblocks = mapUrlsToProps(
        images,
        query.allMentorshipJson.edges[0].node.mentorblocks
    );
    const MAX_TESTIMONIALS = 3;
    const testimonials = R.compose(
        mapUrlsToProps(images),
        pickRandomN(MAX_TESTIMONIALS)
    )(useTestimonials());
    return (
        <Layout>
            <Slide
                title="Mentorship Program"
                subtitle="Subtitle Mission Statement"
                button={false}
            />
            <Intro {...intro} />
            <MentorBlock theme="light" direction="right" {...mentorblocks[0]} />
            <MentorBlock theme="dark" direction="left" {...mentorblocks[1]} />
            <Testimonials testimonials={testimonials} />
            <Parallax
                url="./resources"
                text="View Our Resources"
                img={findImagePath(images, 'stock-code1.jpg')}
            />
        </Layout>
    );
}
