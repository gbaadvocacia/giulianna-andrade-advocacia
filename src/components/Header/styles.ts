import styled from 'styled-components';

export const DarkHeader = styled.header`
    background-color: var(--dark-blue);
`;

export const List = styled.ul`
    cursor: pointer;
    @media (min-width: 320px) {
        align-items: start;
        margin-top: 15px;
    }

    @media (min-width: 1400px) {
        align-items: center;
    }
`;

export const Alignment = styled.div`
    @media (min-width: 320px) {
        align-items: start;
        margin-top: 20px;
    }

    @media (min-width: 1400px) {
        align-items: center;
        justify-content: center;
    }
`;

export const Img = styled.div`
    margin-right: 40px;
    @media (max-width: 465px) {
        width: 83%;
        margin-right: 0;
    }
`;

export const Container = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;

    @media (max-width: 540px) {
        padding-top: 15px;
        padding-bottom: 15px;
    }
`;
