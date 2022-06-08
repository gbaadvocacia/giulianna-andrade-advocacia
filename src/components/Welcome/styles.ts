import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--blue);
    max-width: 45vw;
    h1 {
        font-size: 4rem;
        letter-spacing: 13px;
        font-weight: 700;
    }

    h2 {
        font-size: 1.5rem;
    }

    @media (max-width: 1200px) {
        h1 {
            font-size: 3rem;
            letter-spacing: 13px;
            font-weight: 700;
        }

        h2 {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 768px) {
        text-align: center;
        max-width: 100vh;

        h1 {
            font-size: 2rem;
            letter-spacing: 13px;
            font-weight: 700;
        }

        h2 {
            font-size: 1rem;
        }
    }

    @media (max-width: 576px) {
        text-align: center;
        max-width: 100vh;

        h1 {
            font-size: 1.5rem;
            letter-spacing: 13px;
            font-weight: 700;
        }

        h2 {
            font-size: 0.85rem;
        }
    }
`;

export const Button = styled.div`
    justify-content: start;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;
