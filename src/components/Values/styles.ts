import styled from 'styled-components';

export const Border = styled.div`
    background-color: var(--gray);
    border-radius: 50px;
    width: 100%;

    @media (min-width: 768px) {
        h5 {
            font-size: 0.85rem;
        }
    }
    @media (min-width: 1440px) {
        h5 {
            font-size: 1.5rem;
        }
    }
`;

export const Card = styled.div`
    background-color: var(--gray);
    min-height: 40vh;
    border: none;
    border-radius: 50px;
    padding-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
`;
