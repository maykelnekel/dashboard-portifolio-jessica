import styled from "styled-components";


export const Button = styled.button`
    border: none;
    background-color: var(--details-color);

    &.ok{
        background-color: var(--ok-color);
    }

    &.not-ok{
        background-color: var(--not-ok-color);
    }
`