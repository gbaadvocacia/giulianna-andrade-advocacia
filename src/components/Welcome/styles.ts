import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 20%;

    h1 {
        font-size: 4rem;
        letter-spacing: 15px;
        font-weight: 900;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 2rem;
            letter-spacing: 10px;
            font-weight: 900;
        }

        h2 {
            font-size: 0.85rem;
        }
    }
`;
