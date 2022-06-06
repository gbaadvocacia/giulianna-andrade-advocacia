import styled from 'styled-components';

export const MainFooter = styled.div`
    background-color: var(--dark-blue);

    ul {
        @media (min-width: 768px) {
            display: flex;
        }
    }

    li {
        list-style-type: none;
        font-size: 1rem;

        @media (min-width: 1320px) {
            font-size: 1.5rem;
        }
    }
`;
