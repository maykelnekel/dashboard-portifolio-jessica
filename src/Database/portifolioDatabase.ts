import { iUser } from "../Interfaces"

let DB: iUser = {
    _id:1,
    login:"jehmassuquetto",
    email:"jessicamassuquetto@gmail.com",
    telefone:"(41) 99999-9999",
    senha:"$2b$11$4qvI6tWJnMWcXHIA/Ot1JuCXuv.UJEecyqp9JNjUYgRAO14z7r5Pu",
    sobreMim:"algo sobre mim",
    nome:"Jessica",
    sobrenome:"Massuquetto",
    avatar:"https://live.staticflickr.com/5739/buddyicons/149411834@N04_r.jpg?1479581584#149411834@N04",
    categorias:[
        {
            _id:1,
            categoria: "Food",
        },{
            _id:2,
            categoria: "People",
        },{
            _id:3,
            categoria: "Weeding",
        },{
            _id:4,
            categoria: "Nature",
        },
        
    ],
    fotos:[
        {
            link:"https://img.freepik.com/fotos-gratis/conceito-rural-do-destino-do-curso-da-estrada-de-contry-da-paisagem_53876-14122.jpg?w=1380&t=st=1660001886~exp=1660002486~hmac=f7a3b856e45eb326999943954a4c931ef75e598fb0d8eb1ce368e584db18e5d8",
            descricao:"minha descrição2",
            categoria:"Food",
            _id:1
        },{
            link:"https://img.freepik.com/fotos-gratis/conceito-rural-do-destino-do-curso-da-estrada-de-contry-da-paisagem_53876-14122.jpg?w=1380&t=st=1660001886~exp=1660002486~hmac=f7a3b856e45eb326999943954a4c931ef75e598fb0d8eb1ce368e584db18e5d8",
            descricao:"minha descrição2",
            categoria:"People",
            _id:2
        },{
            link:"https://img.freepik.com/fotos-gratis/conceito-rural-do-destino-do-curso-da-estrada-de-contry-da-paisagem_53876-14122.jpg?w=1380&t=st=1660001886~exp=1660002486~hmac=f7a3b856e45eb326999943954a4c931ef75e598fb0d8eb1ce368e584db18e5d8",
            descricao:"minha descrição2",
            categoria:"Weeding",
            _id:3
        },{
            link:"https://img.freepik.com/fotos-gratis/conceito-rural-do-destino-do-curso-da-estrada-de-contry-da-paisagem_53876-14122.jpg?w=1380&t=st=1660001886~exp=1660002486~hmac=f7a3b856e45eb326999943954a4c931ef75e598fb0d8eb1ce368e584db18e5d8",
            descricao:"minha descrição2",
            categoria:"Nature",
            _id:4
        },
    ],
    midias: [
        {
            nome:"Instagram",
            usuario:"@JehMassuquetto",
            link:"https://www.instagram.com/jehmassuquetto/",
            _id:1
        }
    ],

}

export default DB