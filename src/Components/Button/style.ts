import styled from "styled-components";


export const Button = styled.button`
    border: none;
    background-color: var(--details-color);
    text-transform: uppercase;
    color: var(--quaternary-color);
    height: 30px;
    font-weight: bolder;

    &:hover{
        cursor: pointer;
        filter: brightness(120%) 
    }

    &.ok{
        background-color: var(--ok-color);
        height: 45px;
    }

    &.not-ok{
        background-color: var(--not-ok-color);
    }

    &.alert{
        background-color: var(--not-ok-color);
        height: 56px;
        font-weight: bolder;
    }

    &.addCategory{
        height: 38px;
    }
`