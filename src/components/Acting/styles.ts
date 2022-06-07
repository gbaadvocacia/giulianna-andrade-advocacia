import styled from 'styled-components';

export const Container = styled.section`
    background-color: var(--blue);
    color: var(--white);
    padding-top: 100px;
    padding-bottom: 100px;

    @media (max-width: 768px) {
        padding-top: 70px;
        padding-bottom: 70px;
    }
`;
