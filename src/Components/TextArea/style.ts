import styled from "styled-components";


export const TextArea = styled.textarea`
    border: none;
    background-color: var(--quaternary-color);
    border-radius: 0;
    padding-left: 15px;
    padding-top: 10px;
    text-transform: uppercase; 
    height: 90px;
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;

    
    &::placeholder{
        color: var(--terceary-color);
    }

    &.description{
        height: 90px;
        text-align: start;
    }
`