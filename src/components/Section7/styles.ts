import styled from 'styled-components';

export const Cover = styled.div`
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-color: rgb(17, 22, 44, 0);
`;

export const Contant = styled.section`
    width: 100%;
`;

export const Container = styled.div`
    padding-top: 100px;
`;

export const Border = styled.div`
    border-radius: 20px;
    background-color: rgba(58, 75, 150, 0.3);
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
`;

export const Flex = styled.div`
    @media (max-width: 760px) {
        display: block;
    }

    @media (min-width: 768px) {
        display: flex;
    }
`;

export const Text = styled.span`
    font-size: 5rem;
    @media (min-width: 320px) {
        font-size: 1rem;
        padding-right: 30px;
    }

    @media (min-width: 768px) {
        font-size: 1.5rem;
        padding-right: 30px;
    }
`;
