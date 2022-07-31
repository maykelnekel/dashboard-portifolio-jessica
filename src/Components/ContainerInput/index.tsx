import { IContainerInput } from "../../Interfaces"
import { InputComponent } from "../Input"
import { Container, Name } from "./style"

export const ContainerInputComponent = ({name,inputPlaceholder,inputType,inputValue}:IContainerInput):JSX.Element => {
    return(
        <Container>
            <Name>
                <strong>
                    {name}:
                </strong>
            </Name>
            <InputComponent
                inputPlaceholder={inputPlaceholder || inputValue}
                inputType={inputType}
                inputValue={inputValue}  
            />
        </Container>
    )
}