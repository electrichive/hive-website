import { Button, Infoimage, Intro, Layout, Parallax, Slide } from 'components';
import { Testimonials } from 'components/Testimonial';
import {
    Bullet,
    MentorContent,
    StyledMentorBlock,
} from 'styles/pages/mentorship.styled';

//Local component as this only appears on the mentorship page
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
 * Content for blocks is pulled from JSON in the folder "content"
 */
export default function Mentorship(): JSX.Element {
    return (
        <Layout>
            <Slide
                title="Mentorship Program"
                subtitle="Subtitle Mission Statement"
                button={true}
            />
            <Intro {...Content.intro} />
            <MentorBlock
                theme="light"
                url="/jointhehive"
                {...Content.MentorBlock[0]}
            />
            <MentorBlock
                theme="dark"
                url="/jointhehive"
                {...Content.MentorBlock[1]}
            />
            <Testimonials />
            <Parallax
                url="./resources"
                text="View Our Resources"
                img="./img/stock-code1.jpg"
            />
        </Layout>
    );
}
