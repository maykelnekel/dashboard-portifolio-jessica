import styled from "styled-components";
import { InputComponent } from "../Input";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 300px;
    height: 130px;
    border: 1px solid var(--secondary-color);
    box-shadow: 0px 0px 20px 5px var(--terceary-color);

    position: absolute;
    top: calc(50% - 75px);
    left:calc(50% - 162px);
    z-index: 2;
    background-color: var(--primary-color);
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
export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
` 

export const Title = styled.h3``

export const Detail = styled.strong``

export const Input = styled(InputComponent)``

