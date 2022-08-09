import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column ;
    width: 95%;
    padding-top: 15px;
    max-width: 1400px;
    
`

export const Tittle = styled.h3`
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1rem ;
`

export const Select = styled.select`
    border: none;
    background-color: var(--quaternary-color);
    border-radius: 0;
    padding-left: 15px;
    text-transform: uppercase; 
    height: 30px;
    color: var(--terceary-color);
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;

`

export const Option = styled.option`
    color: var(--secondary-color);

`