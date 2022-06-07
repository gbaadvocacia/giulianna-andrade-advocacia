import styled from 'styled-components';

export const MainFooter = styled.div`
    background-color: var(--dark-blue);
    padding-top: 30px;
    padding-bottom: 30px;

    ul {
        @media (min-width: 768px) {
            display: flex;
        }
    }

    li {
        list-style-type: none;
        font-size: 1rem;

        @media (min-width: 1320px) {
            font-size: 1.5rem;
        }
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: var(--white);

    &:hover {
        text-decoration: none;
        color: var(--white);
        border-bottom: 1px solid var(--white);
    }
`;

export const List = styled.ul`
    cursor: pointer;
    @media (min-width: 320px) {
        align-items: start;
        margin-top: 15px;
    }
`;

export const Site = styled.span`
    color: #bdc3c7;
`;
