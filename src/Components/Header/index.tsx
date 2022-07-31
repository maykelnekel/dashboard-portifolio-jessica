import { IHeader } from "../../Interfaces"
import { Container, Detail, Tittle } from "./style"

export const HeaderComponent = ({section, detail}:IHeader):JSX.Element => {
    return (
        <Container>
            <Tittle>
                {section}
                <Detail>
                    {detail}
                </Detail>
            </Tittle>
        </Container>
    )
}