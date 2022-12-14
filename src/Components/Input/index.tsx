import { IInput } from "../../Interfaces"
import { Input } from "./style"

export const InputComponent = ({inputValue, inputPlaceholder, inputType,inputClassName}:IInput):JSX.Element => {
    return(
        <Input
            type={inputType || 'text'} 
            placeholder={inputPlaceholder || inputValue}
            value={inputValue}
            className={inputClassName}
        />
    )
}