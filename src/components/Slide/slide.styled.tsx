import styled from 'styled-components';
import hex3 from 'static/img/png/hex3.png';
import hex from 'static/img/svg/hex.svg';

export const Slider = styled.div`
    width: 100%;
    background-image: url(${hex3});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 1080px;
`;

export const Container = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 0;
`;

export const Subtitle = styled.h2`
    font-size: 30px;
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent url(${hex}) center/contain no-repeat;
    height: 200px;
    width: 200px;
    transition: 0.3s all linear;
    color: var(--black);
    &:hover {
        color: var(--darkorange);
        filter: drop-shadow(0 0 0.75rem var(--darkorange));
    }
`;
