import styled, { css } from 'styled-components';

export const HexContainer = styled.div<Pick<HeximageProps, 'size'>>`
    position: relative;

    ${props => (props.size === 'large' ? large : '')}
`;
export const HexImage = styled.div<Pick<HeximageProps, 'img'>>`
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

type HexImageBgProps = Pick<HeximageProps, 'theme' | 'direction'>;
export const HexImageBg = styled.div<HexImageBgProps>`
    z-index: 0;
    position: absolute;
    bottom: 0;
    width: 150px;
    height: 175px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    ${props => (props.theme === 'light' ? light : dark)}
    ${props => (props.direction === 'right' ? right : left)}
`;

export const left = css`
    left: 15px;
`;

export const right = css`
    right: 15px;
`;

export const dark = css`
    background-image: url('../../../static/img/hex-dark.svg');
`;

export const light = css`
    background-image: url('../../../static/img/hex-light.svg');
`;

const large = css`
    transform: scale(2);
`;
