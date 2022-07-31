import { ButtonComponent } from "../../Components/Button"
import { HeaderComponent } from "../../Components/Header"
import { InputComponent } from "../../Components/Input"
import { Form, Main } from "./style"

export const Login = ():JSX.Element => {
    return(
        <Main>
            <HeaderComponent
                section="portifólio "
                detail="| dashboard"
            />
            <Form>
                <InputComponent 
                    inputPlaceholder="E-mail"
                    inputType="email"                 
                />
                <InputComponent
                    inputPlaceholder="Senha"
                    inputType="password"
                />
                <ButtonComponent
                    name="entrar"
                    buttonType="submit"
                />
            </Form>
        </Main>
    )
}