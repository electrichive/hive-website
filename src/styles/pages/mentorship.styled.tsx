import styled from 'styled-components';
import { darkThemeMixin, lightThemeMixin } from '../mixins.styled';

export const StyledMentorBlock = styled.div<Pick<MentorBlockProps, 'theme'>>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 50px 200px;
    text-align: center;

    ${props => (props.theme === 'light' ? lightThemeMixin : darkThemeMixin)}

    @media only screen and (max-width: 1200px) {
        padding: 30px 50px;
    }
`;

export const MentorContent = styled.div``;
export const Bullet = styled.li`
    font-size: 22px;
    text-align: left;
    margin-bottom: 20px;
`;
