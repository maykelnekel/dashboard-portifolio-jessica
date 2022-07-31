import { IButton } from "../../Interfaces"
import { Button } from "./style"
export const ButtonComponent = ({handleFunction,  name, buttonClass}: IButton):JSX.Element => {
    return(
        <Button
            className={buttonClass}
            onClick={()=> handleFunction()}
        >
            {name}
        </Button>
    )
}