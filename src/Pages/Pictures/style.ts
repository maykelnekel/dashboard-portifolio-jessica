import styled from "styled-components";

export const Main = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    @media (min-width: 1025px){
        width: calc(100% - 250px);
    }
    @media (min-width: 1400px){
        justify-content: left;
        padding-left: 2rem;
    }
`