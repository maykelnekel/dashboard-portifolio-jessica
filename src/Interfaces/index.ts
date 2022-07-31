export interface IButton {
    handleFunction?:VoidFunction
    name:string
    buttonClass?:string
    buttonType?: "button" | "submit" | "reset"
}

export interface IInput{
    inputPlaceholder?: string
    inputValue?: string
    inputType?: string
    inputClassName?: string
}

export interface IContainerInput extends IInput  {
    name: string
}

export interface IHeader{
    section: string
    detail: string
}