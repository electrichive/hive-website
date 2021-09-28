import styled, { css } from 'styled-components';
import hex3 from 'static/images/hex3.png';

export const Heading = styled.h1``;

export const Form = styled.form`
    height: 40%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5vmin;
`;

export const Label = styled.label`
    font-size: 25px;
`;

const inputMixin = css`
    background: transparent;
    border: none;
    width: 100%;
    flex-grow: 1;
    font-size: x-large;
    color: var(--black);
`;

export const Input = styled.input`
    ${inputMixin}
`;

type TextAreaProps = { height: string };
export const TextArea = styled.textarea<TextAreaProps>`
    ${inputMixin}

    resize: none;
    max-height: 100%;
    min-height: 35px;
    overflow-y: scroll;
    align-self: flex-end;
    padding: 0;
    height: ${props => props.height};

    &:-webkit-scrollbar {
        display: none;
    }
`;

export const SlideReverse = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column-reverse;
    gap: 5vmin;
    justify-content: center;
    align-items: center;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${hex3});

    transform: rotate(180deg);

    & > * {
        transform: rotate(-180deg);
    }
`;

export const CtrlBox = styled.div`
    flex: 0 0 10%;
    border-bottom: 2px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;

    & input:focus,
    &:textarea:focus {
        outline: none;
    }
`;

export const InputsBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 85%;
    justify-content: space-between;
    align-items: stretch;
    column-gap: 5%;
`;

export const MsgBox = styled(CtrlBox)`
    flex: 0 0 100%;
`;

export const SubmitButton = styled.input`
    background-color: var(--beige);
    padding: 1vmin;
    border: 2px solid var(--black);
    font-weight: bold;
    width: max-content;
    height: min-content;
`;
