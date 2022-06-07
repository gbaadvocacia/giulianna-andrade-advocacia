import styled from 'styled-components';

export const Border = styled.div`
    border-radius: 15px;
    padding: 13px;
`;

export const LinkDecoration = styled.a`
    text-decoration: none;
    color: var(--white);

    &:hover {
        opacity: 0.9;
    }
`;

export const Title = styled.span`
    font-size: 1rem;
    @media (max-width: 1119px) {
        font-size: 0.85rem;
    }
`;

export const Padding = styled.div`
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
`;
