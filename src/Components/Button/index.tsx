import { IButton } from "../../Interfaces"
import { Button } from "./style"
export const ButtonComponent = ({handleFunction,  name, buttonClass, buttonType}: IButton):JSX.Element => {
    return(
        <Button
            className={buttonClass}
            onClick={()=> handleFunction!()}
            type={buttonType || "button"}
        >
            {name}
        </Button>
    )
}