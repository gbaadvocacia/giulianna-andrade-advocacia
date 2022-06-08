import styled from 'styled-components';

import ForumImg from '../../assets/forum.png';

export const Container = styled.section`
    background-color: var(--blue);
    @media (max-width: 560px) {
        padding-top: 10px;
        padding-bottom: 10px;
    }
`;

export const Cover = styled.div`
    background-size: contain;
    background-position: top right;
    background-repeat: no-repeat;
    background-image: url(${ForumImg});

    @media (max-width: 768px) {
        background-size: 0 0;
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;

export const Content = styled.div`
    background-color: var(--blue);
    max-width: 65vh;

    @media (min-width: 769px) {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    @media (max-width: 1400px) {
        max-width: 40vw;
    }
    @media (max-width: 768px) {
        padding-top: 10px;
        max-width: 100vw;
    }

    @media (max-width: 560px) {
        padding-top: 15px;
        padding-bottom: 15px;
    }
`;
