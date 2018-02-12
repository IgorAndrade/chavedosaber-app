import Mural, { MuralTypes } from "../../model/mural";


export let mock: Mural[] = [{
    "type": MuralTypes.AVISO,
    "titulo": "Matriculas Abertas",
    "texto": "Faça já sua matricula",
    "img": "../assets/img/matricula.jpg",
    "data":new Date()
},
{
    "type": MuralTypes.EVENTO,
    "titulo": "Formatura 2017",
    "texto": "",
    "img": "../assets/img/formatura.jpg",
    "data":new Date("2017-12-11")
}];
