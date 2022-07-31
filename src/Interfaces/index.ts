export interface IButton {
    handleFunction:VoidFunction
    name:string
    buttonClass?:string
}

export interface IInput{
    inputPlaceholder?: string
    inputValue?: string
    inputType?: string
}