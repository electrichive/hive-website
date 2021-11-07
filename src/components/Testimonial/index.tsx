import Data from './content.json';
import {
    Container,
    Image,
    Title,
    Content,
    HexContainer,
    ContentContainer,
    ImageBg,
    Author,
} from './testimonial.styled';

function randomNumberGen(): number {
    //Gets random number between 0 and total number of testimonials
    return Math.floor(Math.random() * Data.testimonials.length);
}

function randomTestimonialPicker(): number[] {
    const chosen: number[] = []; // Will hold the 3 chosen testimonials

    while (chosen.length < 3) {
        const randomNumber = randomNumberGen();
        let alreadyTaken = false;

        // Loop will (crudely) pick 3 unique entries retrying if it gets one wrong
        // Worth revisiting when we have a large number of testimonials
        if (chosen.length === 0) {
            chosen.push(randomNumber);
        } else {
            chosen.forEach(num => {
                if (randomNumber === num) {
                    alreadyTaken = true;
                }
            });
            if (!alreadyTaken) {
                chosen.push(randomNumber);
            }
        }
    }
    return chosen;
}

/**
 * Component for a standard testimonial module (has an image name and text prop)
 * is passed data from the testimonials module
 */
export default function Testimonial(props: TestimonialProps): JSX.Element {
    return (
        <Container>
            <HexContainer direction={props.direction}>
                <Image img={props.img} alt="Testimonial" />
                <ImageBg direction={props.direction} />
                <Title>{props.title}</Title>
            </HexContainer>
            <ContentContainer>
                <Content>{props.content}</Content>
                <Author>{props.author}</Author>
            </ContentContainer>
        </Container>
    );
}

export function Testimonials(): JSX.Element {
    const chosenIdxs = randomTestimonialPicker();
    return (
        <Container>
            <h2>What do others think?</h2>
            {chosenIdxs
                .map(idx => Data.testimonials[idx])
                .map((testimonial, i) => {
                    <Testimonial
                        key={i}
                        direction={i % 2 === 0 ? 'left' : 'right'}
                        {...testimonial}
                    />;
                })}
        </Container>
    );
}
