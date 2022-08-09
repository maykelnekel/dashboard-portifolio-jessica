import styled from "styled-components";

export const Main = styled.section`
    width: 95%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 1025px){
        width: calc(95% - 250px);
    }
    @media (min-width: 1400px){
        justify-content: left;
        padding-left: 2rem;
    }
`

export const PhotosContainer = styled.section`
    width: 95%;
    max-width: 1400px;
`