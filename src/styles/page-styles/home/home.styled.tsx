import styled from 'styled-components';

export const ImagesContainer = styled.div`
    width: 70%;
    text-align: center;
`;

export const FlipContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;
    margin-bottom: 300px;
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;
