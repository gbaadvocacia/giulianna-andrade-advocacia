import styled from 'styled-components';

export const Container = styled.div`
    color: var(--dark-blue);
    background-color: var(--light-gray);

    padding-top: 150px;
    padding-bottom: 150px;

    @media (max-width: 768px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`;

export const Title = styled.h1`
    @media (max-width: 768px) {
        padding-bottom: 50px;
    }

    @media (min-width: 769px) {
        padding-bottom: 100px;
    }
`;
