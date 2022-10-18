import styled from 'styled-components';
import { darkThemeMixin, lightThemeMixin } from 'src/styles/mixins.styled';

export const FlipboxInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;

export const Flipbox = styled.div`
    background-color: transparent;
    width: 400px;
    height: 400px;
    perspective: 1000px;
    border-radius: 10px;
    margin-bottom: 30px;
    &:hover ${FlipboxInner} {
        transform: rotateY(180deg);
    }
    &:active ${FlipboxInner} {
        transform: rotateY(180deg);
    }
`;

export const FlipboxFront = styled.div<Pick<FlipboxProps, 'img'>>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-shadow: 2px 2px 3px var(--black);
    color: var(--white);
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    @media only screen and (max-width: 1000px) {
    }
`;

export const FlipboxBack = styled.div<Pick<FlipboxProps, 'theme'>>`
    ${props => (props.theme === 'dark' ? darkThemeMixin : lightThemeMixin)}
    transform: rotateY(180deg);
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    @media only screen and (max-width: 1000px) {
    }
    padding: 15px;
`;

export const Subtitle = styled.h2``;
export const Content = styled.p``;
