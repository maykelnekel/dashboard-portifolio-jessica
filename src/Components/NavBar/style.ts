import { Link } from "react-router-dom";
import styled from "styled-components";
import {FcEmptyTrash} from "react-icons/fc"


export const MainContainer = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    background-color: var(--secondary-color);
    min-height: 100vh;
    color: var(--primary-color);
    @media (max-width: 768px){ 
        /* display: none; */
    }
`

export const UserContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 200px;
    width: 90%;
    margin-bottom: 30px;

`

export const UserImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
`

export const UserName = styled.p`
    text-align: center;
    width: 100%;
`

export const NavContainer = styled.nav`
    width: 90%;

`

export const Menu = styled.ul``

export const MenuItem = styled.li`
    margin-bottom: 1rem;
`
export const MenuItemName = styled.p`
    margin-bottom: 2rem;
    font-size: 1rem;
`
export const MenuLink = styled(Link)`
    text-decoration: none;
    color: var(--primary-color);

    &:hover{
        font-weight: bold;
        color: var(--details-color);
    }
    &:focus, &:checked{
        font-weight: bold;
        color: var(--details-color);
        border-color: var(--details-color);
    }
`

export const Submenu = styled.ul`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
`

export const SubmenuItemContainer = styled.li`
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    `

export const SubmenuLinkContainer = styled.div`

`

export const SubmenuLink = styled(Link)`
    text-decoration: none;
    color: var(--primary-color);
    font-size: 0.8rem;
    display: flex;
    align-items: center;

    &:hover{
        font-weight: bold;
        color: var(--details-color);
    }
    &:focus, &:checked{
        font-weight: bold;
        color: var(--details-color);
        border-color: var(--details-color);
    }
`

export const SubmenuRemoveIcon = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    background-image: url("../../assets/trash.png");
    background-size:contain ;
`

export const SubmenuIconImage = styled.img`
    &:hover{
        width: 15px;
    }
`

export const NewCategoryContainer = styled.div`
    margin-bottom: 1rem;
`

export const NewCategoryButton = styled.button`
    background: none;
    border: none;
    color: var(--primary-color);
    text-transform: uppercase;
    padding-left: 0;
    font-size: 0.9rem;

    &:hover{
        font-weight: bolder;
        color: var(--ok-color);
        font-size: 0.9rem;
    }
`

export const Detail = styled.strong``