import { AddFotoFormComponent } from "../../Components/AddFotoForm"
import { PhotoCardContainer } from "../../Components/PhotoCard"
import DB from "../../Database/portifolioDatabase"
import { ICategoria } from "../../Interfaces"
import { Main, PhotosContainer } from "./style"

export const Pictures = ():JSX.Element => {
    return (
            <Main>
                <AddFotoFormComponent/>
                <PhotosContainer>
                    {
                        DB.fotos?.map(item=>(
                            <PhotoCardContainer
                            categories={DB.categorias as ICategoria[]}
                            imageDescription={item.descricao}
                            imageLink={item.link}
                            selectValue={item.categoria}
                            />
                            ))
                        }
                </PhotosContainer>
            </Main>
    )
}