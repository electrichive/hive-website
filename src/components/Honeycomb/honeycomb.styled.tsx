import styled from 'styled-components';

export const StyledHoneycomb = styled.div`
    --column-size: calc(1fr * var(--sqrt-3) / 2);

    width: 122vw;

    position: relative;
    transform: translateX(-50%);

    padding: 0 1rem;
    margin: 0;
    margin-top: 10%;
    margin-left: 50%;

    display: grid;
    grid-template-rows: repeat(4, 1fr 2fr) 1fr;
    grid-template-columns: var(--column-size);
    gap: 2rem 1rem;
`;

export const Item = styled.div`
    position: relative;

    height: 0;
    padding-bottom: 100%;

    &:nth-child(1) {
        grid-column: 3 / span 2;
        grid-row: 1 / span 3;
    }
    &:nth-child(2) {
        grid-column: 2 / span 2;
        grid-row: 3 / span 3;
    }
    &:nth-child(3) {
        grid-column: 4 / span 2;
        grid-row: 3 / span 3;
    }
    &:nth-child(4) {
        grid-column: 6 / span 2;
        grid-row: 3 / span 3;
    }
    &:nth-child(5) {
        grid-column: 8 / span 2;
        grid-row: 3 / span 3;
    }
    &:nth-child(6) {
        grid-column: 10 / span 2;
        grid-row: 3 / span 3;
    }
    &:nth-child(7) {
        grid-column: 12 / span 2;
        grid-row: 3 / span 3;
    }
    &:nth-child(8) {
        grid-column: 14 / span 2;
        grid-row: 3 / span 3;
    }
    &:nth-child(9) {
        grid-column: 1 / span 2;
        grid-row: 5 / span 3;
    }
    &:nth-child(10) {
        grid-column: 3 / span 2;
        grid-row: 5 / span 3;
    }
    &:nth-child(11) {
        grid-column: 5 / span 2;
        grid-row: 5 / span 3;
    }
    &:nth-child(12) {
        grid-column: 7 / span 2;
        grid-row: 5 / span 3;
    }
    &:nth-child(13) {
        grid-column: 9 / span 2;
        grid-row: 5 / span 3;
    }
    &:nth-child(14) {
        grid-column: 11 / span 2;
        grid-row: 5 / span 3;
    }
    &:nth-child(15) {
        grid-column: 13 / span 2;
        grid-row: 5 / span 3;
    }
    &:nth-child(16) {
        grid-column: 15 / span 2;
        grid-row: 5 / span 3;
    }
    &:nth-child(17) {
        grid-column: 8 / span 2;
        grid-row: 7 / span 3;
    }
    &:nth-child(18) {
        grid-column: 14 / span 2;
        grid-row: 7 / span 3;
    }
`;

export const Outer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    background-color: var(--black);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
`;

export const Inner = styled.div`
    height: 97%;
    width: 97%;

    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background-color: var(${props => props.color});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
`;

export const Icon = styled.a`
    height: 65%;
    width: 65%;
`;

export const IconImage = styled.img`
    height: 100%;
    width: 100%;
`;
