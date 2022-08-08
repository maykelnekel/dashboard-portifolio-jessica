import { Outlet } from "react-router-dom"
import { MainContainer, Menu, MenuItem, NavContainer, Submenu, SubmenuIconImage, SubmenuLink, SubmenuItemContainer, SubmenuRemoveIcon, SubmenuLinkContainer, UserContainer, UserImage, UserName, MenuItemName, MenuLink, NewCategoryContainer, NewCategoryButton, Detail } from "./style"
import RemoveIcon from "../../assets/trash.png"
import DB from "../../Database/portifolioDatabase"

export const NavBar = ():JSX.Element => {
    return(
        <MainContainer>
            <UserContainer>
                <UserImage src="https://media.gettyimages.com/photos/mark-mccormack-a-sports-promoter-and-agent-whose-company-img-many-picture-id2004933?s=612x612"/>
                <UserName>
                    <Detail>Meu Nome</Detail>
                </UserName>
            </UserContainer>
            <NavContainer>
                <Menu>
                    <MenuItem>
                        <MenuItemName>
                            <MenuLink to="/perfil">perfil</MenuLink>
                        </MenuItemName>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemName>
                            Fotos
                        </MenuItemName>
                        <Submenu>  
                            <NewCategoryContainer>
                                <NewCategoryButton>
                                    nova categoria +
                                </NewCategoryButton>
                            </NewCategoryContainer>
                            {(DB.categorias.map(item=>(
                                    <SubmenuItemContainer>
                                    <SubmenuLink to="/fotos" className="">- {item.categoria}</SubmenuLink>
                                    <SubmenuRemoveIcon>
                                        <SubmenuIconImage src={RemoveIcon}/>
                                    </SubmenuRemoveIcon>
                                </SubmenuItemContainer>
                            )))}
                        </Submenu>
                    </MenuItem>
                </Menu>
            </NavContainer>
            <Outlet />
        </MainContainer>
    )
}