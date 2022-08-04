import { ButtonComponent } from "../Button"
import { InputComponent } from "../Input"
import { Close, Container, Detail, Header, Title } from "./style"

export const NewCategoryComponent = (): JSX.Element => {
    return (
        <Container>
            <Header>
                <Title>
                    <Detail>nova categoria +</Detail>
                </Title>
                <Close>
                    x
                </Close>
            </Header>
            <InputComponent inputPlaceholder="nome"/>
            <ButtonComponent buttonClass="addCategory" name="adicionar categoria"/>
        </Container>
    )
} 