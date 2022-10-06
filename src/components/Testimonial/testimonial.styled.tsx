import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 100px;
    display: flex;
    align-content: center;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Content = styled.p``;
export const Author = styled.h4``;
export const HexContainer = styled.div<Pick<TestimonialProps, 'direction'>>`
    position: relative;
    order: ${props => (props.direction === 'right' ? '3' : '0')};
    width: 30%;
    @media only screen and (max-width: 800px) {
        order: 0;
        width: 100%;
    }
`;
