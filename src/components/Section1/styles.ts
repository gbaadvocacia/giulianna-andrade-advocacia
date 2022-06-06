import styled from 'styled-components';

export const Container = styled.section`
    background-color: var(--blue);
    @media (max-width: 425px) {
        background-color: transparent;
    }
`;

export const Cover = styled.div`
    width: 100%;
    min-height: 86vh;
    background-size: 50% 96vh;
    background-position: 100% 0;
    background-repeat: no-repeat;

    @media (max-width: 425px) {
        background-size: 100% 100vh;
        background-position: 100% 131%;
        background-repeat: no-repeat;
    }
`;

export const Contant = styled.div`
    background-color: var(--blue);
    max-width: 74vh;
    min-height: 86vh;

    @media (max-width: 425px) {
        max-width: 100vw;
        min-height: 50vh;
        transform: translateY(20%);
    }
`;
