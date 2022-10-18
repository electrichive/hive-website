import { createGlobalStyle } from 'styled-components';

export const GlobalProvider = createGlobalStyle`

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }


    body {
        --sqrt-3: 1.73205;

        --header-height: 15vh;
        --logo-padding: 10px;

        --white: #fefdf5;
        --lightgray: #c4c4c4;
        --darkgray: #5c5c5c;
        --black: #363636;
        --beige: #ffbe42;
        --gold: #f0b309;
        --orange: #f69004;
        --darkorange: #cc5d00;
        --discord: #7289da;

        margin: 0;
        padding: 0;
        background-color: #fefdf5;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
    }

    p {
        font-size: 24px;
    }
    h2 {
        font-size: 28px;
    }
    h3 {
        font-size: 26px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
    }

    .gatsby-highlight {
        background-color: #fdf6e3;
        border-radius: 0.3em;
        margin: 0.5em 0;
        padding: 1em;
        overflow: auto;
    }

    .gatsby-highlight pre[class*="language-"].line-numbers {
        padding: 0;
        padding-left: 2.8em;
        overflow: initial;
    }

    .fade-in-section {
        opacity: 0;
        transform: translateY(20vh);
        visibility: hidden;
        transition: opacity 0.6s ease-out, transform 1.2s ease-out;
        will-change: opacity, visibility;
      }

    .fade-in-section.is-visible {
        opacity: 1;
        transform: none;
        visibility: visible;
    }
      

`;
