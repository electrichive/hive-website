import styled from 'styled-components';

export const Container = styled.div<Pick<ParallaxProps, 'img'>>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.img});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    width: 100%;
    text-align: center;
`;

export const Title = styled.h2`
    color: var(--white);
    text-shadow: 2px 2px 5px black;
`;
