import { Outlet } from "react-router-dom"
import { MainContainer, Menu, MenuItem, NavContainer, Submenu, SubmenuIconImage, SubmenuLink, SubmenuItemContainer, SubmenuRemoveIcon, SubmenuLinkContainer, UserContainer, UserImage, UserName, MenuItemName, MenuLink, NewCategoryContainer, NewCategoryButton } from "./style"
import RemoveIcon from "../../assets/trash.png"

export const NavBar = ():JSX.Element => {
    return(
        <MainContainer>
            <UserContainer>
                <UserImage src="https://media.gettyimages.com/photos/mark-mccormack-a-sports-promoter-and-agent-whose-company-img-many-picture-id2004933?s=612x612"/>
                <UserName>
                    <strong>Meu Nome</strong>
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
                            <SubmenuItemContainer>
                                <SubmenuLink to="/fotos" className="">- categoria 1</SubmenuLink>
                                <SubmenuRemoveIcon>
                                    <SubmenuIconImage src={RemoveIcon}/>
                                </SubmenuRemoveIcon>
                            </SubmenuItemContainer>
                            <SubmenuItemContainer>
                                <SubmenuLink to="/fotos">- categoria 2</SubmenuLink>
                                <SubmenuRemoveIcon>
                                    <SubmenuIconImage src={RemoveIcon}/>
                                </SubmenuRemoveIcon>
                            </SubmenuItemContainer>
                            <SubmenuItemContainer>
                                <SubmenuLink to="/fotos">- categoria 3</SubmenuLink>
                                <SubmenuRemoveIcon>
                                    <SubmenuIconImage src={RemoveIcon}/>
                                </SubmenuRemoveIcon>
                            </SubmenuItemContainer>

                        </Submenu>
                    </MenuItem>
                </Menu>
            </NavContainer>
            <Outlet />
        </MainContainer>
    )
}