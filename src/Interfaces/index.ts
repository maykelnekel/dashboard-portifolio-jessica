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

export interface ITextArea{
    textareaPlaceholder: string
}

export interface ISelect{
    selectName: string
    selectId: string
    selectList: ICategoria[]
    selectValue: string
}

export interface ICategoria {
    _id: number
    categoria: string
}

export interface IMidia {
    _id?: number
    nome: string
    usuario: string
    link: string
}

export interface IFoto {
    _id?: number
    link: string
    descricao: string
    categoria: string
}

export interface iUser {
    _id?: number
    login: string
    email: string
    telefone: string
    senha: string
    sobreMim: string
    nome: string
    sobrenome: string
    fotos?: IFoto[]
    midias?: IMidia[]
    categorias?: ICategoria[]
    avatar:string
}

export interface IPhotoCard{
    imageLink: string
    imageDescription: string
    categories: ICategoria[]
    selectValue: string
}