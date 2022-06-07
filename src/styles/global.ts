import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
    --black90: rgba(0, 0, 0, 0.9);
    --dark-blue: #11162c;
    --blue: #222842;
    --light-blue: #3a4b96;
    --white: #ffffff;
    --light-gray: #f3f3f3;
    --gray: #dfdfdf;
    --green: #1abc9c;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body,input, textarea, button {
        font-family: 'Lato';
    }   

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .green {
        background-color: var(--green);
        color: var(--white);
    }

    .blue {
        background-color: var(--light-blue);
        color: var(--white);
    }
`;
