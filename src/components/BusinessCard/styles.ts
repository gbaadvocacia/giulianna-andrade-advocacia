import styled from 'styled-components';

export const Container = styled.section`
    background-color: var(--blue);
`;

export const Cover = styled.div`
    background-size: 50% 96vh;
    background-position: 100% 0;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
        background-size: 0 0;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    @media (min-width: 769px) {
        padding-top: 50px;
        padding-bottom: 50px;
        background-size: 50% 96vh;
        background-position: 100% 0;
        background-repeat: no-repeat;
    }
`;

export const Content = styled.div`
    background-color: var(--blue);
    max-width: 65vh;

    @media (min-width: 768px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;
