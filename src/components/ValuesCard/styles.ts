import styled from 'styled-components';

export const Border = styled.div`
    background-color: var(--gray);
    border-radius: 50px;

    & > div:nth-child(1) {
        @media (max-width: 575px) {
            flex-basis: 100px;
            margin-right: 30px;
        }
    }

    @media (min-width: 768px) {
        h5 {
            font-size: 1rem;
        }
    }
    @media (min-width: 1440px) {
        h5 {
            font-size: 1.5rem;
        }
    }
`;
