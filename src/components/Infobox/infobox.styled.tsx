import { darkThemeMixin, lightThemeMixin } from 'styles/mixins.styled';
import styled from 'styled-components';

export const InfoBlock = styled.div<Pick<InfoBoxProps, 'theme'>>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 150px;
    width: 100%;
    text-align: center;

    @media only screen and (max-width: 800px) {
        padding: 100px 30px;
    }

    ${props => (props.theme === 'dark' ? darkThemeMixin : lightThemeMixin)}
`;

export const Content = styled.div``;
export const Title = styled.h2``;
export const Description = styled.p``;
