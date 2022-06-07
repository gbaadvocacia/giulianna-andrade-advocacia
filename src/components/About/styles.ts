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

export const Paragraph = styled.div`
    padding-top: 30px;
    font-weight: bold;
    @media (max-width: 425) {
        width: 100%;
    }
`;

export const Size = styled.div`
    @media (min-width: 768px) {
        width: 100%;
    }
`;
