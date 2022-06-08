import styled from 'styled-components';

export const LinkDecoration = styled.a`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--blue);
    text-decoration: none;
    color: var(--white);

    &:hover {
        color: var(--white);
    }

    & > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
