import styled from 'styled-components';

export const Container = styled.div`
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
            font-size: 3.5rem;
            letter-spacing: 13px;
            font-weight: 700;
        }
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 2rem;
            letter-spacing: 9px;
            font-weight: 700;
        }

        h2 {
            font-size: 0.85rem;
        }
    }
`;
