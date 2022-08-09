import DB from "../../Database/portifolioDatabase"
import { ICategoria } from "../../Interfaces"
import { ButtonComponent } from "../Button"
import { InputComponent } from "../Input"
import { SelectComponent } from "../Select"
import { TextAreaComponent } from "../TextArea"
import { Form, Tittle } from "./style"


export const AddFotoFormComponent = ():JSX.Element =>{
    return(
        <Form id="addFoto">
            <Tittle>
                adicionar nova foto
            </Tittle>
            <InputComponent inputPlaceholder="link"/>
            <TextAreaComponent textareaPlaceholder="description"/>
            <SelectComponent selectName="categorias" selectId="categorias" selectList={DB.categorias as ICategoria[]}/>
            <ButtonComponent name="adicionar nova foto" buttonClass="ok"/>
        </Form>
    )
}