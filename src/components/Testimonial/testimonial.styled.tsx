import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 100px;
    display: flex;
    align-content: center;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`;
export const Image = styled.img<Pick<TestimonialProps, 'img'>>`
    position: relative;
    min-width: 200px;
    min-height: 200px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    mask-image: url('../../../static/img/hex-light.svg');
    mask-size: 150px;
    mask-repeat: no-repeat;
    mask-position: center;
    z-index: 1;
`;

function bgDir2Img(direction: string): string {
    return direction === 'right' ? '/img/hex-dark.svg' : '/img/hex-light.svg';
}
export const ImageBg = styled.div<Pick<TestimonialProps, 'direction'>>`
    z-index: 0;
    position: absolute;
    bottom: -5px;
    left: 10px;
    width: 150px;
    height: 175px;
    background-image: url(${props => bgDir2Img(props.direction)});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (max-width: 800px) {
        left: 50px;
    }
`;
export const Title = styled.h3``;
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Content = styled.p``;
export const Author = styled.h4``;
export const TestimonialsContainer = styled.div`
    width: 70%;
    margin-top: 100px;
    text-align: center;
`;
export const HexContainer = styled.div<Pick<TestimonialProps, 'direction'>>`
    position: relative;
    order: ${props => (props.direction === 'right' ? '3' : '0')};

    @media only screen and (max-width: 800px) {
        order: 0;
    }
`;
