import { ITextArea } from "../../Interfaces"
import { TextArea } from "./style"


export const TextAreaComponent = ({textareaPlaceholder, textAreaValue}:ITextArea):JSX.Element => {
    return(
        <TextArea
            rows={5}
            placeholder={textareaPlaceholder}
            value={textAreaValue}
        />
    )
}