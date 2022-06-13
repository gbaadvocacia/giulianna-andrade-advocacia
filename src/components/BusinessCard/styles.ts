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
    max-width: 65%;
    padding-top: 100px;
    padding-bottom: 100px;

    @media (max-width: 768px) {
        max-width: 100%;
        padding-top: 0;
        padding-bottom: 0;
    }
`;
