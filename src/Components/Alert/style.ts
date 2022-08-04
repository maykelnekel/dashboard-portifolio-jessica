import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 300px;
    height: 160px;
    border: 1px solid var(--secondary-color);
    box-shadow: 0px 0px 20px 5px var(--terceary-color);

    position: absolute;
    top: calc(50% - 91px);
    left:calc(50% - 162px);
    z-index: 1;
    background-color: var(--primary-color);
`
export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
` 

export const Text = styled.p`
    text-transform: none;
`

export const Close = styled.button`
 width: 10%;
 text-align: right;
 font-weight: bold;
 font-size: 1.8rem;
 text-align: center;
 background: none;
 border: none;
 display: flex;
 align-items: center;
 height: 2rem;
`

export const Title = styled.h3`
    font-size: 1.3rem;
    text-align: center;
    /* display: flex; */
    flex-basis:90%;
    align-items: center;
`

export const Detail = styled.strong`
    color: var(--not-ok-color);
`


