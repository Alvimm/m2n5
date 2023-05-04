import Editora from "../modelo/Editora";

let editoras: Array<Editora> = [
  {codEditora:1, nome:'Alta Books'},
  {codEditora:2, nome:'Bookman'},
  {codEditora:3, nome:'Addison Wesley'},
  {codEditora:4, nome:'Pearson'}
]



export default class ControleEditora{
  getNomeEditora(codEditora:number):string {
    const editora = editoras.filter(editora => editora.codEditora === codEditora)[0]
    return editora ? editora.nome : ''
  }
  
  getEditoras(): Array<Editora>{
    return editoras
  }
}