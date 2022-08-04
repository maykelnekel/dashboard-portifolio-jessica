import styled from "styled-components";


export const Input = styled.input`
    border: none;
    background-color: var(--quaternary-color);
    border-radius: 0;
    padding-left: 15px;
    text-transform: uppercase; 
    height: 30px;

    &::placeholder{
        color: var(--terceary-color);
    }
` 