import styled from "styled-components";


export const Button = styled.button`
    border: none;
    background-color: var(--details-color);
    text-transform: uppercase;
    color: var(--primary-color);

    &:hover{
        cursor: pointer;
        filter: brightness(120%) 
    }

    &.ok{
        background-color: var(--ok-color);
    }

    &.not-ok{
        background-color: var(--not-ok-color);
    }
`