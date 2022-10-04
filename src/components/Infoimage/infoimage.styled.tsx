import styled, { css } from 'styled-components';
import hexLight from 'static/img/svg/hex-light.svg';
import hexDark from 'static/img/svg/hex-dark.svg';

export const Container = styled.div`
    margin-bottom: 100px;
    display: flex;
    align-content: center;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Image = styled.div<Pick<InfoImageProps, 'img'>>`
    position: relative;
    min-width: 400px;
    min-height: 400px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    mask-image: url(${hexLight});
    mask-size: 300px;
    mask-repeat: no-repeat;
    mask-position: center;
    z-index: 1;

    @media only screen and (max-width: 800px) {
        min-width: 200px;
        min-height: 200px;
        mask-size: 150px;
    }
`;

const bgRightMixin = css`
    background-image: url(${hexDark});
    right: 15px;
    left: 70px;
`;
export const ImageBg = styled.div<Pick<InfoImageProps, 'direction'>>`
    z-index: 0;
    position: absolute;
    left: 15px;
    bottom: 0;
    width: 320px;
    height: 370px;
    background-image: url(${hexLight});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    ${props => (props.direction === 'right' ? bgRightMixin : '')}

    @media only screen and (max-width: 800px) {
        width: 150px;
        height: 175px;
    }
`;

export const HexContainer = styled.div<Pick<InfoImageProps, 'direction'>>`
    position: relative;
    order: ${props => (props.direction === 'right' ? '3' : '0')};

    @media only screen and (max-width: 800px) {
        order: 0;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    text-align: center;
`;

export const Subtitle = styled.h2``;
export const Content = styled.p``;
