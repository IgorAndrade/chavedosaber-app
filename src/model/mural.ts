export enum MuralTypes {
    NOTICIA,
    AVISO,
    EVENTO
};


export default class Mural {
    type: MuralTypes
    titulo: String
    texto: String
    data?: Date
    img: String
}