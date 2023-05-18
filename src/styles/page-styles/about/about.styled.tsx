import styled from 'styled-components';

export const InfoBlockDiv = styled.div<Partial<InfoBlockProps>>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 600px;
    padding: 100px;
    text-align: center;
    width: 100%;
    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 10px;
        margin-bottom: 30px;
    }
`;

export const InfoContent = styled.div`
    order: ${props => (props.theme === 'light' ? '0' : '2')};
    display: flex;
    flex-direction: column;
    align-items: ${props =>
        props.theme === 'light' ? 'flex-end' : 'flex-start'};
    padding: 70px;
    width: 60%;
    @media (max-width: 1000px) {
        width: 100%;
        align-items: center;
        padding: 0px;
        order: 0;
    }
`;
export const InfoImage = styled.img`
    width: 40%;
    border-radius: 30px;
    box-shadow: 3px 3px 5px var(--black);
    @media (max-width: 1000px) {
        display: none;
    }
`;
export const InfoTitle = styled.h2`
    font-size: 36px;
    text-align: ${props => (props.theme === 'light' ? 'right' : 'left')};
    @media (max-width: 1000px) {
        width: 100%;
        text-align: center;
        padding: 0px;
    }
`;
export const InfoDescription = styled.p`
    text-align: ${props => (props.theme === 'light' ? 'right' : 'left')};
    padding: 20px;
    ${props =>
        props.theme === 'light'
            ? 'border-right: 10px solid var(--beige);'
            : 'border-left: 10px solid var(--darkorange);'}
    @media (max-width: 1000px) {
        width: 100%;
        text-align: center;
        padding: 0px;
        border: none;
    }
`;
