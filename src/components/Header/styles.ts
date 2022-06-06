import styled from 'styled-components';

export const DarkHeader = styled.header`
    background-color: var(--dark-blue);
`;

export const List = styled.ul`
    cursor: pointer;
    @media (min-width: 320px) {
        align-items: start;
        margin-top: 15px;
    }

    @media (min-width: 1321px) {
        align-items: center;
    }
`;

export const Alignment = styled.div`
    @media (min-width: 320px) {
        align-items: start;
        margin-top: 20px;
    }

    @media (min-width: 1321px) {
        align-items: center;
        justify-content: center;
    }
`;
