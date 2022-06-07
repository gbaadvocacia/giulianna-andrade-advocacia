import styled from 'styled-components';

export const Border = styled.div`
    background-color: var(--gray);
    border-radius: 50px;
    width: 350px;
    height: 400px;

    @media (min-width: 768px) {
        h5 {
            font-size: 1rem;
        }
    }
    @media (min-width: 1440px) {
        h5 {
            font-size: 1.5rem;
        }
    }
`;

export const ImgCard = styled.img`
    width: 150px;
    height: 150px;
`;

export const Card = styled.div`
    width: 350px;
    height: 233px;
    border: none;
    background-color: var(--gray);
    border-radius: 50px;

    padding: 30px;
`;

export const Container = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 30px;
    padding-left: 30px;
`;
