import {
    Button,
    Infoimage,
    Intro,
    Layout,
    Parallax,
    Slide,
    Testimonials,
} from 'components';
import { pickRandomN, useTestimonials } from 'utils';
import content from './mentorship.json';
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
                    img={props.image}
                    content={props.content}
                    direction="right"
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
                text="Become a Mentee"
            />
        </StyledMentorBlock>
    );
}

/**
 * Content for testimonials is pulled from data JSON
 */
export default function Mentorship(): JSX.Element {
    const MAX_TESTIMONIALS = 3;
    const testimonials = pickRandomN(useTestimonials(), MAX_TESTIMONIALS);
    return (
        <Layout>
            <Slide
                title="Mentorship Program"
                subtitle="Subtitle Mission Statement"
                button={true}
            />
            <Intro {...content.intro} />
            <MentorBlock theme="light" {...content.mentorblocks[0]} />
            <MentorBlock theme="dark" {...content.mentorblocks[1]} />
            <Testimonials testimonials={testimonials} />
            <Parallax
                url="./resources"
                text="View Our Resources"
                img="./img/stock-code1.jpg"
            />
        </Layout>
    );
}
