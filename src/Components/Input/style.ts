import styled from "styled-components";


export const Input = styled.input`
    border: none;
    background-color: var(--quaternary-color);
    border-radius: 0;
    padding-left: 15px;
    text-transform: uppercase; 
    height: 30px;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    
    &::placeholder{
        color: var(--terceary-color);
    }

    &.description{
        height: 90px;
        text-align: start;
    }
` 