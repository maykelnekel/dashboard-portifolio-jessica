import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    padding-top: 1rem 2rem;
    @media only screen and (min-width: 600px) {
        justify-content: flex-start;
    }
    `

export const Tittle = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    @media only screen and (min-width: 600px) {
        padding-left: 2rem ;
    }
`
export const Detail = styled.strong`
    color: var(--details-color);
    border-left: 1px;
    border-color: var(--details-color) ;
`