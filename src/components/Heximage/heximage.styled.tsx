import styled, { css } from 'styled-components';
import hexLight from 'static/img/svg/hex-light.svg';
import hexDark from 'static/img/svg/hex-dark.svg';

export const HexContainer = styled.div<Pick<HeximageProps, 'size'>>`
    position: relative;
    max-width: 200px;
    margin: 0 auto;
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
    mask-image: url(${hexLight});
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
    background-image: url(${hexDark});
`;

export const light = css`
    background-image: url(${hexLight});
`;

const large = css`
    transform: scale(1.5);
`;
