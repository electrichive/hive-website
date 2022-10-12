import styled from 'styled-components';
import hex3 from 'static/img/png/hex3_discord.png';

export const DiscordBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 150px;
    width: 100%;
    text-align: center;
    background-image: url(${hex3});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--discord);
    @media only screen and (max-width: 1000px) {
        padding: 50px 30px;
    }
`;

export const DiscordLink = styled.a`
    height: 150px;
    display: flex;
`;

export const Logo = styled.img`
    filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%)
        hue-rotate(124deg) brightness(105%) contrast(105%);
    height: 100%;
    width: 100%;
    transition: 0.1s filter linear;
    &:hover {
        filter: brightness(0) saturate(100%) invert(100%) sepia(100%)
            saturate(0%) hue-rotate(124deg) brightness(105%) contrast(105%)
            drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
    }
`;
export const Title = styled.h2`
    color: var(--white);
`;
export const Description = styled.p`
    color: var(--white);
`;
