import styled from 'styled-components';
import { lightThemeMixin, darkThemeMixin } from 'styles/mixins.styled';

export const InfoBlockDiv = styled.div<Partial<InfoBlockProps>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-height: 400px;
    padding: 20px;
    text-align: center;

    @media (max-width: 640px) {
        width: 100%;
    }

    ${props => (props.theme === 'light' ? lightThemeMixin : darkThemeMixin)}
`;

export const InfoBlockContainer = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 640px) {
        display: block;
    }
`;
