import styled from 'styled-components';

export const Cover = styled.div`
    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
    padding-top: 100px;
    padding-bottom: 100px;

    @media (max-width: 1441px) {
        background-size: 0 0;
        padding-top: 70px;
        padding-bottom: 70px;
    }

    @media (max-width: 426px) {
        padding-bottom: 30px;
    }
`;

export const Paragraph = styled.div`
    width: 80%;
    padding-top: 70px;
    @media (max-width: 426px) {
        width: 100%;
        padding-top: 30px;
        p {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 1440px) {
        width: 100%;
        padding-top: 30px;
    }
`;
