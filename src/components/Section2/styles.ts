import styled from 'styled-components';

export const Cover = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    padding-bottom: 100px;
`;

export const Contant = styled.div`
    width: 100%;
    min-height: 96vh;
`;

export const Paragraph = styled.div`
    width: 86%;
    padding-top: 50px;
    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const Container = styled.section`
    padding-top: 50px;
`;
