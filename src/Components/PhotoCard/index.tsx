import DB from "../../Database/portifolioDatabase"
import { IPhotoCard } from "../../Interfaces"
import { ButtonComponent } from "../Button"
import { InputComponent } from "../Input"
import { SelectComponent } from "../Select"
import { TextAreaComponent } from "../TextArea"
// import { TextArea } from "../TextArea/style"
import { FormContainer, Image, InputContainer, IntraFormContainer, Label, MainContainer } from "./style"


export const PhotoCardContainer = ({categories,imageDescription,imageLink, selectValue}:IPhotoCard):JSX.Element => {
    return(
        <MainContainer>
            <Image src={imageLink} alt={imageDescription}/>
            <FormContainer>
                <InputContainer>
                    <Label>Link: </Label>
                    <InputComponent inputValue={imageLink}/>
                </InputContainer>
                <InputContainer className="description">
                    <Label>descrição: </Label>
                    <TextAreaComponent
                        textAreaValue={imageDescription}
                    />
                </InputContainer>
                <IntraFormContainer>
                    <InputContainer className="select">
                        <Label >categorias: </Label>
                        <SelectComponent
                            selectName="categorias"
                            selectId="categorias"
                            selectList={categories}
                            selectValue={selectValue}
                            />
                    </InputContainer>
                    <ButtonComponent name="salvar"/>
                    <ButtonComponent name="excluir" buttonClass="not-ok"/>
                </IntraFormContainer>
            </FormContainer>
        </MainContainer>
    )
}