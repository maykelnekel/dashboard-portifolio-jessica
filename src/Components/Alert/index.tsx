import { ButtonComponent } from "../Button"
import { InputComponent } from "../Input"
import { Close, Container, Detail, Header, Text, Title } from "./style"

export const AlertComponent = (): JSX.Element => {
    return (
        <Container>
            
            <Header>
                <Title>
                    <Detail>alerta!</Detail>
                </Title>
                <Close>
                    x
                </Close>
            </Header>
            <Text>
                Deseja realmente excluir uma categoria? Isso acarretará na perda de todas as fotos anexas à essa categoria.
            </Text>
            <ButtonComponent buttonClass="alert" name="sim, desejo excluir"/>
        </Container>
    )
} 