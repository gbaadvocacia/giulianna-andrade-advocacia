import styled from 'styled-components';

export const Container = styled.section`
    background-color: var(--gray);
    color: var(--dark-blue);
    padding-top: 100px;
    padding-bottom: 100px;

    @media (max-width: 1023px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`;

export const Flex = styled.div`
    @media (min-width: 1024px) {
        display: flex;
    }
`;

export const Size = styled.div`
    @media (min-width: 768px) {
        width: 100%;
    }
`;

export const Paragraph = styled.p`
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
    @media (max-width: 992px) {
        font-size: 1.2rem;
    }
    @media (min-width: 1200px) {
        font-size: 1.3rem;
    }
`;
